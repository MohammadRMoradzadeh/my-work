import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { hashPassword } from "@/utils/auth";
import { roles } from "@/utils/dataContainer";
import { S3 } from "aws-sdk";
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
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const userName = formData.get("userName");
    const password = formData.get("password");
    const phoneNumber = formData.get("phoneNumber");
    const email = formData.get("email");
    const image = formData.get("profile_image");

    const userExists = await UserModel.findOne({
      $or: [{ userName }, { phoneNumber }, { email }],
    });

    if (userExists) {
      return Response.json(
        {
          message: [
            "There is a user with this profile in the system !!",
            "کاربری با این مشخصات در سیستم وجود دارد !!",
          ],
        },
        {
          status: 409,
        }
      );
    }

    const users = await UserModel.find({});
    const role = users.length > 0 ? roles.USER : roles.SUPER_ADMIN;
    const hashedPassword = await hashPassword(password);
    const user = await UserModel.create({
      firstName,
      lastName,
      userName,
      phoneNumber,
      email,
      password: hashedPassword,
      role,
    });
    if (!user) {
      throw new Error({ message: " Unexpected error in User model !! " });
    }
    if (image) {
      const buffer = Buffer.from(await image.arrayBuffer());
      const folderName = Date.now();
      const imgPath = `uploads/user/${
        user._id
      }/profile_images/${folderName}/${image.name.replace(/[\s()]+/g, '_')}`;
      const params = {
        Bucket: BUCKET,
        Key: imgPath,
        Body: buffer,
        ACL: "public-read",
      };
      const data = await s3.upload(params).promise();
      const updatedUser = await UserModel.findOneAndUpdate(
        { _id: user._id },
        {
          profile_image: data.Location,
        },
        { new: true }
      );
      if (!updatedUser) {
        const imgDir = `${pathSlicer(data.Location).slice(2).join("/")}`; //-1
        const params = {
          Bucket: BUCKET,
          Key: imgDir,
        };
        await s3.deleteObject(params).promise();
        throw new Error({ message: " Unexpected error in User model !! " });
      }
    }

    return Response.json(
      {
        message: [
          "User registration was successful",
          "ثبت نام کاربر با موفقیت انجام شد",
        ],
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    console.log(
      `signup (POST) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `signup (POST) : The request encountered a server error ==>${err.message}`,
        ],
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
