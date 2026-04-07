"use client";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";

type TestimonialItem = CardStackItem & {
  city: string;
  rating: number;
  initials: string;
};

const reviews: TestimonialItem[] = [
  {
    id: 1,
    title: "Priya Patel",
    city: "Rajkot",
    description:
      "Found an ambulance in Rajkot within minutes. The process was quick and stress-free.",
    rating: 5,
    initials: "P",
  },
  {
    id: 2,
    title: "Rohit Sharma",
    city: "Ahmedabad",
    description:
      "Quick and reliable ambulance service in Ahmedabad. Help arrived right on time.",
    rating: 5,
    initials: "R",
  },
  {
    id: 3,
    title: "Mehul Joshi",
    city: "Rajkot",
    description: "Late-night booking in Rajkot was smooth. Driver reached quickly and stayed professional.",
    rating: 5,
    initials: "M",
  },
  {
    id: 4,
    title: "Kavya Shah",
    city: "Ahmedabad",
    description:
      "In Ahmedabad, the ambulance was assigned fast and tracking updates were very clear.",
    rating: 5,
    initials: "K",
  },
  {
    id: 5,
    title: "Nisarg Vora",
    city: "Rajkot",
    description:
      "Support team kept us informed in Rajkot. The ambulance arrived when every minute mattered.",
    rating: 5,
    initials: "N",
  },
  {
    id: 6,
    title: "Ayesha Khan",
    city: "Ahmedabad",
    description:
      "Booked during an emergency in Ahmedabad and got help quickly. Very dependable service.",
    rating: 5,
    initials: "A",
  },
];

export function TestimonialsSection() {
  const [viewportWidth, setViewportWidth] = useState(1280);

  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const isMobile = viewportWidth < 640;
  const isTablet = viewportWidth >= 640 && viewportWidth < 1024;

  const cardWidth = isMobile
    ? Math.max(240, Math.min(300, viewportWidth - 44))
    : isTablet
      ? 320
      : 350;
  const cardHeight = isMobile ? 220 : 240;
  const maxVisible = isMobile ? 3 : 5;
  const overlap = isMobile ? 0.86 : 0.6;
  const spreadDeg = isMobile ? 10 : 26;

  return (
    <section className="min-h-fit flex items-center landing-section-spacing bg-white">
      <div className="max-w-7xl mx-auto w-full text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 sm:mb-5">Trusted by Families in <span className="text-red-600">Rajkot</span></h2>

        {/* Left-to-right stack cards */}
        <div className="mx-auto w-full max-w-6xl">
          <CardStack<TestimonialItem>
            items={reviews}
            initialIndex={0}
            maxVisible={maxVisible}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            overlap={overlap}
            spreadDeg={spreadDeg}
            tiltXDeg={isMobile ? 5 : 8}
            depthPx={isMobile ? 70 : 110}
            activeLiftPx={isMobile ? 12 : 18}
            activeScale={isMobile ? 1.02 : 1.03}
            inactiveScale={isMobile ? 0.9 : 0.94}
            autoAdvance
            intervalMs={2600}
            pauseOnHover
            showDots
            renderCard={(item, state) => (
              <div
                className={`h-full p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FFF3E0] border text-left relative transition-all ${
                  state.active
                    ? "border-red-200 shadow-lg shadow-red-100"
                    : "border-orange-100"
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, idx) => (
                    <Star key={idx} size={14} fill="#DC2626" color="#DC2626" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-5 text-xs sm:text-sm lg:text-base">
                  "{item.description}"
                </p>
                <div className="flex items-center gap-3 absolute bottom-5 left-5 right-5">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-red-200 flex items-center justify-center font-bold text-red-600 text-sm sm:text-base">
                    {item.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base">
                      {item.title}
                    </p>
                    <p className="text-[10px] sm:text-xs text-red-600 font-bold uppercase tracking-tighter">
                      {item.city}
                    </p>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}