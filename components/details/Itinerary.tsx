import React from "react";

type Item = {
  time: string;
  title: string;
  description: string;
};

const itinerary: Item[] = [
  {
    time: "09:00 — 10:00",
    title: "Registan Square",
    description:
      "Explore the heart of ancient Samarkand. Visit UlughBeg Madrasah, Sherdor Madrasah, and Tilya-Kori Madrasah",
  },
  {
    time: "10:10 — 11:00",
    title: "Gur-Emir Mausoleum",
    description:
      "The resting place of Amir Temur (Tamerlane). Marvel at the golden interior and iconic ribbed dome.",
  },
  {
    time: "11:10 — 12:00",
    title: "Bibi-Khanym Mosque",
    description:
      "Once one of the largest mosques in the Islamic world. A masterpiece of Timurid architecture",
  },
  {
    time: "12:10 — 13:00",
    title: "Siyob Bazaar",
    description:
      "Walk through Samarkand’s oldest marketplace. Taste local dried fruits, nuts, halva, and traditional breads",
  },
  {
    time: "13:00 — 14:00",
    title: "Lunch Break",
    description: "Plov (Samarkand style), shashlik",
  },
 
];

export default function Itinerary() {
  return (
    <section className="max-w-7xl mx-auto mt-10 py-10">
      <h2 className="text-2xl font-bold mb-8">Itinerary</h2>

      <div className="flex gap-5 gap-10">
        <div className="relative border-l-[2px] border-[#E5E7EB]  pl-8 space-y-10">
          {itinerary.map((item, index) => (
            <div key={index} className="relative w-[359px]">
              <div className="absolute -left-[48px] w-8 h-8 rounded-full bg-[#EA004A] text-white flex items-center justify-center text-sm font-bold">
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
        
        <div className="w-[420px] h-[300px] rounded-xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://maps.google.com/maps?q=samarkand&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}