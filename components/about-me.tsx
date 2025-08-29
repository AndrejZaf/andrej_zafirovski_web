"use client";

import { motion } from "motion/react";

const AboutMe = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.36 }}
      >
        <div>
          <div className="border-y">
            <h1 className="text-2xl font-semibold px-4">About Me</h1>
          </div>
          <p className="text-justify p-4">
            Full Stack Engineer with 5+ years of experience building scalable
            microservices and modern web applications. Experienced in Java,
            TypeScript, Spring Boot, and React. Passionate about automation,
            clean architecture, and solving complex system problems.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
