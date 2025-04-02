import { loginData } from "@/shared/data";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    if (email === loginData.email && password === loginData.password) {
      const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });

      const json_response = {
        status: "success",
        message: "Login successful",
        token,
      };
      return new NextResponse(JSON.stringify(json_response), {
        status: 200,
      });
    } else {
      const error_response = {
        status: 401,
        message: "Invalid email or password",
      };
      return new NextResponse(JSON.stringify(error_response), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.log(error);

    const error_response = {
      status: "failed",
      message: "Error during login",
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
    });
  }
}
