import connectToDB from "@/configs/db";
import EngineerModel from "@/models/Engineer";
import { S3 } from "aws-sdk";
export async function POST(req) {
  const BUCKET = process.env.LIARA_BUCKET_NAME;
  const s3 = new S3({
    accessKeyId: process.env.LIARA_ACCESS_KEY,
    secretAccessKey: process.env.LIARA_SECRET_KEY,
    endpoint: process.env.LIARA_ENDPOINT,
  });
  try {
    const formData = await req.formData();
    const fa_fullName = formData.get("fa_fullName");
    const en_fullName = formData.get("en_fullName");
    const fa_role = formData.get("fa_role");
    const en_role = formData.get("en_role");
    const fa_evidence = formData.get("fa_evidence");
    const en_evidence = formData.get("en_evidence");
    const fa_workRecords = formData.getAll("fa_workRecords");
    const en_workRecords = formData.getAll("en_workRecords");
    const email = formData.get("email");
    const reqImage = formData.get("image");
    let image = null;
    connectToDB();
    const engineer = await EngineerModel.create({
      fa_fullName,
      en_fullName,
      fa_role,
      en_role,
      fa_evidence,
      en_evidence,
      fa_workRecords,
      en_workRecords,
      email,
    });
    if (!engineer) {
      throw new Error({ message: " Unexpected error in engineer model !! " });
    }
    if (reqImage) {
      if(reqImage instanceof Blob) {
        const buffer = Buffer.from(await reqImage.arrayBuffer());
        const folderName = Date.now();
        const imgPath = `uploads/engineer/${
          engineer._id
        }/images/${folderName}/${reqImage.name.replace(/[\s()]+/g, "_")}`;
        const params = {
          Bucket: BUCKET,
          Key: imgPath,
          Body: buffer,
          ACL: "public-read",
        };
        const data = await s3.upload(params).promise();
        image = data.Location;
      } else {
        return Response.json(
          { message: ["Invalid request data"], data: null },
          { status: 400 }
        );
      }
      const updatedEngineer = await EngineerModel.findOneAndUpdate(
        { _id: engineer._id },
        {
          image,
        },
        { new: true }
      );
      if (!updatedEngineer) {
        const imgDir = `${pathSlicer(image).slice(2).join("/")}`; //-1
        const params = {
          Bucket: BUCKET,
          Key: imgDir,
        };
        await s3.deleteObject(params).promise();
        throw new Error({ message: " Unexpected error in Engineer model !! " });
      }
    }

    return Response.json(
      {
        message: ["Engineer successfully added", "مهندس با موفقیت اضافه شد"],
        data: null,
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    console.log(
      `engineer (POST) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `engineer (POST) : The request encountered a server error ==>${err.message}`,
        ],
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
