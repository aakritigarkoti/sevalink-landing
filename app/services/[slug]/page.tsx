import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

type ServiceDetail = {
  title: string;
  summary: string;
};

const serviceDetails: Record<string, ServiceDetail> = {
  ambulance: {
    title: "Emergency Ambulance",
    summary:
      "Book an ambulance instantly with real-time tracking and smart hospital matching for faster emergency response.",
  },
  homecare: {
    title: "Homecare",
    summary:
      "Get medical care at home including nursing support, elderly care, and post-hospital recovery services.",
  },
  teleconsultation: {
    title: "Teleconsultation",
    summary:
      "Consult doctors online for quick medical advice without visiting the hospital.",
  },
  pharmacy: {
    title: "Pharmacy",
    summary: "Order medicines easily and get them delivered to your doorstep.",
  },
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = serviceDetails[slug];

  if (!detail) {
    notFound();
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <Header />

      <main className="landing-section-spacing">
        <section className="mx-auto max-w-4xl rounded-3xl border border-orange-200/80 bg-gradient-to-br from-white via-[#fff7ee] to-[#ffe8d0] p-8 shadow-[0_12px_32px_rgba(192,110,60,0.12)] sm:p-12">
          <p className="mb-4 inline-block rounded-full bg-red-100 px-4 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-red-600">
            Service Details
          </p>
          <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl">{detail.title}</h1>
          <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">{detail.summary}</p>

          <Link
            href="/services"
            className="mt-8 inline-flex rounded-2xl bg-gray-900 px-5 py-3 text-sm font-black uppercase tracking-wider text-white transition-colors duration-300 hover:bg-red-600"
          >
            Back to Services
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
