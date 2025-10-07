import connectToDB from "@/configs/db";
import ProjectModel from "@/models/Project";
import { pathSlicer } from "@/utils/tools";
import { S3 } from "aws-sdk";
export async function GET(req, { params }) {
  try {
    connectToDB();
    const id = params.id;
    const project = await ProjectModel.findOne({ _id: id }, "-__v");
    return Response.json(
      {
        message: ["ok"],
        data: project,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(
      `projects / [id] (GET) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `projects / [id] (GET) : The request encountered a server error ==>${err.message}`,
        ],
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
export async function PUT(req, { params }) {
  const BUCKET = process.env.LIARA_BUCKET_NAME;
  const s3 = new S3({
    accessKeyId: process.env.LIARA_ACCESS_KEY,
    secretAccessKey: process.env.LIARA_SECRET_KEY,
    endpoint: process.env.LIARA_ENDPOINT,
  });
  try {
    connectToDB();
    const id = params.id;
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
    const project = await ProjectModel.findOne({ _id: id });
    let images = null;
    if (!project) {
      return Response.json(
        { message: ["Project not found!!"], data: null },
        { status: 404 }
      );
    }
    if (reqImages) {
      images = await Promise.all(
        reqImages.map(async (image) => {
          if (project.images.includes(image)) {
            return image;
          } else if (image instanceof Blob) {
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
      project.images.forEach(async (image) => {
        if (!reqImages.includes(image)) {
          const imgDir = `${pathSlicer(image).slice(2).join("/")}`; //-1
          const params = {
            Bucket: BUCKET,
            Key: imgDir,
          };
          await s3.deleteObject(params).promise();
        }
      });
    }
    const projectUpdated = await ProjectModel.findOneAndUpdate(
      { _id: id },
      {
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
        images,
      },
      { new: true }
    );
    if (!projectUpdated) {
      if (reqImages) {
        images.forEach(async (image) => {
          if (!project.images.includes(image)) {
            const imgDir = `${pathSlicer(image).slice(2).join("/")}`; //-1
            const params = {
              Bucket: BUCKET,
              Key: imgDir,
            };
            await s3.deleteObject(params).promise();
          }
        });
      }
      throw new Error({
        message: " Unexpected error in Update Project model !! ",
      });
    }
    if (reqImages) {
      project.images.forEach(async (image) => {
        if (!images.includes(image)) {
          const imgDir = `${pathSlicer(image).slice(2).join("/")}`; //-1
          const params = {
            Bucket: BUCKET,
            Key: imgDir,
          };
          await s3.deleteObject(params).promise();
        }
      });
    }
    return Response.json(
      {
        message: [
          "The project was successfully updated",
          "پروژه با موفقیت آپدیت شد",
        ],
        data: null,
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(
      `project / [id] (PUT) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `project / [id] (PUT) : The request encountered a server error ==>${err.message}`,
        ],
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
export async function DELETE(req, { params }) {
  const BUCKET = process.env.LIARA_BUCKET_NAME;
  const s3 = new S3({
    accessKeyId: process.env.LIARA_ACCESS_KEY,
    secretAccessKey: process.env.LIARA_SECRET_KEY,
    endpoint: process.env.LIARA_ENDPOINT,
  });
  try {
    // const user = await authUser();
    // if (user.role !== roles.ADMIN && user.role !== roles.SUPER_ADMIN) {
    //   return Response.json(
    //     {
    //       message: ["You are not allowed to use this api"],
    //       data: null,
    //     },
    //     {
    //       status: 403,
    //     }
    //   );
    // }
    connectToDB();
    const id = params.id;
    const project = await ProjectModel.findOneAndDelete({ _id: id });
    if (!project) {
      return Response.json(
        { message: ["The project was not found"], data: null },
        { status: 404 }
      );
    }
    if (project.images.length > 0) {
      project.images.forEach(async (image) => {
        const imgDir = `${pathSlicer(image).slice(2).join("/")}`; //-1
        const params = {
          Bucket: BUCKET,
          Key: imgDir,
        };
        await s3.deleteObject(params).promise();
      });
    }
    return Response.json(
      {
        message: ["Project deleted successfully", "پروژه با موفقیت حذف شد"],
        data: null,
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(
      `project / [id] (DELETE) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `project / [id] (DELETE) : The request encountered a server error ==>${err.message}`,
        ],
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
