import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServicesCatalogSection } from "@/components/sections/services-catalog-section";

export default function ServicesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <Header />

      <main className="pt-24 sm:pt-28">
        <ServicesCatalogSection />
      </main>

      <Footer />
    </div>
  );
}
