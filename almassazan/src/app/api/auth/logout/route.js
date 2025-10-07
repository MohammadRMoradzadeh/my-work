import connectToDB from "@/configs/db";
import RefreshTokenModel from "@/models/RefreshToken";
import { cookies } from "next/headers";

export async function GET(req) {
  try {
    connectToDB();
    const cookieStore = cookies();
    const refreshToken = cookieStore.get("refresh-token")?.value;

    if (refreshToken) {
      await RefreshTokenModel.findOneAndDelete({
        token: refreshToken,
      });
    }
    cookieStore.delete("refresh-token");
    cookieStore.delete("token");

    return Response.json(
      {
        message: ["User logged out successfully", "کاربر با موفقیت خارج شد"],
        data: null,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(
      `logout (GET) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `logout (GET) : The request encountered a server error ==>${err.message}`,
        ],
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
