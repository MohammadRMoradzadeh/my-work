import React from "react";
import { redirect } from "next/navigation";
import Login from "@/components/templates/login/Login";
import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { cookies } from "next/headers";
import { verifyRefreshToken } from "@/utils/auth";

async function page() {
  try {
    await connectToDB();
    const refreshToken = cookies().get("refresh-token")?.value;
    if (!refreshToken) {
      throw new Error("Refresh Token is not available !!");
    }
    const tokenPayload = verifyRefreshToken(refreshToken);
    if (!tokenPayload) {
      throw new Error("Refresh Token has expire !!");
    }
    const user = await UserModel.findOne(
      { email: tokenPayload.email },
      "-password"
    );
    if (!user) {
      throw new Error("User not found !!");
    }
    redirect("/en");
  } catch (err) {
    console.log("(login page en) err =>", err);
  }
  return (
    <>
      <Login />
    </>
  );
}

export default page;
