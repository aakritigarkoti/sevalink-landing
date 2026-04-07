import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Page Not Found — SevaLink",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <div className="relative flex items-center justify-center w-24 h-24 mb-8">
          <div className="absolute w-8 h-24 bg-red-100 rounded-full" />
          <div className="absolute w-24 h-8 bg-red-100 rounded-full" />
          <div className="absolute w-5 h-16 bg-red-500 rounded-full" />
          <div className="absolute w-16 h-5 bg-red-500 rounded-full" />
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3">
          404 — Page not found
        </p>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 leading-tight">
          This page doesn&apos;t exist
        </h1>
        <p className="text-base text-gray-500 max-w-sm mb-10 leading-relaxed">
          The link you followed may be broken or the page may have been removed.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-100">
            Back to Home
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-gray-200 text-gray-700 font-bold text-sm hover:border-red-300 hover:text-red-600 transition-colors">
            Contact Support
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
          <Link href="/services" className="hover:text-red-600 transition-colors">Services</Link>
          <Link href="/provider" className="hover:text-red-600 transition-colors">For Providers</Link>
          <Link href="/help" className="hover:text-red-600 transition-colors">Help Center</Link>
          <Link href="/about" className="hover:text-red-600 transition-colors">About</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
