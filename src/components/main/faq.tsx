import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../form/button";
import React from "react";
import { useIsInView } from "../../hooks/use-inview";

const faqs = [
  { question: "Who can join?", answer: "Developers transitioning into Web3." },
  {
    question: "Do I need prior experience?",
    answer: "Some knowledge of programming is recommended.",
  },
  {
    question: "How long are the courses?",
    answer: "Courses vary from 4 to 12 weeks.",
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes, certificates are provided upon completion.",
  },
  {
    question: "How are payments handled?",
    answer: "Payments can be made via crypto and fiat options.",
  },
];

export default function FAQ() {
  const [selected, setSelected] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useIsInView(ref);

  return (
    <section className="bg-black text-white py-12 app_container" ref={ref}>
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold">
          Have Questions?{" "}
          <span className="text-red-500 max-md:block">We Have Answers.</span>
        </h1>
        <p className="mt-2">
          Information you need to get started with Block Capitol
        </p>
      </div>
      <div className="bg-white p-6 md:p-10 rounded-lg flex flex-col md:flex-row gap-6 ">
        <div className="w-full md:w-1/2">
          <h2 className="text-[64px] font-bold text-red-500">FAQs.</h2>
          <ul className="mt-4 space-y-5">
            {faqs.map((faq, index) => (
              <li
                key={index}
                className={`font-bold p-4 rounded-lg cursor-pointer transition-all ${
                  selected === index
                    ? "bg-black text-white"
                    : "text-red-500 bg-gray-100"
                }`}
                onClick={() => setSelected(selected === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <span>{faq.question}</span>
                  {selected === index && (
                    <img src="/src/assets/q-badge.svg" alt="" />
                  )}
                </div>
                {selected === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={isInView ? { opacity: 1, height: "auto" } : {}}
                    transition={{ duration: 0.3 }}
                    className="md:hidden mt-2 text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block md:w-1/2 h-full">
          <h2 className="text-[64px] font-bold text-red-500 ">Ans.</h2>
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="w-full bg-[#F6BFA3] h-full p-6 mt-4 rounded-lg"
          >
            <img src="/src/assets/a-badge.svg" alt="" />
            <p className="mt-2 text-black">
              {selected !== null && faqs[selected].answer}
            </p>
          </motion.div>
        </div>
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-center gap-4 max-md:px-12">
        <Button variant="primary" text="Register for Cohort" />
        <Button variant="light" text="Contact Us" />
      </div>
    </section>
  );
}
