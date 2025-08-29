"use client";

import { ExternalLink, GithubIcon } from "lucide-react";
import { motion } from "motion/react";

const Projects = () => {
  const PROJECTS = [
    {
      id: 1,
      name: "Whac A Meal",
      repositoryUrl: "https://github.com/AndrejZaf/whacameal-web/",
      liveDemoUrl: "https://whacameal-web.andrejzafirovski.com/",
    },
    {
      id: 2,
      name: "Pokedex",
      repositoryUrl: "https://github.com/AndrejZaf/pokedex/",
      liveDemoUrl: "https://pokedex.andrejzafirovski.com/",
      technologies: ["NextJS", "TypeScript", "TailwindCSS", "PokeAPI"],
    },
    {
      id: 3,
      name: "RareKickz",
      repositoryUrl: "https://github.com/AndrejZaf/rarekickz/",
      liveDemoUrl: "",
      technologies: [],
    },
    {
      id: 4,
      name: "Fitness Tracker",
      repositoryUrl: "https://github.com/AndrejZaf/fitness-tracker/",
      liveDemoUrl: "",
      technologies: [],
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
            <div>
              <h4 className="font-medium">{project.name}</h4>
              <div>
                {project.technologies?.map((technology) => (
                  <span
                    key={technology}
                    className="text-sm text-muted-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
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
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
