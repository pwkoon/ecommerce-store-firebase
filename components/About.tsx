"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

function About() {
  const t = useTranslations("About");

  return (
    <div className="bg-about bg-fixed bg-center bg-cover py-20 px-5">
      <div
        id="about"
        className="font-inria font-bold text-introWhite text-center mx-auto max-w-4xl"
      >
        {/* "ABOUT" Title with Scroll-triggered Animation */}
        <motion.h1
          className="relative lg:right-20 lg:top-10 bg-transparent border border-t-8 border-l-8 border-yellow p-5 md:p-10 text-yellow text-5xl sm:text-7xl lg:text-9xl inline-block"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 30% 80%, 0% 190%)",
          }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} // Ensures it animates only once
        >
          {t("header")}
        </motion.h1>

        {/* Content with Scroll-triggered Animation */}
        <motion.div
          className="w-full max-w-3xl text-center mx-auto mt-2 px-5 md:px-20 lg:px-20"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            {t("subheader")}
          </h1>
          <p className="text-lg sm:text-xl">{t("para-1")}</p>
          <br />
          <p className="text-lg sm:text-xl">{t("para-2")}</p>
          <br />
          <p className="text-lg sm:text-xl">{t("para-3")}</p>
          <br />
          <Link
            className="font-inria font-bold text-xl bg-darkYellow text-aboutDark p-2"
            href={"/about"}
          >
            {t("know more")}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
