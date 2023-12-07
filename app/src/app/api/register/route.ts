import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import knexClient from "@/database/knex.client";
import { User } from "@/database/interfaces/User";

export async function POST(req: Request) {
  try {
    const { email, password, firstname, lastname } = (await req.json()) as {
      email: string;
      password: string;
      firstname?: string;
      lastname?: string;
    };

    const hashedPassword = await hash(password, 12);

    const user: User | undefined = await knexClient<User>("users").insert({
      email: email,
      password: hashedPassword,
      firstname: firstname,
      lastname: lastname,
    });
    console.log(user);

    if (!user) throw Error("Error al crear usuario");

    return NextResponse.json(user);
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
