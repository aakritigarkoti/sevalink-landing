import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServicesCatalogSection } from "@/components/sections/services-catalog-section";

export const metadata = {
  title: "Our Services — SevaLink",
  description:
    "SevaLink offers ambulance booking (BLS, ALS, ICU on Wheels, Neonatal, Patient Transport), homecare services, and hospital appointment booking in Rajkot, Gujarat.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <Header />

      <main className="pt-28 sm:pt-32 lg:pt-36">
        <ServicesCatalogSection />
      </main>

      <Footer />
    </div>
  );
}
