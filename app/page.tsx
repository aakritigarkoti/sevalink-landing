"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import HowItWorksSection from "@/components/sections/how-it-works";
import ServicesSection from "@/components/sections/services-section";
import { ForWhomSection } from "@/components/sections/for-whom";
import { WhySevaLink } from "@/components/sections/why-sevalink";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { GetStartedSection } from "@/components/sections/get-started-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { HomeCareServicesSection } from "@/components/sections/home-care-services-section";

export default function Home() {
  const [activeMode, setActiveMode] = useState<"emergency" | "homecare">("emergency");

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      {/* Top Navigation */}
      <Header activeMode={activeMode} onModeChange={setActiveMode} />

      <main className="pt-[8.25rem] sm:pt-[8.75rem] md:pt-28">

        {/* 1. Main Banner */}
        <HeroSection mode={activeMode} />

        {/* 3. Detailed Services (Neon/Animated Cards) */}
        <ServicesSection />

        {/* 4. Target Audience (Architecture based) */}
        <ForWhomSection />

        {/* 5. Process Flow (Phone & Map Animation) */}
        <HowItWorksSection />

        {/* 6. Key Differentiators (8 Points & Image) */}
        <WhySevaLink />

        {/* 6.5 Home Care Services */}
        <HomeCareServicesSection />

        {/* 7. Social Proof (City-wise Filters) */}
        <TestimonialsSection />

        {/* 8. Download App CTA */}
        <GetStartedSection />

        {/* 9. Trusted Hospital Partners */}
        <PartnersSection />

        {/* 10. Frequently Asked Questions */}
        <FAQSection />

        {/* 11. Final CTA */}
        <FinalCTASection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}