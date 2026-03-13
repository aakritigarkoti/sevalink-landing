"use client";
import { Star } from "lucide-react";
import { useState } from "react";

const reviews = [
  { name: "Rahul Sharma", city: "Ahmedabad", text: "Saved my father's life. The tracking link kept our family calm.", rating: 5 },
  { name: "Priya Verma", city: "Delhi", text: "Fastest response I've seen in Delhi. Driver was very professional.", rating: 5 },
  { name: "Suresh Gupta", city: "Mumbai", text: "Transparent pricing is a game changer. Highly recommend.", rating: 5 },
];

export function TestimonialsSection() {
  const [filter, setFilter] = useState("All");
  const cities = ["All", "Ahmedabad", "Delhi", "Mumbai"];

  const filteredReviews = filter === "All" ? reviews : reviews.filter(r => r.city === filter);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-12">Trust From <span className="text-red-600">Every Corner</span></h2>
        
        {/* City Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cities.map(city => (
            <button 
              key={city}
              onClick={() => setFilter(city)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${filter === city ? "bg-red-600 text-white shadow-lg shadow-red-200" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredReviews.map((rev, i) => (
            <div key={i} className="p-8 rounded-3xl bg-[#FFF3E0] border border-orange-100 text-left relative">
              <div className="flex gap-1 mb-4">
                {[...Array(rev.rating)].map((_, idx) => <Star key={idx} size={16} fill="#DC2626" color="#DC2626" />)}
              </div>
              <p className="text-gray-700 italic mb-6">"{rev.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-200 flex items-center justify-center font-bold text-red-600">
                  {rev.name[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{rev.name}</p>
                  <p className="text-xs text-red-600 font-bold uppercase tracking-tighter">{rev.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}