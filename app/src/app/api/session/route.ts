import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import knexClient from "@/database/knex.client";
import { User } from "@/database/interfaces/User";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  const users: User[] = await knexClient<User>("users");
  console.log(users);

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}
