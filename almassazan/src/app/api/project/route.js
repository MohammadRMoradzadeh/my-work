import ProjectModel from "@/models/Project";
import connectToDB from "@/configs/db";
import { S3 } from "aws-sdk";
import { pathSlicer } from "@/utils/tools";
export async function POST(req) {
  const BUCKET = process.env.LIARA_BUCKET_NAME;
  const s3 = new S3({
    accessKeyId: process.env.LIARA_ACCESS_KEY,
    secretAccessKey: process.env.LIARA_SECRET_KEY,
    endpoint: process.env.LIARA_ENDPOINT,
  });
  try {
    connectToDB();
    const formData = await req.formData();
    const fa_title = formData.get("fa_title");
    const fa_employer = formData.get("fa_employer");
    const fa_startDateYear = formData.get("fa_startDateYear");
    const fa_startDateMonth = formData.get("fa_startDateMonth");
    const fa_duration = formData.get("fa_duration");
    const fa_description = formData.get("fa_description");
    const en_title = formData.get("en_title");
    const en_employer = formData.get("en_employer");
    const en_startDateYear = formData.get("en_startDateYear");
    const en_startDateMonth = formData.get("en_startDateMonth");
    const en_duration = formData.get("en_duration");
    const en_description = formData.get("en_description");
    const reqImages = formData.getAll("images");
    let images = null;
    const project = await ProjectModel.create({
      fa_title,
      fa_employer,
      fa_startDate: { year: fa_startDateYear, month: fa_startDateMonth },
      fa_duration,
      fa_description,
      en_title,
      en_employer,
      en_startDate: { year: en_startDateYear, month: en_startDateMonth },
      en_duration,
      en_description,
    });
    if (!project) {
      throw new Error({ message: " Unexpected error in Project model !! " });
    }
    if (reqImages) {
      images = await Promise.all(
        reqImages.map(async (image) => {
          if (image instanceof Blob) {
            const buffer = Buffer.from(await image.arrayBuffer());
            const folderName = Date.now();
            const imgPath = `uploads/project/${
              project._id
            }/images/${folderName}/${image.name.replace(/[\s()]+/g, '_')}`;
            const params = {
              Bucket: BUCKET,
              Key: imgPath,
              Body: buffer,
              ACL: "public-read",
            };
            const data = await s3.upload(params).promise();
            return data.Location;
          } else {
            return Response.json(
              { message: ["Invalid request data"], data: null },
              { status: 400 }
            );
          }
        })
      );

      const updatedProject = await ProjectModel.findOneAndUpdate(
        { _id: project._id },
        {
          images,
        },
        { new: true }
      );
      if (!updatedProject) {
        images.forEach(async (image) => {
          const imgDir = `${pathSlicer(image).slice(2).join("/")}`; //-1
          const params = {
            Bucket: BUCKET,
            Key: imgDir,
          };
          await s3.deleteObject(params).promise();
        });
        throw new Error({ message: " Unexpected error in Engineer model !! " });
      }
    }

    return Response.json(
      {
        message: ["Project registered successfully", "پروژه با موفقیت ثبت شد"],
        data: null,
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    console.log(
      `project (POST) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `project (POST) : The request encountered a server error ==>${err.message}`,
        ],
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
