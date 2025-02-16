"use client";

// import Fruit from "./Fruit";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <div id="about" className="bg-about bg-fixed bg-center bg-fit">
        <div className="font-inria w-1/2 font-bold text-introWhite text-center mx-auto p-20">
          {/* "ABOUT" Title with Scroll-triggered Animation */}
          <motion.h1
            className="relative right-40 bg-transparent border border-t-8 border-l-8 border-yellow p-10 text-yellow text-9xl"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 50% 80%, 0% 190%)",
            }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Ensures it animates only once
          >
            ABOUT
          </motion.h1>

          {/* Content with Scroll-triggered Animation */}
          <motion.div
            className="relative left-10 bottom-10"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }} // Ensures it animates only once
          >
            <h1 className="text-5xl mb-10">Our Guava Farm</h1>
            <p>
              Nestled in the heart of nature, our guava farm is dedicated to
              cultivating the freshest, most flavorful guavas using sustainable
              and eco-friendly farming practices.
            </p>
            <br />
            <p>
              We believe in the power of nature, ensuring that every fruit is
              nurtured with care, free from harmful chemicals, and packed with
              natural goodness.
            </p>
            <br />
            <p>
              Join us on this journey of freshness and flavor—experience guava
              farming at its finest!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Fruit Section */}
      {/* <Fruit /> */}
    </>
  );
}

export default About;
