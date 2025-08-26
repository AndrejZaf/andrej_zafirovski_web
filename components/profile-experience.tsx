"use client";

import { motion } from "motion/react";
import { ExperienceItemType, WorkExperience } from "./work-experience";

const ProfileExperience = () => {
  const WORK_EXPERIENCE: ExperienceItemType[] = [
    {
      id: "1",
      companyName: "Scalefocus",
      companyLogo: "./scalefocus-logo.svg",
      isCurrentEmployer: true,
      positions: [
        {
          id: "1-1",
          title: "Senior Software Engineer",
          employmentPeriod: "Jul 2024 - Present",
          employmentType: "Full-time",
          description: `- Integrated Keycloak into a legacy application replacing an outdated session based security mechanism. Conducted medium-scale codebase refactoring to improve the overall code quality and eliminate tech debt.
- Developed an adapter microservice using Quarkus to process incoming requests and transmit data to a specific Kafka channel, optimizing performance and resource utilization.
- Deployed the containerized quarkus services on OpenShift, leveraging Kubernetes for container orchestration.`,
          icon: "code",
          skills: [
            "Java",
            "Quarkus",
            "Kafka",
            "RabbitMQ",
            "Keycloak",
            "OpenShift",
            "Kubernetes",
            "Unit & Integration Testing",
            "Agile",
            "Scrum",
          ],
          isExpanded: true,
        },
      ],
    },
    {
      id: "2",
      companyName: "N47",
      companyLogo: "./n47-logo.svg",
      positions: [
        {
          id: "2-1",
          title: "Software Engineer",
          employmentPeriod: "Jan 2024 - Jun 2024",
          employmentType: "Full-time",
          description: `- Developed and integrated AI-powered job posting automation using ChatGPT and DALL-E, reducing manual data entry by 50%.
- Designed and implemented Datev and LexOffice API integrations within a Spring Boot microservices architecture, improving platform efficiency by 20%.
- Deployed and maintained services on Google Cloud Platform (GCP), ensuring scalability and reliability.
`,
          icon: "code",
          skills: [
            "Java",
            "Spring Boot",
            "Apollo GraphQL",
            "PostgreSQL",
            "RabbitMQ",
            "Keycloak",
            "Jira",
            "Docker",
            "Kubernetes",
            "GCP",
            "Elasticsearch",
          ],
          isExpanded: true,
        },
      ],
    },
    {
      id: "3",
      companyName: "Endava",
      companyLogo: "./endava.svg",
      positions: [
        {
          id: "3-1",
          title: "Senior Software Engineer",
          employmentPeriod: "Jul 2021 - Jan 2024",
          employmentType: "Full-time",
          description: `- Designed and implemented new utility-based features in a microservice architecture using Spring Boot, Angular, and PostgreSQL.
- Led a team of three engineers to develop an internal tool for tracking artifacts and versions, including a knowledge map generated from Git social behavior analysis.
- Enhanced system performance by implementing L2 Hazelcast cache for the gateway to store OAuth2 session information across multiple load-balanced instances.
- Automated an error-prone data entry process with Python, reducing the time needed from two hours to 25 minutes.
- Developed and executed a structured 12-week intern study plan, culminating in a demo application that earned high praise from senior management.
- Actively participated in release and deployment activities on behalf of the team.
- Increased code coverage by 60% across team-owned services.
`,
          icon: "code",
          skills: [
            "Java",
            "Spring Boot",
            "TypeScript",
            "Python",
            "Angular",
            "Liquibase",
            "PostgreSQL",
            "OAuth2",
            "Microservices",
            "Unit & Integration Testing",
            "NodeJS",
            "GraphQL",
            "Neo4J",
            "Hazelcast",
            "Kafka",
            "RabbitMQ",
            "gRPC",
            "Unit & Integration Testing",
            "Agile",
            "Scrum",
          ],
          isExpanded: true,
        },
      ],
    },
    {
      id: "4",
      companyName: "MCA",
      companyLogo: "./mca-logo.svg",
      positions: [
        {
          id: "4-1",
          title: "Software Engineer",
          employmentPeriod: "Sept 2020 - Jun 2021",
          employmentType: "Full-time",
          description: `- Collaborated with a six-person team of engineers to develop a crowdfunding platform built on top of .NET, Angular and MSSQL as a technology stack.
- Incorporated Stripe payment gateway into the platform.
- Integrated the platform with ShipStation API which accelerates the shipping process for online retailers by providing order and inventory management features.
`,
          icon: "code",
          skills: [
            "TypeScript",
            "JavaScript",
            "Angular",
            ".NET",
            "C#",
            "MSSQL",
            "Unit & Integration Testing",
            "Agile",
            "Scrum",
          ],
          isExpanded: true,
        },
      ],
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
        <h1 className="text-xl font-semibold px-4">Experience</h1>
      </div>
      <WorkExperience experiences={WORK_EXPERIENCE} />
    </motion.div>
  );
};

export default ProfileExperience;
