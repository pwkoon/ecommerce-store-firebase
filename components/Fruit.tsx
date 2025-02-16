"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const guavaDetails = [
  {
    id: 1,
    title: "Juicy Crispy",
    letter: "A",
    description:
      "A delightful crunch with every bite! This guava is refreshingly crispy and sweet, bursting with tropical goodness that lingers on your taste buds. Perfect for a fresh snack or a fruity treat!",
    image: "/guavaa.png",
  },
  {
    id: 2,
    title: "Sweet Pink",
    letter: "B",
    description:
      "This pink guava is rich in flavor, boasting a smooth texture and a fragrant aroma that enhances your fruit-eating experience. A must-try for guava lovers!",
    image: "/guavaa2.png",
  },
];

function Fruit() {
  const [selectedGuava, setSelectedGuava] = useState(guavaDetails[0]);

  return (
    <div
      id="fruits"
      className="flex h-screen font-inria font-bold text-introWhite text-center mx-auto relative overflow-hidden"
    >
      {/* Sidebar Navbar */}
      <div className="flex flex-col bg-green items-center justify-center h-full w-1/4">
        <div className="flex flex-col items-center justify-center bg-lightWhite w-full h-[80%] rounded-r-[3rem] text-black">
          {guavaDetails.map((guava) => (
            <div
              key={guava.id}
              className={`px-12 py-10 rounded-l-[4rem] cursor-pointer transition-colors duration-300 w-full max-h-[200px] text-center ${
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
                  width={400}
                  height={50}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guava Details */}
      <div className="flex flex-col items-center justify-center w-full bg-green h-full p-10">
        <motion.div
          key={selectedGuava.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center flex  jusitfy-center gap-20 items-center"
        >
          <div className="pt-44">
            <div
              className="flex justify-center items-center gap-5 border border-t-4 border-l-4 border-yellow w-full mx-auto px-5 py-3"
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 100%)",
              }}
            >
              <div>
                <h1 className="font-inria text-3xl">{selectedGuava.title}</h1>
                <hr className="my-2 border-yellow" />
                <h1 className="font-inria text-7xl">Guava</h1>
              </div>
              <h1 className="font-inria text-9xl">{selectedGuava.letter}</h1>
            </div>
            <p className="text-xl p-4 max-w-lg">{selectedGuava.description}</p>
          </div>
          <Image
            src={selectedGuava.image}
            alt={selectedGuava.title}
            width={600}
            height={300}
            className="w-[600px] h-[400px] object-cover col-span-2 mb-44"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Fruit;
