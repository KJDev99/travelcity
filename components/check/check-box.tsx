"use client"

import React, { useMemo, useState } from "react"
import Image from "next/image"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
import { AnimatePresence, motion } from "framer-motion"
import type { City } from "@/lib/cities"
import { FaUser, FaChevronDown, FaCalendarAlt, FaGlobe } from "react-icons/fa"
import { FiX } from "react-icons/fi"

function toYyyyMmDd(date: Date) {
    return date.toISOString().slice(0, 10)
}

/* ─── Book Tour Modal ─── */
function BookModal({
    city,
    guests,
    date,
    language,
    onClose,
}: {
    city: City
    guests: number
    date: Date | null
    language: string
    onClose: () => void
}) {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

    function handleSend() {
        if (!validateEmail(email)) {
            setEmailError(true)
            return
        }
        setEmailError(false)
        setSubmitted(true)
    }

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            <motion.div
                className="relative bg-white rounded-[20px] w-full max-w-[460px] p-6 shadow-2xl z-10"
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                >
                    <FiX size={18} className="text-gray-500" />
                </button>

                {submitted ? (
                    <div className="flex flex-col items-center justify-center py-8 gap-3 text-center">
                        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-2">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                                <path d="M5 13l4 4L19 7" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-[#1E2939]">Booking sent!</h3>
                        <p className="text-sm text-gray-500">We will contact you soon as possible.</p>
                        <button
                            onClick={onClose}
                            className="mt-4 bg-[#1E2939] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#2d3d50] transition-colors"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        <h2 className="text-xl font-bold text-[#1E2939]">Book tour</h2>
                        <p className="text-sm text-gray-400 mt-1 mb-5">
                            Fill the form below to book tour we will contact with you soon as possible
                        </p>

                        {/* Summary chips */}
                        <div className="flex flex-wrap gap-2 mb-5">
                            <div className="flex items-center gap-1.5 bg-[#F3F4F6] rounded-full px-3 py-1.5 text-xs font-medium text-[#1E2939]">
                                <FaUser size={10} className="text-gray-400" />
                                Adult x{guests}
                            </div>
                            {date && (
                                <div className="flex items-center gap-1.5 bg-[#F3F4F6] rounded-full px-3 py-1.5 text-xs font-medium text-[#1E2939]">
                                    <FaCalendarAlt size={10} className="text-gray-400" />
                                    {date.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" }).replace(/\//g, ".")}
                                </div>
                            )}
                            <div className="flex items-center gap-1.5 bg-[#F3F4F6] rounded-full px-3 py-1.5 text-xs font-medium text-[#1E2939]">
                                <FaGlobe size={10} className="text-gray-400" />
                                {language}
                            </div>
                        </div>

                        {/* Full Name */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-[#1E2939] mb-1.5">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Anderson"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="w-full h-12 px-4 rounded-[50px] bg-[#F3F4F6] border border-transparent text-sm text-[#1E2939] placeholder:text-gray-400 outline-none focus:border-gray-300 transition-colors"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-[#1E2939] mb-1.5">Email</label>
                            <input
                                type="email"
                                placeholder="example@email.com"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    if (emailError) setEmailError(false)
                                }}
                                className={`w-full h-12 px-4 rounded-[50px] bg-[#F3F4F6] border text-sm text-[#1E2939] placeholder:text-gray-400 outline-none transition-colors ${emailError ? "border-[#EA004A] bg-red-50" : "border-transparent focus:border-gray-300"
                                    }`}
                            />
                            {emailError && (
                                <p className="text-[#EA004A] text-xs mt-1.5">Please enter correct email address</p>
                            )}
                        </div>

                        {/* Phone */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-[#1E2939] mb-1.5">Phone number</label>
                            <input
                                type="tel"
                                placeholder="+998"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full h-12 px-4 rounded-[50px] bg-[#F3F4F6] border border-transparent text-sm text-[#1E2939] placeholder:text-gray-400 outline-none focus:border-gray-300 transition-colors"
                            />
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={onClose}
                                className="flex-1 h-12 rounded-full border border-gray-200 text-sm font-semibold text-[#1E2939] hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSend}
                                className="flex-1 h-12 rounded-full bg-[#1E2939] text-white text-sm font-semibold hover:bg-[#2d3d50] transition-colors"
                            >
                                Send
                            </button>
                        </div>
                    </>
                )}
            </motion.div>
        </motion.div>
    )
}

/* ─── Main Component ─── */
export default function CheckBox({ city }: { city: City }) {
    const [date, setDate] = useState<Date | null>(null)
    const [openPanel, setOpenPanel] = useState<"guests" | "date" | "lang" | null>(null)
    const [adult, setAdult] = useState(1)
    const [child, setChild] = useState(0)
    const [infant, setInfant] = useState(0)
    const [selectedTourLanguage, setSelectedTourLanguage] = useState("uz")
    const [showBookModal, setShowBookModal] = useState(false)

    const languages = useMemo(
        () => [
            { code: "en", label: "English" },
            { code: "ru", label: "Russian" },
            { code: "uz", label: "O'zbek" },
            { code: "tr", label: "Turkish" },
        ],
        []
    )

    function togglePanel(key: "guests" | "date" | "lang") {
        setOpenPanel((prev) => (prev === key ? null : key))
    }

    const selectedLangLabel = languages.find((l) => l.code === selectedTourLanguage)?.label ?? "Language"

    return (
        <>
            <div className="w-full min-w-0 max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold max-md:text-xl">{city.tourTitle}</h1>
                <p className="text-gray-500 text-sm mt-1 max-md:text-xs">
                    {city.reviewsText} • {city.durationText}
                </p>
                <h2 className="mt-10 text-[#1E2939] font-bold text-[24px] max-md:text-[20px] mb-6">
                    Available Tour Options
                </h2>

                <div className="grid min-w-0 grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-6 items-start">

                    {/* LEFT: Tour card */}
                    <div className="min-w-0 lg:col-span-2 flex flex-col">
                        <div className="bg-[#F3F4F6] p-5 rounded-[24px]">
                            <h2 className="text-[#1E2939] text-[20px] font-semibold mb-px">Private Tour</h2>
                            <p className="text-[#6A7282] font-medium mb-6 text-sm">
                                Enjoy a fully personalized journey across Uzbekistan with a private guide, flexible schedule, and
                                exclusive experiences tailored just for you
                            </p>

                            {[
                                { icon: "Check", text: "Personal licensed guide" },
                                { icon: "Check", text: "Flexible itinerary & timing" },
                                { icon: "Check", text: "Private transportation" },
                                { icon: "Check", text: "Cultural experiences tailored to your interests" },
                                { icon: "X", text: "Meals & drinks (lunch/dinner)" },
                                { icon: "X", text: "Personal expenses (souvenirs, snacks, etc.)" },
                            ].map((item) => (
                                <div key={item.text} className="flex gap-x-2 items-center mb-3">
                                    <Image src={`/icon/${item.icon}.svg`} width={24} height={24} alt="" />
                                    <span className="text-[#1E2939] font-medium text-sm">{item.text}</span>
                                </div>
                            ))}

                            <div className="flex flex-wrap mt-6 justify-between items-center gap-4">
                                <div className="flex flex-col">
                                    <p className="text-[#EA004A] font-bold text-[24px]">1,000,000 UZS</p>
                                    <p className="text-[#6A7282] font-medium text-[16px] mt-[-8px] line-through">1,500,000 UZS</p>
                                </div>
                                <button
                                    onClick={() => setShowBookModal(true)}
                                    className="bg-[#EA004A] text-white cursor-pointer font-bold py-3 px-6 rounded-[100px] hover:bg-[#d30042] transition-colors text-sm whitespace-nowrap"
                                >
                                    Select this option
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Booking controls */}
                    <div
                        className="min-w-0 rounded-2xl p-5 shadow-sm w-full flex flex-col"
                        style={{ border: "1px solid #F0F0F0" }}
                    >
                        {/* Price */}
                        <div className="flex-none mb-3">
                            <p className="text-gray-400 text-xs uppercase tracking-wide">Starts from</p>
                            <h2 className="text-2xl font-bold text-[#EA004A] mt-0.5">{city.priceFromText}</h2>
                        </div>

                        {/* Accordions */}
                        <div className="flex flex-col gap-2 flex-none">

                            {/* Guests */}
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
                                            {[
                                                { key: "adult", title: "Adult", value: adult, age: "Age 12 – 99", onMinus: () => setAdult((v) => Math.max(0, v - 1)), onPlus: () => setAdult((v) => v + 1) },
                                                { key: "child", title: "Child", value: child, age: "Age 4 – 11", onMinus: () => setChild((v) => Math.max(0, v - 1)), onPlus: () => setChild((v) => v + 1) },
                                                { key: "infant", title: "Infant", value: infant, age: "Age 3 and younger", onMinus: () => setInfant((v) => Math.max(0, v - 1)), onPlus: () => setInfant((v) => v + 1) },
                                            ].map((row, idx, arr) => (
                                                <div
                                                    key={row.key}
                                                    className={`flex justify-between items-center px-4 py-3 ${idx < arr.length - 1 ? "border-b border-gray-100" : ""}`}
                                                >
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

                            {/* Date */}
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

                            {/* Language */}
                            <div>
                                <button
                                    type="button"
                                    onClick={() => togglePanel("lang")}
                                    className="flex items-center justify-between w-full bg-[#F3F4F6] rounded-2xl px-4 py-3"
                                >
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <FaGlobe size={13} />
                                        <span className="font-medium text-sm">{selectedLangLabel}</span>
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
                                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                                        {languages.map((lang, idx, arr) => {
                                            const active = selectedTourLanguage === lang.code
                                            return (
                                                <label
                                                    key={lang.code}
                                                    className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors ${idx < arr.length - 1 ? "border-b border-gray-100" : ""}`}
                                                >
                                                    <span className={`text-sm font-medium ${active ? "text-[#EA004A]" : "text-gray-700"}`}>
                                                        {lang.label}
                                                    </span>
                                                    <input
                                                        type="radio"
                                                        name="preferredLanguage"
                                                        checked={active}
                                                        onChange={() => setSelectedTourLanguage(lang.code)}
                                                        className="accent-[#EA004A] w-4 h-4"
                                                    />
                                                </label>
                                            )
                                        })}
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <div className="flex-1" />

                        {/* Book button — mobile faqat */}
                        <button
                            onClick={() => setShowBookModal(true)}
                            className="mt-5 lg:hidden w-full h-12 rounded-full bg-[#EA004A] text-white font-bold text-sm hover:bg-[#d30042] transition-colors"
                        >
                            Book now
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {showBookModal && (
                    <BookModal
                        city={city}
                        guests={adult + child + infant}
                        date={date}
                        language={selectedLangLabel}
                        onClose={() => setShowBookModal(false)}
                    />
                )}
            </AnimatePresence>
        </>
    )
}