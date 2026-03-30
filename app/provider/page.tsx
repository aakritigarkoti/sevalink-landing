import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProviderCatalogSection } from "@/components/sections/provider-catalog-section";

export default function ProviderPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F3F8FF" }}>
      <Header />
      <main className="scroll-smooth pt-28 sm:pt-32 lg:pt-36">
        <ProviderCatalogSection />
      </main>
      <Footer />
    </div>
  );
}
