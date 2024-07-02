import { db } from "../../../../db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const user = await db.user.findUnique({ where: { email: email } });
    if (!user)
      return Response.json({
        success: false,
        error: "User not exist",
      });

    const isPassword = bcrypt.compareSync(password, user.hash as string);

    if (!isPassword)
      return Response.json({
        success: false,
        error: "Wrong password",
      });

    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.name },
      process.env.JWT_SECRET_KEY as string,
      {
        expiresIn: process.env.JWT_EXPIRES,
      }
    );

    const cookie = cookies()
    cookie.set("token", token)

    return Response.json({
      success: true,
      user,
      token
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      error: "Something went wrong",
      success: false,
    });
  }
}
