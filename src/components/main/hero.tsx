import { motion } from "framer-motion";
import Navbar from "./navbar";
import { Button } from "../form/button";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative -bg-gradient-to-r from-red-50 to-white text-center px-6md:px-12lg:px-24 py-12 bg-[url(/src/assets/hero-image.png)] bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Content */}
      <div className="pt-24 ">
        {/* Add padding-top to avoid overlap with sticky navbar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-10 text-center max-md:px-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Make the Switch to <span className="text-primary italic">Web3</span>
          </h1>
          <p className="text-gray-700 mt-4">
            Don’t limit it to just web2 development; decentralize your skills
            with us.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex max-md:flex-col justify-center gap-4">
            <Button
              text="Break Into Web3"
              variant="primary"
              className="max-md:!min-w-20"
            />
            <Button
              text="Decentralize your Code"
              variant="secondary"
              className="max-md:!min-w-20"
            />
          </div>
        </motion.div>
        {/* Images */}
        <div className="relative mt-32 flex justify-center items-center -mb-25 md:-mb-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, rotate: -5 }}
            transition={{ duration: 1 }}
            className="relative z-10 w-[200px] md:w-[400px] lg:w-[500px] border-[5px] md:border-[10px] border-[#FFD2D2] rounded-[18px] md:rounded-[48px] shadow-lg overflow-hidden "
          >
            <img
              src="./hero-lady.png" // Update with your image path
              alt="Focused Woman"
              width={500}
              height={400}
              className="rounded-lg object-cover"
              style={{ objectPosition: "center", transform: "scale(1.1)" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, rotate: 5 }}
            transition={{ duration: 1 }}
            className="absolute -left-14 lg:left-32  xl:left-72  -bottom10 w-[250px] md:w-[450px] border-[5px] md:border-[10px] border-[#FFD2D2] rounded-[48px] shadow-lg overflow-hidden"
          >
            <img
              src="./group-1.png" // Update with your image path
              alt="Group Collaboration"
              width={450}
              height={150}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 1.2 }}
            animate={{ opacity: 1, x: 0, rotate: -3, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute -right-10 lg:right-32  xl:right-72  -bottom10 w-[250px] md:w-[450px] border-[5px] md:border-[10px] border-[#FFD2D2] rounded-[48px] shadow-lg overflow-hidden"
          >
            <img
              src="./group-2.png" // Update with your image path
              alt="Teamwork"
              width={450}
              height={150}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
