import connectToDB from "@/configs/db";
import { hash, compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import UserModel from "@/models/User";
import { role } from "./dataContainer";

const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

const generateAccessToken = (data) => {
  const token = sign({ ...data }, process.env.AccessTokenSecretKey, {
    expiresIn: "60s",
  });
  return token;
};

const verifyAccessToken = (token) => {
  try {
    const tokenPayload = verify(token, process.env.AccessTokenSecretKey);
    return tokenPayload;
  } catch (err) {
    console.log("Verify Access Token Error ->", err);
    return null;
  }
};

const generateRefreshToken = (data) => {
  const token = sign({ ...data }, process.env.RefreshTokenSecretKey, {
    expiresIn: "7d",
  });
  return token;
};
const verifyRefreshToken = (token) => {
  try {
    const tokenPayload = verify(token, process.env.RefreshTokenSecretKey);
    return tokenPayload;
  } catch (err) {
    console.log("Verify Refresh Token Error ->", err);
    return null;
  }
};

const validatePassword = (password) => {
  const pattern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
  return pattern.test(password);
};

const authUser = async () => {
  try {
    await fetch("/api/auth/refresh");
    connectToDB();
    const token = cookies().get("token")?.value;
    if (!token) {
      return null;
    }
    const tokenPayload = verify(token, process.env.AccessTokenSecretKey);
    const user = await UserModel.findOne({ email: tokenPayload.email });
    return user;
  } catch (err) {
    console.log("(utils->auth.js-> authUser)  Error:", err);
    return null;
  }
};

export {
  hashPassword,
  verifyPassword,
  generateAccessToken,
  verifyAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
  validatePassword,
  authUser,
};
