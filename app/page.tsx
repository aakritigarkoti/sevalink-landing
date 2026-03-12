import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { PageLoader } from "@/components/ui/page-loader";
import StatsSection from "@/components/sections/stats-section";
import ServicesSection from "@/components/sections/services-section";
import HowItWorksSection from "@/components/sections/how-it-works";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <PageLoader />
      <Header />
      <main>
        {/* Hero Section: Top main banner */}
        <HeroSection />

        {/* Stats: Numbers like 0 min response, 0.0 ratings */}
        <StatsSection />

        {/* Services: Features of SevaLink */}
        <ServicesSection /> 

        {/* How It Works: The 4 steps with Phone Mockup */}
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
}