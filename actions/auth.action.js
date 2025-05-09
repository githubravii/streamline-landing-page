"use server";

import axios from "axios";
import { auth, signIn, signOut } from "@/auth";

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export const signInUsingGoogle = async ({ user, profile }) => {
  try {
    const response = await axios.post(
      `${BASE_API_URL}/auth/google`,
      {
        user,
        profile,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

export const googleLogin = async() =>{
  await signIn("google")
}

export const logout=async () => {
  await signOut({
    callbackUrl: "/",
  })
}

export const userSession = async () => {
  const session = await auth();
  return session ? session : null;
}