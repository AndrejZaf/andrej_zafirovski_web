"use client";

import { ExternalLink, GithubIcon } from "lucide-react";
import { motion } from "motion/react";
import { Skill } from "./work-experience";

const Projects = () => {
  const PROJECTS = [
    {
      id: 1,
      name: "Whac A Meal",
      repositoryUrl: "https://github.com/AndrejZaf/whacameal-web/",
      liveDemoUrl: "https://whacameal.andrejzafirovski.com/",
      description:
        "Exploring NextJS by creating a blog like application for managing, exploring recipes and leveraging Google Gemini for content generation",
      technologies: [
        "NextJS",
        "TypeScript",
        "Docker",
        "PostgreSQL",
        "Shadcn",
        "TailwindCSS",
        "Better Auth",
        "Google Gemini",
      ],
    },
    {
      id: 2,
      name: "Pokedex",
      repositoryUrl: "https://github.com/AndrejZaf/pokedex-next/",
      liveDemoUrl: "https://pokedex.andrejzafirovski.com/",
      description: "Exploring NextJS by leveraging the PokeAPI",
      technologies: [
        "NextJS",
        "TypeScript",
        "TailwindCSS",
        "Shadcn",
        "PokeAPI",
      ],
    },
    {
      id: 3,
      name: "RareKickz Backend",
      repositoryUrl: "https://github.com/AndrejZaf/rk_backend/",
      description:
        "Microservice backend e-commerce application consisting of inventory management, order management and payment APIs",
      technologies: [
        "Java",
        "Spring Boot",
        "Docker",
        "Stripe",
        "Keycloak",
        "PostgreSQL",
        "gRPC",
        "Microservices",
      ],
    },
    {
      id: 4,
      name: "RareKickz Frontend",
      repositoryUrl: "https://github.com/AndrejZaf/rk_ecommerce_web/",
      description:
        "E-commerce application for buying sneakers with user authentication, product browsing, and order management features",
      technologies: ["Angular", "TypeScript", "Bootstrap"],
    },
  ];
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
      <div>
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="flex justify-between items-center p-4 border-b last:border-0"
          >
            <div className="w-full">
              <div className="flex justify-between">
                <h4 className="text-md font-medium">{project.name}</h4>
                <div className="flex space-x-4 text-muted-foreground">
                  <a
                    href={project.repositoryUrl}
                    className="text-sm hover:underline"
                  >
                    <GithubIcon size={18} />
                  </a>
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      className="text-sm hover:underline"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-justify">
                {project.description}
              </p>
              <div className="flex flex-row">
                {project.technologies?.map((technology, index) => (
                  <div key={technology} className="flex items-center">
                    <Skill>{technology}</Skill>
                    {index !== project.technologies!.length - 1 && (
                      <span
                        aria-hidden
                        className="mx-2 text-muted-foreground text-xs"
                      >
                        /
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
