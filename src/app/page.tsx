import HeroSection from "@/components/HeroSection";
import { verifyToken } from "./actions";

export default async function Home() {

  const user: any = await verifyToken()

  return (
    <main className="min-h-screen items-center flex flex-col gap-4">
      <HeroSection />
    </main>
  );
}
