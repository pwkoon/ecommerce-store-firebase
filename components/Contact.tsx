"use client";

import Map from "./Map";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

function Contact() {
  const t = useTranslations("Contact");
  return (
    <div
      id="contact"
      className="grid lg:grid-cols-3 lg:gap-10 px-10 md:p-5 bg-green text-black justify-center text-center"
    >
      <div className="md:col-span-2">
        <Map />
      </div>
      <motion.h1
        className="bg-lightWhite border border-t-8 border-r-8 border-green text-green text-5xl md:text-6xl lg:text-7xl"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 80%)",
        }}
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} // Ensures it animates only once
      >
        {t("Contact")}
        <div className="text-xl lg:text-2xl flex items-center justify-center gap-10 p-10">
          <p>Whatsapp</p>
          <p>Facebook</p>
        </div>
      </motion.h1>
    </div>
  );
}

export default Contact;
