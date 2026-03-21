"use client"

import React, { useMemo, useState } from "react"
import Image from "next/image"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
import { AnimatePresence, motion } from "framer-motion"
import type { City } from "@/lib/cities"
import {
  FaUser,
  FaChevronDown,
  FaCalendarAlt,
  FaGlobe
} from "react-icons/fa"
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi"

function toYyyyMmDd(date: Date) {
  return date.toISOString().slice(0, 10)
}

// Panel height must always be exactly 628px on desktop.
// Accordion areas have fixed heights so total never shifts:
//   Header (price)           : ~72px
//   Guests button            : 56px
//   Guests panel (fixed)     : 220px  (hidden = 0, reserved space via CSS)
//   Date button              : 56px
//   Date panel (fixed)       : 220px
//   Lang button              : 56px
//   Lang panel (fixed)       : 116px
//   Submit button + padding  : 68px
// Strategy: only ONE panel open at a time. Each panel has a fixed pixel
// height with overflow-y-auto so content scrolls inside it.
// Total with ONE open = 72 + 56 + 220 + 56 + 56 + 56 + 68 = 584px → fits in 628px ✓
// The card itself is h-[628px] on lg screens with flex-col layout.

export default function CityDetailWidget({ city }: { city: City }) {
  const images = city.galleryImages
  const [mainIndex, setMainIndex] = useState(0)

  const [date, setDate] = useState<Date | null>(null)
  const [openPanel, setOpenPanel] = useState<"guests" | "date" | "lang" | null>(null)

  const [adult, setAdult] = useState(1)
  const [child, setChild] = useState(0)
  const [infant, setInfant] = useState(0)

  // Booking language is independent from i18n site language.
  const [selectedTourLanguage, setSelectedTourLanguage] = useState("uz")

  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)

  const selectedPayload = useMemo(
    () => ({
      citySlug: city.slug,
      date: date ? toYyyyMmDd(date) : null,
      guests: { adult, child, infant },
      language: selectedTourLanguage
    }),
    [city.slug, date, adult, child, infant, selectedTourLanguage]
  )

  const mainImage = images[mainIndex] || images[0]

  const languages = useMemo(
    () => [
      { code: "en", label: "English" },
      { code: "ru", label: "Russian" },
      { code: "uz", label: "O'zbek" },
      { code: "tr", label: "Turkish" }
    ],
    []
  )

  function togglePanel(key: "guests" | "date" | "lang" | null) {
    setOpenPanel((prev) => (prev === key ? null : key))
  }

  function toggleLanguage(code: string) {
    setSelectedTourLanguage(code)
  }

  function openGalleryFromMain() {
    setGalleryIndex(mainIndex)
    setGalleryOpen(true)
  }

  function handleSubmit() {
    console.log("availabilityPayload:", selectedPayload)
  }

  return (
    <div className="w-full min-w-0 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold max-md:text-xl">{city.tourTitle}</h1>
      <p className="text-gray-500 text-sm mt-1 max-md:text-xs">
        {city.reviewsText} • {city.durationText}
      </p>

      <div className="grid min-w-0 grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-6 items-start">
        {/* LEFT: Image gallery — height matches right panel on desktop */}
        <div className="min-w-0 lg:col-span-2 flex flex-col lg:h-[628px]">
          <motion.div
            key={mainIndex}
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            onClick={openGalleryFromMain}
            className="relative flex-1 rounded-xl overflow-hidden cursor-pointer max-md:h-[280px] max-md:flex-none"
            role="button"
            tabIndex={0}
          >
            <Image
              src={mainImage}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors" />
          </motion.div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4 flex-none overflow-x-auto overflow-y-hidden pb-1 [-webkit-overflow-scrolling:touch] min-w-0 max-w-full">
            {images.map((img, i) => (
              <button
                key={`${img}-${i}`}
                type="button"
                onClick={() => setMainIndex(i)}
                className={[
                  "relative rounded-lg overflow-hidden cursor-pointer border-2 transition-all flex-none",
                  i === mainIndex ? "border-[#EA004A]" : "border-transparent"
                ].join(" ")}
                aria-label={`Thumbnail ${i + 1}`}
              >
                <div className="relative w-[110px] h-[74px]">
                  <Image src={img} alt="" fill className="object-cover" />
                </div>
              </button>
            ))}
          </div>
        </div>

     {/* RIGHT: Booking controls */}
     <div
          className="min-w-0 rounded-2xl p-5 shadow-sm w-full flex flex-col"
          style={{ border: "1px solid #F0F0F0", maxHeight: "628px", overflow: "hidden" }}
        >
          {/* Price header */}
          <div className="flex-none mb-3">
            <p className="text-gray-400 text-xs uppercase tracking-wide">Starts from</p>
            <h2 className="text-2xl font-bold text-[#EA004A] mt-0.5">{city.priceFromText}</h2>
          </div>

          {/* Accordions */}
          <div className="flex flex-col gap-2 flex-none">

            {/* ── Guests ── */}
            <div>
              <button
                type="button"
                onClick={() => togglePanel("guests")}
                className="flex justify-between items-center w-full bg-[#F3F4F6] rounded-2xl px-4 py-3"
              >
                <div className="flex items-center gap-2 text-gray-700">
                  <FaUser size={13} />
                  <span className="font-medium text-sm">Guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-xs font-medium">{adult + child + infant} total</span>
                  <motion.span animate={{ rotate: openPanel === "guests" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <FaChevronDown size={11} />
                  </motion.span>
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{ height: openPanel === "guests" ? 216 : 0, opacity: openPanel === "guests" ? 1 : 0 }}
                transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                style={{ overflow: "hidden" }}
                className="mt-1.5"
              >
                <div style={{ height: 216 }} className="overflow-y-auto">
                  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    {(
                      [
                        { key: "adult",  title: "Adult",  value: adult,  age: "Age 12 – 99",        onMinus: () => setAdult((v)  => Math.max(0, v - 1)), onPlus: () => setAdult((v)  => v + 1) },
                        { key: "child",  title: "Child",  value: child,  age: "Age 4 – 11",         onMinus: () => setChild((v)  => Math.max(0, v - 1)), onPlus: () => setChild((v)  => v + 1) },
                        { key: "infant", title: "Infant", value: infant, age: "Age 3 and younger",  onMinus: () => setInfant((v) => Math.max(0, v - 1)), onPlus: () => setInfant((v) => v + 1) },
                      ] as const
                    ).map((row, idx, arr) => (
                      <div key={row.key} className={["flex justify-between items-center px-4 py-3", idx < arr.length - 1 ? "border-b border-gray-100" : ""].join(" ")}>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{row.title}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{row.age}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button type="button" onClick={row.onMinus} disabled={row.value <= 0}
                            className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 disabled:opacity-30 hover:border-[#EA004A] hover:text-[#EA004A] transition-colors">−</button>
                          <span className="text-gray-800 font-semibold text-sm w-4 text-center">{row.value}</span>
                          <button type="button" onClick={row.onPlus}
                            className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:border-[#EA004A] hover:text-[#EA004A] transition-colors">+</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ── Date ── */}
            <div>
              <button
                type="button"
                onClick={() => togglePanel("date")}
                className="flex items-center justify-between w-full bg-[#F3F4F6] rounded-2xl px-4 py-3"
              >
                <div className="flex items-center gap-2 text-gray-700">
                  <FaCalendarAlt size={13} />
                  <span className="font-medium text-sm">
                    {date ? date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "Select date"}
                  </span>
                </div>
                <motion.span animate={{ rotate: openPanel === "date" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <FaChevronDown size={11} />
                </motion.span>
              </button>

              <motion.div
                initial={false}
                animate={{ height: openPanel === "date" ? 246 : 0, opacity: openPanel === "date" ? 1 : 0 }}
                transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                style={{ overflow: "hidden" }}
                className="mt-1.5"
              >
                <div style={{ height: 246 }} className="overflow-y-auto">
                  <div className="bg-white rounded-2xl border border-gray-100 px-2 py-1">
                    <DayPicker
                      mode="single"
                      selected={date ?? undefined}
                      onSelect={(d) => setDate(d ?? null)}
                      classNames={{
                        months: "flex flex-col",
                        month: "w-full",
                        caption: "relative flex items-center justify-center px-2 py-2",
                        caption_label: "text-sm font-semibold text-gray-800 absolute left-1/2 -translate-x-1/2",
                        nav: "flex items-center justify-between w-full absolute inset-x-2",
                        nav_button: "w-6 h-6 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10",
                        nav_button_previous: "absolute left-0",
                        nav_button_next: "absolute right-0",
                        table: "w-full border-collapse mt-1",
                        head_row: "flex justify-between",
                        head_cell: "text-gray-400 text-[11px] font-medium w-8 text-center",
                        row: "flex justify-between mt-0.5",
                        cell: "w-8 h-7 text-center p-0",
                        day: "w-8 h-7 rounded-lg text-xs font-medium text-gray-700 hover:bg-red-50 hover:text-[#EA004A] transition-colors",
                        day_selected: "bg-[#EA004A] !text-white hover:bg-[#EA004A] rounded-lg",
                        day_today: "font-bold text-[#EA004A]",
                        day_outside: "text-gray-300",
                        day_disabled: "text-gray-200 cursor-not-allowed",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ── Language ── */}
            <div>
              <button
                type="button"
                onClick={() => togglePanel("lang")}
                className="flex items-center justify-between w-full bg-[#F3F4F6] rounded-2xl px-4 py-3"
              >
                <div className="flex items-center gap-2 text-gray-700">
                  <FaGlobe size={13} />
                  <span className="font-medium text-sm">
                    {languages.find((l) => l.code === selectedTourLanguage)?.label ?? "Language"}
                  </span>
                </div>
                <motion.span animate={{ rotate: openPanel === "lang" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <FaChevronDown size={11} />
                </motion.span>
              </button>

              <motion.div
                initial={false}
                animate={{ height: openPanel === "lang" ? "auto" : 0, opacity: openPanel === "lang" ? 1 : 0 }}
                transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                style={{ overflow: "hidden" }}
                className="mt-1.5"
              >
                <div>
                  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    {languages.map((lang, idx, arr) => {
                      const active = selectedTourLanguage === lang.code
                      return (
                        <label key={lang.code}
                          className={["flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors", idx < arr.length - 1 ? "border-b border-gray-100" : ""].join(" ")}>
                          <span className={["text-sm font-medium", active ? "text-[#EA004A]" : "text-gray-700"].join(" ")}>{lang.label}</span>
                          <input type="radio" name="preferredLanguage" checked={active} onChange={() => toggleLanguage(lang.code)} className="accent-[#EA004A] w-4 h-4" />
                        </label>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Spacer — pushes button to bottom */}
          <div className="flex-1" />

          {/* Submit */}
          <div className="flex-none pt-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#EA004A] text-white text-sm font-semibold py-3.5 rounded-full"
              onClick={handleSubmit}
            >
              Check availability
            </motion.button>
          </div>
        </div>
    
      </div>

      {/* Fullscreen gallery */}
      <AnimatePresence>
        {galleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
          >
            <button
              type="button"
              onClick={() => setGalleryOpen(false)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white"
              aria-label="Close gallery"
            >
              <FiX size={20} />
            </button>

            <button
              type="button"
              onClick={() => setGalleryIndex((v) => (v - 1 + images.length) % images.length)}
              className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white"
              aria-label="Previous image"
            >
              <FiChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={() => setGalleryIndex((v) => (v + 1) % images.length)}
              className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white"
              aria-label="Next image"
            >
              <FiChevronRight size={22} />
            </button>

            <div className="relative w-full max-w-5xl aspect-[16/10]">
              <Image
                src={images[galleryIndex] || images[0]}
                alt=""
                fill
                className="object-contain rounded-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}