"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const ProfileLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.36 }}
    >
      <div>
        <div className="border-b">
          <h1 className="text-xl font-semibold px-4">Links</h1>
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <a
            href="https://github.com/AndrejZaf"
            className="hover:underline border-r p-4"
            target="_blank"
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-row gap-x-2 items-center">
                <div>
                  <img src="./github.svg" alt="GitHub" className="h-12 w-12" />
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold">GitHub</div>
                  <div>AndrejZaf</div>
                </div>
              </div>
              <ExternalLink size={18} className="text-muted-foreground" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/andrej-zafirovski/"
            className="hover:underline border-l p-4"
            target="_blank"
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-row gap-x-2 items-center">
                <div>
                  <img
                    src="./linkedin.svg"
                    alt="LinkedIn"
                    className="h-12 w-12"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold">LinkedIn</div>
                  <div>andrej-zafirovski</div>
                </div>
              </div>
              <ExternalLink size={18} className="text-muted-foreground" />
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileLinks;
