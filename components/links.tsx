"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const LINKS = [
  {
    id: 1,
    title: "GitHub",
    subtitle: "AndrejZaf",
    image: "./github.svg",
    url: "https://github.com/AndrejZaf",
  },
  {
    id: 2,
    title: "LinkedIn",
    subtitle: "andrej-zafirovski",
    image: "./linkedin.svg",
    url: "https://www.linkedin.com/in/andrej-zafirovski/",
  },
];

const Links = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.36 }}
    >
      <div>
        <div className="border-b">
          <h1 className="text-2xl font-semibold px-4">Links</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-x-4">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className="hover:underline first:border-r last:border-l p-4 border-b md:border-0 last:border-0"
              target="_blank"
            >
              <div className="flex justify-between items-center">
                <div className="flex flex-row gap-x-2 items-center">
                  <div>
                    <img
                      src={link.image}
                      alt={link.title}
                      className="h-12 w-12"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold">{link.title}</div>
                    <div>{link.subtitle}</div>
                  </div>
                </div>
                <ExternalLink size={18} className="text-muted-foreground" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Links;
