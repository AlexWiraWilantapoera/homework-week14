import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  try {
    const { name, email, password } = await req.json();
    if (!name || !email || !password) throw { name: "invaliduser" };
    const hashedPassword = await bcrypt.hash(password, 10);
    const respon = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });
    console.log(respon);
    return NextResponse.json({ message: "Create user success" });
  } catch (error) {
    if (error.name === "invaliduser") {
      return NextResponse.json({ message: "Email or password is invalid" });
    } else {
      return NextResponse.json({ message: "Internal Server Error" });
    }
  }
}
