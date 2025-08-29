"use client";

import { motion } from "motion/react";

export const Eduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.36 }}
    >
      <div className="border-b px-4">
        <h1 className="text-2xl font-semibold">Education</h1>
      </div>
      <div className="flex flex-col p-4">
        <div className="font-medium">
          Faculty of Computer Science and Engineering within UKIM
        </div>
        <div className="flex justify-between">
          <div className="italic text-sm text-gray-500">
            Bachelor of Science (B.S.) in Computer Science
          </div>
          <div className="text-sm text-gray-500">
            September 2017 – August 2021
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Eduction;
