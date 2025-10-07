import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { verifyAccessToken } from "@/utils/auth";
import { cookies } from "next/headers";

export async function GET(req) {
  try {
    const cookieStore = cookies();
    const Token = cookieStore.get("token")?.value;
    if (!Token) {
      return Response.json(
        { message: ["Access Token is not available !!"], data: null },
        { status: 401 }
      );
    }
    const tokenPayload = verifyAccessToken(Token);
    if (!tokenPayload) {
      return Response.json(
        { message: ["Access Token has expire !!"], data: null },
        { status: 401 }
      );
    }
    connectToDB();
    const user = await UserModel.findOne(
      { email: tokenPayload.email },
      "-password -__v"
    );
    if (!user) {
      return Response.json(
        { message: ["User not found !!"], data: null },
        { status: 404 }
      );
    }
    return Response.json(
      { message: ["ok"], data: user },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(
      `getMe (GET) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [`getMe (GET) : The request encountered a server error ==>${err.message}`],
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
