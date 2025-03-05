import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "../form/button";
import { useIsInView } from "../../hooks/use-inview";

export default function WhoWeAre() {
  const ref = useRef(null);
  const isInView = useIsInView(ref);
  return (
    <section className="bg-white p-10 app_container" ref={ref}>
      <div
        className="bg-[#F9B6A9]/10 py-16 px-6 md:px-20 text-center rounded-3xl"
        style={{
          backgroundImage: "url('src/assets/who-we-are-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-[#FF2F00]"
        >
          The Decentralized Environment.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-gray-700"
        >
          Practical instructions, experienced coaching, and a lively community,
          all in one place.
        </motion.p>

        <div className="flex justify-center gap-4 mt-6">
          {["/d-1.png", "/d-2.png", "/d-1.png"].map((src, index) => (
            <div key={index} className="w-[150px] h[170px] overflow-hidden ">
              <img
                src={"src/assets/" + src}
                alt={`image${index + 1}`}
                // width={293.87}
                height={"608.06px"}
                className="hexago object-cover"
              />
            </div>
          ))}
        </div>

        <div className="pt-16">
          <p className=" text-gray-700 max-w-3xl mx-auto">
            The BlockCapitol serves as a launchpad for Web3 developers, not a
            regular learning platform. Our structured courses focus on
            real-world blockchain applications, 1-on-1 mentorship, and career
            development opportunities.
          </p>
        </div>

        <div className="mt-8 flex max-md:flex-col justify-center gap-4">
          <Button text="Start Your Journey" variant="primary" />
          <Button text="Explore Programs" variant="secondary" />
        </div>
      </div>
    </section>
  );
}
