import React from "react";
import { redirect } from "next/navigation";
import Login from "@/components/templates/login/Login";
import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export default async function Page() {
  try {
    connectToDB();
    const refreshToken = cookies().get("refresh-token")?.value;
    if (!refreshToken) {
      throw new Error(" no have refresh token");
    }
    const tokenPayload = verify(
      refreshToken,
      process.env.RefreshTokenSecretKey
    );
    const user = await UserModel.findOne(
      { email: tokenPayload.email },
      "-password"
    );
    if (!user) {
      throw new Error("user not found!!");
    }
    redirect("/fa");
  } catch (err) {
    console.log("(login page fa) err =>", err);
  }
  return <Login />;
}
