"use client";

import { motion } from "motion/react";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.36 }}
    >
      <div>
        <h1 className="text-2xl font-semibold border-b px-4">Projects</h1>
      </div>
      <div className="px-4">
        <div>Whac A Meal</div>
        <div>Pokedex</div>
      </div>
    </motion.div>
  );
};

export default Projects;
