import { NavBar } from "@/components/NavBar";
import { UserCard } from "@/components/UserCard";
import { Button } from "@/components/ui/Button";
import { ModeToggle } from "@/components/ui/ThemeToggleButton";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const HomePage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <Button>Click me</Button> */}
        <hr />
        <h1>Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>

        <hr />
        <UserCard />

        <hr />
        <ModeToggle />
      </main>
    </>
  );
};

export default HomePage;
