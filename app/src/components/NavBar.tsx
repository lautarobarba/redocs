import { ROUTES } from "@/lib/routes";
import Link from "next/link";
import { LoginButton, LogoutButton } from "./AuthButtons";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const NavBar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="fixed w-full z-20 top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href={ROUTES.HOME} className="flex items-center">
          <span className="text-xl md:text-2xl font-semibold whitespace-nowrap">
            REDOCS
          </span>
        </Link>

        {session ? <LogoutButton /> : <LoginButton />}
      </div>
    </nav>
  );
};
