import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { db } from "../../db";

export function verifyToken() {
  return new Promise(async (resolve) => {
    const cookie = cookies();
    const token = cookie.get("token");

    if (!token) return resolve(null);

    jwt.verify(
      token.value,
      process.env.JWT_SECRET_KEY as string,
      async (err, data:any) => {
        if(err) return resolve(null)
        const user = await db.user.findUnique({ where: { id: data.id } });
        if (!user) resolve(null);;
        return resolve(user);
      }
    );
  });
}
