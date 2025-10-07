import connectToDB from "@/configs/db";
import RefreshTokenModel from "@/models/RefreshToken";
import { generateAccessToken, verifyRefreshToken } from "@/utils/auth";
import { cookies } from "next/headers";
export async function GET(req) {
  try {
    const refreshToken = cookies().get("refresh-token")?.value;
    if (!refreshToken) {
      return Response.json(
        { message: ["Refresh Token is not available !!"], data: null },
        { status: 401 }
      );
    }
    const tokenPayload = verifyRefreshToken(refreshToken);
    if (!tokenPayload) {
      return Response.json(
        { message: ["Refresh Token has expire !!"], data: null },
        { status: 401 }
      );
    }
    connectToDB();
    const user = await RefreshTokenModel.findOne({ token: refreshToken })
      .populate("user")
      .exec();

    if (!user) {
      return Response.json(
        { message: ["Refresh Token is not available !!"], data: null },
        { status: 401 }
      );
    }
    const newAccessToken = generateAccessToken({ email: user.user.email });
    return Response.json(
      { message: ["The new Access Token has been created successfully"] },
      {
        status: 200,
        headers: {
          "Set-Cookie": `token=${newAccessToken};path=/;httpOnly=true;`,
        },
      }
    );
  } catch (err) {
    console.log(
      `refresh (GET) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `refresh (GET) : The request encountered a server error ==>${err.message}`,
        ],
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
