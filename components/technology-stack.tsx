"use client";

import { motion } from "motion/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export const TechnologyStack = () => {
  const BACKEND_TECHNOLOGY_STACK = [
    {
      id: 1,
      name: "Java",
      image: "./tech-stack/java.svg",
    },
    {
      id: 2,
      name: "TypeScript",
      image: "./tech-stack/typescript.svg",
    },
    {
      id: 3,
      name: "JavaScript",
      image: "./tech-stack/javascript.svg",
    },
    {
      id: 4,
      name: "C#",
      image: "./tech-stack/csharp.svg",
    },
    {
      id: 5,
      name: "Python",
      image: "./tech-stack/python.svg",
    },
    {
      id: 6,
      name: "Spring Boot",
      image: "./tech-stack/spring.svg",
    },
    {
      id: 7,
      name: "Quarkus",
      image: "./tech-stack/quarkus.svg",
    },
    {
      id: 9,
      name: "Django",
      image: "./tech-stack/django.svg",
    },
    {
      id: 10,
      name: "NodeJS",
      image: "./tech-stack/nodejs.svg",
    },
    {
      id: 11,
      name: "GraphQL",
      image: "./tech-stack/graphql.svg",
    },
    {
      id: 14,
      name: "OpenAPI",
      image: "./tech-stack/openapi.svg",
    },
  ];

  const FRONTEND_TECHNOLOGY_STACK = [
    {
      id: 1,
      name: "Angular",
      image: "./tech-stack/angular.svg",
    },
    {
      id: 2,
      name: "React",
      image: "./tech-stack/react.svg",
    },
    {
      id: 3,
      name: "NextJS",
      image: "./tech-stack/nextjs.svg",
    },
    {
      id: 4,
      name: "Tailwind CSS",
      image: "./tech-stack/tailwindcss.svg",
    },
    {
      id: 5,
      name: "Bootstrap",
      image: "./tech-stack/bootstrap.svg",
    },
    {
      id: 7,
      name: "HTML5",
      image: "./tech-stack/html.svg",
    },
    {
      id: 8,
      name: "CSS3",
      image: "./tech-stack/css.svg",
    },
    {
      id: 10,
      name: "MaterialUI",
      image: "./tech-stack/materialui.svg",
    },
    {
      id: 11,
      name: "Redux",
      image: "./tech-stack/redux.svg",
    },
    {
      id: 12,
      name: "Vite",
      image: "./tech-stack/vitejs.svg",
    },
  ];

  const DATABASE_TECHNOLOGY_STACK = [
    {
      id: 1,
      name: "PostgreSQL",
      image: "./tech-stack/postgresql.svg",
    },
    {
      id: 2,
      name: "MySQL",
      image: "./tech-stack/mysql.svg",
    },
    {
      id: 3,
      name: "SQLite",
      image: "./tech-stack/sqlite.svg",
    },
    {
      id: 4,
      name: "Neo4j",
      image: "./tech-stack/neo4j.svg",
    },
  ];

  const OTHER_TECHNOLOGY_STACK = [
    {
      id: 1,
      name: "Git",
      image: "./tech-stack/git.svg",
    },
    {
      id: 2,
      name: "Kafka",
      image: "./tech-stack/kafka.svg",
    },
    {
      id: 3,
      name: "RabbitMQ",
      image: "./tech-stack/rabbitmq.svg",
    },
    {
      id: 4,
      name: "Consul",
      image: "./tech-stack/consul.svg",
    },
    {
      id: 5,
      name: "Docker",
      image: "./tech-stack/docker.svg",
    },
    {
      id: 8,
      name: "Liquibase",
      image: "./tech-stack/liquibase.svg",
    },
    {
      id: 10,
      name: "Jenkins",
      image: "./tech-stack/jenkins.svg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.36 }}
    >
      <div className="border-b">
        <h1 className="text-2xl font-semibold px-4">Technology Stack</h1>
      </div>

      <div>
        <div className="border-b">
          <div className="border-b">
            <h1 className="text-lg font-medium px-4">Back End</h1>
          </div>
          <div className="flex p-4 gap-x-2">
            {BACKEND_TECHNOLOGY_STACK.map((tech) => (
              <Tooltip key={tech.id}>
                <TooltipTrigger asChild>
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    src={tech.image}
                    alt={tech.name}
                    className="h-9 w-9"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
        <div className="border-b">
          <div className="border-b">
            <h1 className="text-lg font-medium px-4">Front End</h1>
          </div>
          <div className="flex p-4 gap-x-2">
            {FRONTEND_TECHNOLOGY_STACK.map((tech) => (
              <Tooltip key={tech.id}>
                <TooltipTrigger asChild>
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    src={tech.image}
                    alt={tech.name}
                    className="h-10 w-10"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
        <div className="border-b">
          <div className="border-b">
            <h1 className="text-lg font-medium px-4">Databases</h1>
          </div>
          <div className="flex p-4 gap-x-2">
            {DATABASE_TECHNOLOGY_STACK.map((tech) => (
              <Tooltip key={tech.id}>
                <TooltipTrigger asChild>
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    src={tech.image}
                    alt={tech.name}
                    className="h-10 w-10"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
        <div>
          <div className="border-b">
            <h1 className="text-lg font-medium px-4">Other</h1>
          </div>
          <div className="flex p-4 gap-x-2">
            {OTHER_TECHNOLOGY_STACK.map((tech) => (
              <Tooltip key={tech.id}>
                <TooltipTrigger asChild>
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    src={tech.image}
                    alt={tech.name}
                    className="h-10 w-10"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechnologyStack;
