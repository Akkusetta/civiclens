import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import FeatureCards from "@/components/FeatureCards";
import RecentPosts from "@/components/RecentPosts";

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />
      <Hero />
      <StatsSection />
      <FeatureCards />
      <RecentPosts />
    </main>
  );
}