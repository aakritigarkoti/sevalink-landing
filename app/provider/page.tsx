import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProviderCatalogSection } from "@/components/sections/provider-catalog-section";

export default function ProviderPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <Header />
      <main>
        <ProviderCatalogSection />
      </main>
      <Footer />
    </div>
  );
}
