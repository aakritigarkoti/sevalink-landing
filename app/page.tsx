import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { PageLoader } from "@/components/ui/page-loader";
import StatsSection from "@/components/sections/stats-section";
import HowItWorksSection from "@/components/sections/how-it-works";
import ServicesSection from "@/components/sections/services-section";

// Naye sections jo humne abhi banaye
import { ForWhomSection } from "@/components/sections/for-whom";
import { WhySevaLink } from "@/components/sections/why-sevalink";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      {/* Page transitions/loading effect */}
      <PageLoader />
      
      {/* Top Navigation */}
      <Header />
      
      <main>
        {/* 1. Main Banner */}
        <HeroSection />

        {/* 2. Trust Indicators & Numbers */}
        <StatsSection />

        {/* 3. Detailed Services (Neon/Animated Cards) */}
        <ServicesSection />

        {/* 4. Target Audience (Architecture based) */}
        <ForWhomSection />

        {/* 5. Process Flow (Phone & Map Animation) */}
        <HowItWorksSection />

        {/* 6. Key Differentiators (8 Points & Image) */}
        <WhySevaLink />

        {/* 7. Social Proof (City-wise Filters) */}
        <TestimonialsSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}