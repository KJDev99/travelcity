"use client"

import React, { useState } from "react"
import Image from "next/image"
import {
  FaUser,
  FaChevronDown,
  FaChevronUp,
  FaCalendarAlt,
  FaGlobe
} from "react-icons/fa"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { motion, AnimatePresence } from "framer-motion"

export default function TourDetail() {

  const images = [
    "https://images.unsplash.com/photo-1564507592333-c60657eea523",
    "/sec1.png",
    "/sec1.png",
    "/sec1.png",
    "/sec1.png",
    "/sec1.png",
    "/sec1.png",
  ]

  const [mainImage, setMainImage] = useState(images[0])

  const [date, setDate] = useState<Date | null>(null)
  const [dateOpen, setDateOpen] = useState(false)

  const [guestOpen, setGuestOpen] = useState(false)

  const [adult, setAdult] = useState(1)
  const [child, setChild] = useState(0)
  const [infant, setInfant] = useState(0)

  const [langOpen, setLangOpen] = useState(false)
  const [language, setLanguage] = useState("English")

  const languages = ["English", "Russian", "Deutsch", "Turkish"]

  const dropdown = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 }
    }
  }

  return (
    <div className="max-w-7xl m-auto ">

      <h1 className="text-2xl font-bold">
        Samarkand Cultural Heritage Tour
      </h1>

      <p className="text-gray-500 text-sm mt-1">
        120 reviews • 4 days / 3 nights
      </p>

      <div className="grid lg:grid-cols-3 gap-8 mt-6">

        {/* LEFT */}
        <div className="lg:col-span-2">

          <motion.div
            key={mainImage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={mainImage}
              alt=""
              width={900}
              height={500}
              className="rounded-xl h-[420px] object-cover w-full"
            />
          </motion.div>

          <div className="flex gap-3 mt-4">

            {images.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={img}
                  alt=""
                  width={120}
                  height={80}
                  onClick={() => setMainImage(img)}
                  className="rounded-lg cursor-pointer object-cover"
                />
              </motion.div>
            ))}

          </div>

        </div>

        <div className="rounded-xl p-5 shadow-sm h-fit">

          <p className="text-gray-500 text-sm">
            Starts from
          </p>

          <h2 className="text-2xl font-bold text-red-500">
            206,000 UZS
          </h2>

          {/* Guests */}
          <button
            onClick={() => setGuestOpen(!guestOpen)}
            className="flex justify-between bg-[#F3F4F6] items-center w-full rounded-[24px] p-4 mt-4"
          >

            <div className="flex items-center gap-2">
              <FaUser />
              Adult x{adult}
            </div>

            {guestOpen ? <FaChevronUp /> : <FaChevronDown />}

          </button>

          <AnimatePresence>
            {guestOpen && (

              <motion.div
                variants={dropdown}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="bg-[#F3F4F6] rounded-2xl mt-3 p-4"
              >

                <div className="bg-white rounded-2xl ">

                  {/* Adult */}
                  <div className="flex justify-between items-center p-4">

                    <div>
                      <p className="font-medium text-gray-800">Adult</p>
                      <p className="text-sm text-gray-500">(Age 12 - 99)</p>
                    </div>

                    <div className="flex items-center gap-4">

                      <button
                        onClick={() => adult > 1 && setAdult(adult - 1)}
                        className="w-7 h-7 flex items-center justify-center border rounded-full"
                      >
                        -
                      </button>

                      {adult}

                      <button
                        onClick={() => setAdult(adult + 1)}
                        className="w-7 h-7 flex items-center justify-center border rounded-full"
                      >
                        +
                      </button>

                    </div>

                  </div>
                  <div className="flex justify-between items-center p-4">

                    <div>
                      <p className="font-medium text-gray-800">Adult</p>
                      <p className="text-sm text-gray-500">(Age 12 - 99)</p>
                    </div>

                    <div className="flex items-center gap-4">

                      <button
                        onClick={() => adult > 2 && setAdult(adult - 1)}
                        className="w-7 h-7 flex items-center justify-center border rounded-full"
                      >
                        -
                      </button>

                      {adult}

                      <button
                        onClick={() => setAdult(adult + 1)}
                        className="w-7 h-7 flex items-center justify-center border rounded-full"
                      >
                        +
                      </button>

                    </div>

                  </div>
                  <div className="flex justify-between items-center p-4">

                    <div>
                      <p className="font-medium text-gray-800">Adult</p>
                      <p className="text-sm text-gray-500">(Age 12 - 99)</p>
                    </div>

                    <div className="flex items-center gap-4">

                      <button
                        onClick={() => adult > 3  && setAdult(adult - 1)}
                        className="w-7 h-7 flex items-center justify-center border rounded-full"
                      >
                        -
                      </button>

                      {adult}

                      <button
                        onClick={() => setAdult(adult + 1)}
                        className="w-7 h-7 flex items-center justify-center border rounded-full"
                      >
                        +
                      </button>

                    </div>

                  </div>

                </div>

                <p className="text-sm text-gray-500 mt-3">
                  Age 3 and younger do not require a ticket
                </p>

              </motion.div>

            )}
          </AnimatePresence>

          {/* Date */}
          <div className="mt-4">

            <div className="bg-[#F3F4F6] rounded-[24px] p-4">

              <button
                onClick={() => setDateOpen(!dateOpen)}
                className="flex items-center justify-between w-full"
              >

                <div className="flex items-center gap-2 text-gray-700 font-medium">
                  <FaCalendarAlt />
                  Select date
                </div>

                {dateOpen ? <FaChevronUp /> : <FaChevronDown />}

              </button>

              <AnimatePresence>
                {dateOpen && (

                  <motion.div
                    variants={dropdown}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="bg-white rounded-[24px] mt-4 p-4"
                  >

                    <DatePicker
                      selected={date}
                      onChange={(d: Date | null) => setDate(d)}
                      inline
                    />

                  </motion.div>

                )}
              </AnimatePresence>

            </div>

          </div>

          {/* Language */}
          <div className="mt-4">

            <div className="bg-[#F3F4F6] rounded-[24px] p-4">

              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center justify-between w-full"
              >

                <div className="flex items-center gap-2 text-gray-700 font-medium">
                  <FaGlobe />
                  Choose language
                </div>

                {langOpen ? <FaChevronUp /> : <FaChevronDown />}

              </button>

              <AnimatePresence>
                {langOpen && (

                  <motion.div
                    variants={dropdown}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="bg-white rounded-2xl mt-4 "
                  >

                    {languages.map((lang, i) => (

                      <label
                        key={i}
                        className="flex items-center justify-between px-4 py-4 cursor-pointer"
                      >

                        <span className="text-gray-700">
                          {lang}
                        </span>

                        <input
                          type="radio"
                          name="language"
                          checked={language === lang}
                          onChange={() => setLanguage(lang)}
                          className="accent-red-500 w-5 h-5"
                        />

                      </label>

                    ))}

                  </motion.div>

                )}
              </AnimatePresence>

            </div>

          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#EA004A] text-white py-3 rounded-[100px] mt-4"
          >
            Check availability
          </motion.button>

        </div>

      </div>

    </div>
  )
}