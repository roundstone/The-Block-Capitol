import { motion } from "framer-motion";
import { Button } from "../form/button";
import React, { useRef } from "react";
import { useIsInView } from "../../hooks/use-inview";

export default function JoinNetwork() {
  const ref = useRef(null);
  const isInView = useIsInView(ref);
  return (
    <section
      className="app_container py-16 flex justify-around items-center flex-col md:flex-row bg-[#FAF7F6] md:gap-x-10"
      ref={ref}
    >
      {/* Left Side Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[509px] text-center md:text-left"
      >
        <h1 className="text-3xl lg:text-5xl font-extrabold text-black leading-tight">
          Join a Network of <br /> Engineers, Builders, <br /> and Innovators{" "}
          <br />
          Changing Web3
        </h1>

        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          Learning is only the first step. You are a part of a developer
          community at Block Capitol, where teamwork gives room for creativity.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col smflex-row items-center gap-4 max-md:px-12">
          <Button
            variant="primary"
            text="Start Your Journey"
            className="!min-w-full"
          />
          <Button
            variant="secondary"
            text="Explore Programs"
            className="!min-w-full"
          />
        </div>
      </motion.div>

      {/* Animated Curved Lines */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="hidden lg:block full"
      >
        <img src="./three-curvy-lines.png" alt="" className="w-72" />
      </motion.div>

      {/* Right Side Cards  mt-10 lg:mt-0 lg:w-1/2 flex flex-col space-y-6 relative*/}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="pt-20 md:pt-0"
      >
        {/* Card Items  self-end justify-between space-y-6 */}
        <div className="flex flex-col lg:space-y-20 space-y-6">
          {[
            {
              icon: "./user-group-02.svg",
              text: "In-person seminars with blockchain specialists",
            },
            {
              icon: "./blockchain-06.svg",
              text: "Exclusive Web3 networking gatherings to meet industry leaders.",
            },
            {
              icon: "./nano-technology.svg",
              text: "A developer community for continuous mentoring.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center text-center space-y-4 w-full bg-[#FCF7F5]"
            >
              {/* {item.icon} */}
              <img src={item.icon} alt="" />
              <p className="text-gray-800">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
