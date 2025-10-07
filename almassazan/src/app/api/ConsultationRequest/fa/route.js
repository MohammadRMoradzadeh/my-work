import connectToDB from "@/configs/db";
import ConsultationRequestModel from "@/models/ConsultationRequest";
import { S3 } from "aws-sdk";
export async function POST(req) {
  const BUCKET = process.env.LIARA_BUCKET_NAME;
  const s3 = new S3({
    accessKeyId: process.env.LIARA_ACCESS_KEY,
    secretAccessKey: process.env.LIARA_SECRET_KEY,
    endpoint: process.env.LIARA_ENDPOINT,
  });
  try {
    await connectToDB();
    const formData = await req.formData();
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const length = formData.get("length");
    const width = formData.get("width");
    const file = formData.get("file");
    const useOfTheStructure = formData.get("useOfTheStructure");
    const floors = formData.get("floors");
    const foundation = formData.get("foundation");
    const address = formData.get("address");
    const description = formData.get("description");
    let fileUrl = null;
    const consultation = await ConsultationRequestModel.create({
      firstName,
      lastName,
      phone,
      email,
      length,
      width,
      useOfTheStructure,
      floors,
      foundation,
      address,
      description,
    });
    if (!consultation) {
      throw new Error({
        message: " Unexpected error in Consultation Request model !! ",
      });
    }
    if (file) {
      if (file instanceof Blob) {
        const buffer = Buffer.from(await file.arrayBuffer());
        const folderName = Date.now();
        const filePath = `uploads/consultations/${
          consultation._id
        }/files/${folderName}/${file.name.replace(/[\s()]+/g, "_")}`;
        const params = {
          Bucket: BUCKET,
          Key: filePath,
          Body: buffer,
          ACL: "public-read",
        };
        const data = await s3.upload(params).promise();
        fileUrl = data.Location;
      } else {
        return Response.json(
          { message: ["Invalid request data"], data: null },
          { status: 400 }
        );
      }

      const updatedConsultation =
        await ConsultationRequestModel.findOneAndUpdate(
          { _id: consultation._id },
          {
            file: fileUrl,
          },
          { new: true }
        );
      if (!updatedConsultation) {
        const imgDir = `${pathSlicer(fileUrl).slice(2).join("/")}`; //-1
        const params = {
          Bucket: BUCKET,
          Key: imgDir,
        };
        await s3.deleteObject(params).promise();
        throw new Error({
          message: " Unexpected error in Consultation Request model !! ",
        });
      }
    }

    return Response.json(
      {
        message: [
          "The consultation request was successfully registered",
          "درخواست مشاوره با موفقیت ثبت شد",
        ],
        data: null,
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    console.log(
      `Consultation Request / fa (POST) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `Consultation Request / fa (POST) : The request encountered a server error ==>${err.message}`,
        ],
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
