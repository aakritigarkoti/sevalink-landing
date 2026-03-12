import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { PageLoader } from "@/components/ui/page-loader";
import StatsSection from "@/components/sections/stats-section";
import ServicesSection from "@/components/sections/services-section";
import HowItWorksSection from "@/components/sections/how-it-works";



export default function Home() {
  return (
    <div style={{ backgroundColor: "#FFF3E0" }}>
      <PageLoader />
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection /> 
        {/* Ye wali line delete karo: */}
{/* <div style={{ backgroundColor: "red", height: "200px", color: "white", fontSize: "40px" }}>
  TEST - HOW IT WORKS YAHAN HAI
</div> */}
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
}


