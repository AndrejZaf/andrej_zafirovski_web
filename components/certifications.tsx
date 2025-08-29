"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export const Certification = () => {
  const CERTIFICATIONS = [
    {
      id: 1,
      title: "Graph Developer - Associate",
      issuer: "Apollo GraphQL",
      date: "August 2023",
      image: "./apollo.svg",
      url: "https://www.apollographql.com/tutorials/certifications/39d99138-f297-4c0e-9374-f0c5cad26dce",
    },
    {
      id: 2,
      title: "Neo4j Certified Professional",
      issuer: "Neo4j",
      date: "August 2023",
      image: "./neo4j.svg",
      url: "https://graphacademy.neo4j.com/c/1f303ca8-dc29-4b29-b212-7006427104f8/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.36 }}
    >
      <div className="border-b px-4">
        <h1 className="text-2xl font-semibold">Certifications</h1>
      </div>
      <div className="flex flex-col">
        {CERTIFICATIONS.map((cert) => (
          <div key={cert.id} className="border-b last:border-0 px-4">
            <a href={cert.url} className="hover:underline">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-12 w-12"
                  />
                  <div className="border-l p-2">
                    <div className="font-medium">{cert.title}</div>
                    <div className="text-sm text-gray-500">{cert.issuer}</div>
                    <div className="text-sm text-gray-500">{cert.date}</div>
                  </div>
                </div>
                <ExternalLink className="text-muted-foreground" size={18} />
              </div>
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certification;
