import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { db } from "../../db";

export async function verifyToken() {
  try {
    const cookie = cookies();
    const token = cookie.get("token");
    
    if (!token) return null;

    const data: any = jwt.verify(
      token.value,
      process.env.JWT_SECRET_KEY as string
    );    

    if (!data) return null;

    const user = await db.user.findUnique({ where: { id: data.id } });
    if (!user) return null;

    return user;
  } catch (error) {
    
    return null;
  }
}
