"use client";

import { motion } from "motion/react";
import Typewriter from "./typewriter";

const ProfileHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.36 }}
      className="border-b"
    >
      <div className="flex">
        <div className="border-r">
          <div className="p-0.5">
            <img
              src="./me.jpeg"
              alt="Small profile"
              className="aspect-square w-48 rounded-full outline-1 outline-offset-2 mx-auto object-cover object-top"
            />
          </div>
        </div>
        <div className="w-full self-end">
          <div className="text-2xl font-semibold border-y px-4">
            Andrej Zafirovski
          </div>
          <div className="px-4 h-6">
            <Typewriter
              words={[
                "Full Stack Engineer",
                "Pull/Merge Request Merger",
                "Commit Counter",
              ]}
            />
          </div>
          {/* Full Stack Engineer | Building scalable microservices & clean architectures */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileHeader;
