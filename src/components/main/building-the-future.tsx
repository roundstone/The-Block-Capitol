import { motion } from "framer-motion";
import { Button } from "../form/button";
import React, { useRef } from "react";
import { useIsInView } from "../../hooks/use-inview";

export default function BuildingTheFuture() {
  const ref = useRef(null);
  const isInView = useIsInView(ref);

  return (
    <div className="bg-white p-12 app_container" ref={ref}>
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 bg-red-50 rounded-2xl gap-10">
        {/* Image Section */}
        <div className="w-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: -5 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative -full border-[10px] border-[#FFD2D2] rounded-[48px] shadow-lg overflow-hidden"
          >
            <img
              src="src/assets/hero-lady.png"
              alt="Focused Woman"
              width={500}
              height={400}
              className="rounded-lg object-cover"
              style={{ objectPosition: "center", transform: "scale(1.1)" }}
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-6 lg:mt-0 w-full text-center lg:text-right mr-0 lg:mr-12"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-[#FF2F00] leading-snug">
            Building the Future of <br /> Blockchain, Together
          </h1>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
            className="bg-[#FFD2D2] border border-white text-lg shadow-lg px-4 py-2 rounded-md mt-4 inline-block w-fit"
          >
            We've stumbled, learned, and gotten better;
            <br className="max-md:hidden" /> Real proof of learning from
            mistakes.
          </motion.div>

          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            At BlockCapitol, we have learned our fair share of lessons along the
            way to innovation. Our team has experienced successes and failures
            in the blockchain environment. In order to have a positive learning
            environment, we believe it is important to be open and honest about
            our experiences, both positive and difficult. Join us, and learn
            from our journey as you embark on your own.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center lg:justify-end justify-center gap-4">
            <Button
              text="Start Your Journey"
              variant="primary"
              className="!min-w-[200px]"
            />
            <Button
              text="Explore Programs"
              variant="secondary"
              className="!min-w-[200px]"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
