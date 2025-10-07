import connectToDB from "@/configs/db";
import EngineerModel from "@/models/Engineer";
import path from "path";
import { roles } from "@/utils/dataContainer";
import { authUser } from "@/utils/auth";
import { pathSlicer } from "@/utils/tools";

import { S3 } from "aws-sdk";
export async function GET(req, { params }) {
  const id = params.id;
  try {
    connectToDB();
    const engineer = await EngineerModel.findOne({ _id: id }, "-__v");
    return Response.json(
      {
        message: ["ok"],
        data: engineer,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(
      `engineer / [id] (GET) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `engineer / [id] (GET) : The request encountered a server error ==>${err.message}`,
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
    // if (user && user.role !== roles.ADMIN && user.role !== roles.SUPER_ADMIN) {
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
    const engineer = await EngineerModel.findOneAndDelete({ _id: id });
    if (!engineer) {
      return Response.json(
        { message: ["The engineer was not found"], data: null },
        { status: 404 }
      );
    }
    if (engineer.image) {
      const imgDir = `${pathSlicer(engineer.image).slice(2).join("/")}`; //-1
      const params = {
        Bucket: BUCKET,
        Key: imgDir,
      };
      await s3.deleteObject(params).promise();
    }

    return Response.json(
      {
        message: [
          "The engineer was successfully removed",
          "مهندس با موفقیت حذف شد",
        ],
        data: null,
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(
      `engineer / [id] (DELETE) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `engineer / [id] (DELETE) : The request encountered a server error ==>${err.message}`,
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
    const engineer = await EngineerModel.findOne({ _id: id });
    let image = null;
    if (!engineer) {
      return Response.json(
        { message: ["The engineer was not found !!"], data: null },
        { status: 404 }
      );
    }
    if (reqImage) {
      if (engineer.image === reqImage) {
        image = reqImage;
      } else if (reqImage instanceof Blob) {
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
    }
    const engineerUpdated = await EngineerModel.findOneAndUpdate(
      { _id: id },
      {
        fa_fullName,
        en_fullName,
        fa_role,
        en_role,
        fa_evidence,
        en_evidence,
        fa_workRecords,
        en_workRecords,
        email,
        image,
      },
      { new: true }
    );
    if (!engineerUpdated) {
      if (engineer.image !== image && image) {
        const imgDir = `${pathSlicer(image).slice(2).join("/")}`; //-1
        const params = {
          Bucket: BUCKET,
          Key: imgDir,
        };
        await s3.deleteObject(params).promise();
      }
      throw new Error({ message: " Unexpected error in engineer model !! " });
    }
    if (engineer.image !== image && engineer.image) {
      const imgDir = `${pathSlicer(engineer.image).slice(2).join("/")}`; //-1
      const params = {
        Bucket: BUCKET,
        Key: imgDir,
      };
      await s3.deleteObject(params).promise();
    }

    return Response.json(
      {
        message: [
          "The engineer was successfully updated",
          "مهندس با موفقیت آپدیت شد",
        ],
        data: null,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(
      `engineer / [id] (PUT) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `engineer / [id] (PUT) : The request encountered a server error ==>${err.message}`,
        ],
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
