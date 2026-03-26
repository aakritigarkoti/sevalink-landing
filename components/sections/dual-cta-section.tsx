import Link from "next/link";

export function DualCTASection() {
  return (
    <section className="mt-16 landing-section-spacing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-xl bg-gradient-to-br from-red-900 via-red-800 to-red-700 p-7 shadow-lg sm:p-8">
            <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">Emergency?</h3>
            <p className="mt-2 text-sm text-red-100 sm:text-base">Get an ambulance in seconds</p>
            <Link
              href="/services#ambulance-services"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-red-500 px-6 py-3 text-sm font-bold text-white shadow-md transition-colors duration-200 hover:bg-red-400"
            >
              Book Ambulance Now
            </Link>
          </article>

          <article className="rounded-xl bg-gradient-to-br from-green-900 via-green-800 to-green-700 p-7 shadow-lg sm:p-8">
            <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">Need Care?</h3>
            <p className="mt-2 text-sm text-green-100 sm:text-base">Professional home care services</p>
            <Link
              href="/services#homecare-services"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-green-500 px-6 py-3 text-sm font-bold text-white shadow-md transition-colors duration-200 hover:bg-green-400"
            >
              Book Home Service
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
