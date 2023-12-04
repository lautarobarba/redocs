import { Button } from "@/components/ui/Button";
import { ModeToggle } from "@/components/ui/ThemeToggleButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Click me</Button>
      <ModeToggle />
    </main>
  );
}
