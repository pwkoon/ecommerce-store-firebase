"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import ScrollToTop from "@/components/ScrollToTop";
import Modal from "@/components/Modal";
import mockdata from "../../../data.json";
import { AnimatePresence, motion } from "framer-motion";

function About() {
  const [isMobile, setIsMobile] = useState(false);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 }, // Start slightly below with opacity 0
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.3 }, // Stagger effect
    }),
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="h-auto p-10 bg-grey font-inria">
        {/* container */}
        <div className="max-w-[800px] mx-auto">
          {/* founder's intro */}
          <div className="flex md:flex justify-around gap-2 md:gap-10 items-center">
            <div className="hidden md:block">
              <h1 className="font-bold text-lg md:text-xl">(1961)</h1>
              <p>
                Life is like a wheel, sometimes up and sometimes down;
                <br /> sometimes fast and sometimes slow
              </p>
            </div>
            <Link
              href="/"
              className="sm:w-1/5 md:w-auto flex md:block border border-4 p-2 font-bold"
            >
              <h1>GUAVA</h1>
              <h1>FARM.</h1>
            </Link>
          </div>
          <div className="grid sm:grid-cols-4 pt-5 sm:p-10">
            <motion.div
              className="sm:col-span-3 mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src={"/images/gallery.avif"}
                width={500}
                height={400}
                alt="farmer pic"
                className="h-[500px] md:max-h-[710px] object-cover"
              />
            </motion.div>
            <div className="text-center md:text-start mx-auto w-max py-8 sm:pt-[20rem]">
              <p className="sm:-rotate-90 ">
                From soil to sweetness <br />
                Rooted in care, grown with passion.
              </p>
            </div>
          </div>
          {/* From Foundations to Fields */}
          <div className="max-w-[800px] mx-auto bg-lightWhite p-3 py-10 px-5 sm:py-28 sm:px-10 h-[35rem] md:h-[500px]">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-4xl md:text-6xl font-bold text-end sm:leading-loose"
            >
              From Foundations to Fields
            </motion.h1>
            <hr className="border-t-2 md:border-t-8 border-black pb-5" />
            <div className="text-md max-w-[400px] text-end flex-inline float-right">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                Once a skilled construction worker, he left the world of bricks
                to embrace farming, starting with lime and corn. Through
                patience and care, he learned the rhythms of agriculture.
              </motion.p>
              <br />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                His dedication turned a small farm into a thriving guava
                orchard. The same hands that built homes now nurtured trees,
                showcasing the power of reinvention and the rewards of following
                his passion.
              </motion.p>
            </div>
          </div>
          {/* Paddy field no paddy but fruits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: -10 }}
            transition={{ duration: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 max-w-[800px] overflow-hidden mx-auto"
          >
            <Image
              src={"/images/construction.avif"}
              width={400}
              height={400}
              alt="construction"
              className="max-h-[710px] z-50 bg-cover bg-fixed"
            />
            <Image
              src={"/images/farmer.avif"}
              width={400}
              height={400}
              alt="farmer"
              className="max-h-[710px] z-50"
            />
          </motion.div>
          {/* transition */}
          <div className="max-w-[600px] mx-auto p-10">
            <p className="text-center  text-justify sm:text-lg md:text-2xl leading-7 md:leading-9 pt-2 md:pt-20">
              <span className="border-l-8 text-xl sm:text-4xl md:text-6xl font-bold bg-lightWhite pt-36">
                <span className="text-3xl sm:text-5xl md:text-7xl">The</span>{" "}
                transition{" "}
              </span>
              from paddy to lime, corn, and finally guava represents an evolving
              agricultural journey, reflecting shifts in farming practices, crop
              selection, and economic considerations.
            </p>
            <div className="sm:w-80 mx-auto sm:text-lg md:text-xl text-center">
              <div
                className="sm:w-60 h-60 mx-auto p-5 bg-fill bg-fixed"
                style={{ backgroundImage: "url('/images/paddy1.avif')" }}
              ></div>
              <p className="p-5">
                Beginning with rice cultivation, which demands water-intensive
                management...
              </p>
              <div
                className="sm:w-60 h-60 mx-auto p-5 bg-fit bg-center bg-fixed"
                style={{ backgroundImage: "url('/images/lime5.avif')" }}
              ></div>
              <p className="p-5">
                The shift to lime introduces fruit farming that requires
                well-drained soil and careful maintenance...
              </p>
              <div
                className="sm:w-60 h-60 mx-auto p-5 bg-fit sm:bg-cover bg-fixed"
                style={{ backgroundImage: "url('/images/corn1.avif')" }}
              ></div>
              <p className="p-5">
                Corn follows as a versatile staple crop known for its
                adaptability and high yield.
              </p>
            </div>
          </div>
          {/* guava farm story */}
          <div className="grid grid-cols-4 items-center">
            <Image
              src={"/images/guavas.avif"}
              width={400}
              height={400}
              alt="guavas"
              className="h-[300px] sm:h-[400px] opacity-50 object-cover"
            />{" "}
            <Image
              src={"/images/guava-solo.avif"}
              width={500}
              height={400}
              alt="guava-solo"
              className="col-span-2 opacity-70 h-[400px] sm:h-[500px] object-cover"
            />
            <Image
              src={"/images/guavas.avif"}
              width={400}
              height={400}
              alt="guavas"
              className="h-[300px] sm:h-[400px] opacity-50 object-cover"
            />
          </div>
        </div>
        {/* guava's story */}
        <div className="max-w-[800px] flex-row md:flex items-center mx-auto p-10 gap-10">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: -50 }}
            transition={{ duration: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center text-6xl md:text-8xl font-bold"
          >
            BEGIN...
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: isMobile ? 0 : 50 }}
            transition={{ duration: 1, x: 0 }}
            viewport={{ once: true }}
            className="pt-5 md:pt-0 text-justify"
          >
            Nestled in nature&apos;s embrace, our guava farm began with a
            passion for cultivating the finest, sun-kissed guavas. Rooted in
            sustainable practices, we nurture every tree with care, ensuring
            each fruit bursts with natural sweetness. From our farm to your
            table, we bring you the freshest, most flavorful guavas—grown with
            love, harvested at peak perfection.
          </motion.p>
        </div>
        {/* from seed to fruits */}
        <div className="max-w-[800px] grid sm:grid-cols-2 md:grid-cols-3 sm:p-10 gap-5 mx-auto">
          <AnimatePresence>
            {mockdata.process.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of element is visible
                custom={index} // Custom index for stagger effect
              >
                <Modal
                  title={item.title}
                  subtitle={item.subtitle}
                  descriptions={item.description}
                />
              </motion.div>
            ))}
          </AnimatePresence>

          {/* <div
            className="p-16 sm:p-20 bg-green rounded-full mx-auto text-xl text-center text-lightWhite cursor-pointer 
                transition-transform duration-[2000ms] ease-out bg-center bg-cover bg-green 
                hover:bg-[url(/images/guavas.avif)] hover:bg-no-repeat hover:brightness-110"
          >
            Month 1/2
          </div> */}
        </div>
        {/* gif / video */}
        <div className="flex">
          <Image
            src={"/images/field.avif"}
            width={600}
            height={500}
            alt="field"
            className="mx-auto pt-5 sm:w-[500px] md:w-[600px]"
          />
          {/* <div className="border-4 border-lightWhite px-16 py-20 md:px-36 md:py-44 absolute top-[7rem] left-[3rem] md:top-60 md:left-[28rem]"></div> */}
        </div>
        <div className="mx-auto max-w-[600px] pb-16 p-7 sm:p-20">
          <FaQuoteLeft className="text-4xl md:text-6xl" />
          <p className="text-justify text-lg md:text-xl font-bold text-center">
            The days are long, and the work is hard, but there is no greater
            reward than seeing the fruits of my labor take shape. From the first
            sprout to the last harvest, I am reminded that growth is never
            quick, but always worth the effort.
          </p>
          <FaQuoteRight className="text-4xl md:text-6xl float-right" />
        </div>
        {/* last part intro by farmer */}
        <div className="md:flex mx-auto max-w-[600px] md:gap-5">
          <Image
            src={"/images/guavas.avif"}
            width={500}
            height={400}
            alt="guavas"
            className="mx-auto w-60 md:h-[400px] object-cover"
          />
          <div className="hidden md:flex h-100 border-l-2 border-gray-500"></div>
          <div className="mx-auto w-40 sm:w-60 text-lg pt-5 md:pt-36">
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="mx-auto md:flex mx-auto max-w-[600px] md:gap-5">
          <div className="mx-auto w-40 sm:w-60 text-lg pt-10 md:pt-52">
            <p className="text-justify">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="hidden md:flex h-100 border-l-2 border-gray-500"></div>
          <Image
            src={"/images/guavas.avif"}
            width={500}
            height={400}
            alt="guavas"
            className="mx-auto w-60 md:h-[500px] object-cover pt-5 md:pt-36"
          />
        </div>
        {/* never end */}
        <div className="p-10 md:p-20 mx-auto text-center max-w-[900px] leading-loose">
          <p>End of the Story</p>
          <h3>BUT</h3>
          <h1 className="text-5xl md:text-8xl font-bold">NEVER END</h1>
          <h3>The Journey</h3>
          <hr />
          <p className="italic">
            Nurturing nature, harvesting longevity — our guava farm grows with
            care to last for generations.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
