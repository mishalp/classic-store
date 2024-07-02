import Categories from "@/components/Categories";
import HeroSection from "@/components/HeroSection";
import HomeProducts from "@/components/HomeProducts";

export default async function Home() {

  return (
    <main className="min-h-screen items-center flex flex-col mb-2">
      <HeroSection />
      <Categories />
      <HomeProducts />
    </main>
  );
}
