import React from "react";
import type { City } from "@/lib/cities";

export default function Itinerary({ city }: { city: City }) {
  return (
    <section className="max-w-7xl mx-auto w-full min-w-0 mt-10 py-10">
      <h2 className="text-2xl font-bold mb-8 max-md:text-xl max-md:mb-6">Itinerary</h2>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 max-md:gap-4">
        <div className="relative border-l-[2px] border-[#E5E7EB] pl-8 space-y-8 max-md:pl-6 max-md:space-y-5">
          {city.itinerary.map((item, index) => (
            <div key={index} className="relative w-full max-w-[359px] max-md:max-w-none">
              <div className="absolute -left-[48px] max-md:-left-[40px] w-8 h-8 rounded-full bg-[#EA004A] text-white flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>

              <p className="font-semibold text-[18px] leading-[28px] tracking-[0px] ">{item.time}</p>

              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className=" mt-1 font-medium text-[16px] leading-[24px] tracking-[0px] ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="w-full max-w-[420px] h-[300px] rounded-xl overflow-hidden max-md:h-[220px]">
          <iframe
            className="w-full h-full"
            src={city.mapEmbedSrc}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}