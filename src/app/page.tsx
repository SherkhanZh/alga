import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { PopularRoutes } from "@/components/home/PopularRoutes";
import { Cars, ExtraOptions, HowItWorks, Partners } from "@/components/home/Sections";
import { JoinCta } from "@/components/home/JoinCta";
import { Faq } from "@/components/home/Faq";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col bg-surface">
        <Hero />
        {/* Desktop: 64px between sections (Figma). Mobile sections carry their own padding. */}
        <div className="flex flex-col lg:gap-16 lg:py-16">
          <PopularRoutes />
          <HowItWorks />
          <Cars />
          <ExtraOptions />
          <Partners />
        </div>
        <JoinCta />
        <div className="lg:py-16">
          <Faq />
        </div>
      </main>
      <Footer />
    </>
  );
}
