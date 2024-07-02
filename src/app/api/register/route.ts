import { db } from "../../../../db";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { email, name, password } = await request.json();
    const isUser = await db.user.findUnique({ where: { email: email } });

    if (isUser)
      return Response.json({
        error: "User already exist",
      });

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    const user = await db.user.create({
      data: {
        email: email,
        hash: hash,
        name: name,
      },
    });

    return Response.json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      error: "Something went wrong",
      success: false,
    });
  }
}
