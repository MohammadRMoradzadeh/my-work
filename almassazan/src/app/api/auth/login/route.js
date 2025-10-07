import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import RefreshTokenModel from "@/models/RefreshToken";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyPassword,
} from "@/utils/auth";

export async function POST(req) {
  try {
    const body = await req.json();
    const { identifier, password } = body;
    connectToDB();
    const user = await UserModel.findOne({
      $or: [
        { userName: identifier },
        { email: identifier },
        { phoneNumber: identifier },
      ],
    });
    if (!user) {
      return Response.json(
        { message: ["User not found !!", "کاربر پیدا نشد !!"], data: null },
        { status: 404 }
      );
    }
    const isCorrectPassword = await verifyPassword(password, user.password);
    if (!isCorrectPassword) {
      return Response.json(
        {
          message: [
            "Username or password is not correct!!",
            "نام کاربری یا رمز عبور صحیح نمی باشد !!",
          ],
          data: null,
        },
        { status: 401 }
      );
    }

    const { _id, email } = user;
    const accessToken = generateAccessToken({ email });
    const refreshToken = generateRefreshToken({ email });
    const expiresIn = 7 * 24 * 60 * 60 * 1000; // 7 روز
    const expiresAt = new Date(Date.now() + expiresIn);
    const refreshModelCreated = await RefreshTokenModel.create({
      token: refreshToken,
      user: _id,
      expiresAt,
    });
    if (!refreshModelCreated) {
      throw new Error({ message: " Unexpected error in refresh model !! " });
    }
    const headers = new Headers();
    headers.append("Set-Cookie", `token=${accessToken};path=/; httpOnly=true;`);
    headers.append(
      "Set-Cookie",
      `refresh-token=${refreshToken};path=/; httpOnly=true;`
    );
    return Response.json(
      {
        message: ["User successfully logged in", "کاربر با موفقیت وارد شد"],
        data: null,
      },
      {
        status: 200,
        headers,
      }
    );
  } catch (err) {
    console.log(
      `login (POST) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `login (POST) : The request encountered a server error ==>${err.message}`,
        ],
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
