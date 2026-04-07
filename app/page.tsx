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
import { ServiceAvailabilitySection } from "@/components/sections/service-availability-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[3.5rem] sm:pt-[4.5rem] md:pt-16">
        {/* 1. Main Banner */}
        <HeroSection />
        {/* 2. Detailed Services */}
        <ServicesSection />
        {/* 3. Target Audience */}
        <ForWhomSection />
        {/* 4. Process Flow */}
        <HowItWorksSection />
        {/* 5. Key Differentiators */}
        <WhySevaLink />
        {/* 6. Home Care Services */}
        <HomeCareServicesSection />
        {/* 7. Service Availability */}
        <ServiceAvailabilitySection />
        {/* 8. Social Proof */}
        <TestimonialsSection />
        {/* 9. Download App CTA */}
        <GetStartedSection />
        {/* 10. Partner Network */}
        <PartnersSection />
        {/* 11. FAQ */}
        <FAQSection />
        {/* 12. Final CTA */}
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
