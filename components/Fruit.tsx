"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

function Fruit() {
  const t = useTranslations("Fruits");

  const guavaDetails = [
    {
      id: 1,
      title: t("Guava-A"),
      letter: t("Guava-A-2"),
      description: t("Guava-A-description"),
      image: "/guavaA.avif",
    },
    {
      id: 2,
      title: t("Guava-B"),
      letter: t("Guava-B-2"),
      description: t("Guava-B-description"),
      image: "/guavaB.avif",
    },
  ];
  const [selectedGuava, setSelectedGuava] = useState(guavaDetails[0]);

  return (
    <div
      id="fruits"
      className="flex flex-col md:flex-row h-auto md:h-screen font-inria font-bold text-introWhite text-center mx-auto relative overflow-hidden"
    >
      {/* Sidebar Navbar */}
      <div className="flex flex-col bg-green items-center justify-center w-full md:w-1/4 min-h-[200px] md:min-h-screen">
        <div className="flex flex-row md:flex-col items-center justify-center bg-lightWhite w-full md:h-screen text-black">
          {guavaDetails.map((guava) => (
            <div
              key={guava.id}
              className={`px-6 py-4 md:px-12 md:py-10 rounded-none md:rounded-l-[4rem] cursor-pointer transition-colors duration-300 w-full text-center ${
                selectedGuava.id === guava.id
                  ? "bg-green text-white"
                  : "bg-lightWhite text-black"
              }`}
              onClick={() => setSelectedGuava(guava)}
            >
              <div className="flex justify-center">
                <Image
                  src={guava.image}
                  alt={guava.title}
                  width={100}
                  height={50}
                  className="w-20 h-20 md:w-40 md:h-40 object-contain"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guava Details */}
      <div className="flex flex-col-reverse md:flex-row bg-green items-center justify-center w-full p-5 md:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedGuava.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl mx-auto text-center flex flex-col lg:flex-row justify-center lg:gap-20 items-center"
          >
            <div className="md:pt-18">
              <div
                className="flex justify-center items-center gap-3 md:gap-5 border border-t-4 border-l-4 border-yellow w-2/3 lg:w-full mx-auto px-3 md:px-5 py-3"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 100%)",
                }}
              >
                <div>
                  <h1 className="font-inria text-2xl lg:text-3xl">
                    {selectedGuava.title}
                  </h1>
                  <hr className="my-2 border-yellow" />
                  <h1 className="font-inria text-5xl md:text-7xl">
                    {t("Guava-A-1")}
                  </h1>
                </div>
                <h1 className="font-inria text-6xl md:text-9xl">
                  {selectedGuava.letter}
                </h1>
              </div>
              <p className="text-md md:text-xl p-4 max-w-lg">
                {selectedGuava.description}
              </p>
            </div>
            <Image
              src={selectedGuava.image}
              alt={selectedGuava.title}
              width={600}
              height={300}
              className="w-full max-w-[350px] lg:w-[600px] h-100 object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Fruit;
