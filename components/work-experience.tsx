"use client";

import {
  BriefcaseBusinessIcon,
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  CodeIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const iconMap = {
  code: CodeIcon,
  design: DraftingCompassIcon,
  business: BriefcaseBusinessIcon,
  education: GraduationCapIcon,
} as const;

/**
 * Represents the valid keys of the `iconMap` object, used to specify the type of icon
 * associated with an experience position.
 */
export type ExperiencePositionIconType = keyof typeof iconMap;

export type ExperiencePositionItemType = {
  /** Unique identifier for the position */
  id: string;
  /** The job title or position name */
  title: string;
  /** The period during which the position was held (e.g., "Jan 2020 - Dec 2021") */
  employmentPeriod: string;
  /** The type of employment (e.g., "Full-time", "Part-time", "Contract") */
  employmentType?: string;
  /** A brief description of the position or responsibilities */
  description?: string;
  /** An icon representing the position */
  icon?: ExperiencePositionIconType;
  /** A list of skills associated with the position */
  skills?: string[];
  /** Indicates if the position details are expanded in the UI */
  isExpanded?: boolean;
};

export type ExperienceItemType = {
  /** Unique identifier for the experience item */
  id: string;
  /** Name of the company where the experience was gained */
  companyName: string;
  /** URL or path to the company's logo image */
  companyLogo?: string;
  /** List of positions held at the company */
  positions: ExperiencePositionItemType[];
  /** Indicates if this is the user's current employer */
  isCurrentEmployer?: boolean;
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { stiffness: 400, damping: 30, mass: 0.6 },
  },
};

export function WorkExperience({
  className,
  experiences,
}: {
  className?: string;
  experiences: ExperienceItemType[];
}) {
  return (
    <div className={cn("bg-background px-4", className)}>
      {experiences.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </div>
  );
}

export function ExperienceItem({
  experience,
}: {
  experience: ExperienceItemType;
}) {
  return (
    <div className="relative after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]">
      <div className="space-y-4 py-4">
        <div className="not-prose flex items-center gap-3">
          <div
            className="flex size-6 shrink-0 items-center justify-center"
            aria-hidden
          >
            {experience.companyLogo ? (
              <Image
                src={experience.companyLogo}
                alt={experience.companyName}
                width={24}
                height={24}
                unoptimized
              />
            ) : (
              <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
            )}
          </div>

          <h3 className="text-lg leading-snug font-medium">
            {experience.companyName}
          </h3>

          {experience.isCurrentEmployer && (
            <span className="relative flex items-center justify-center">
              <span className="absolute inline-flex size-3 animate-ping rounded-full bg-blue-500 opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-blue-500" />
              <span className="sr-only">Current Employer</span>
            </span>
          )}
        </div>

        <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
          {experience.positions.map((position) => (
            <ExperiencePositionItem key={position.id} position={position} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePositionItemType;
}) {
  const ExperienceIcon = iconMap[position.icon || "business"];

  return (
    <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
      <div className="relative z-1 mb-1 flex items-center gap-3 bg-background">
        <div
          className="flex size-6 shrink-0 items-center justify-center rounded-full text-muted-foreground border"
          aria-hidden
        >
          <ExperienceIcon size={14} />
        </div>

        <h4 className="flex-1 text-base font-medium text-balance">
          {position.title}
        </h4>
        <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
          <dl>
            <dt className="sr-only">Employment Period</dt>
            <dd>{position.employmentPeriod}</dd>
          </dl>
        </div>
      </div>

      {position.description && (
        <Prose className="pt-2 pl-9">
          <ReactMarkdown>{position.description}</ReactMarkdown>
        </Prose>
      )}

      {Array.isArray(position.skills) && position.skills.length > 0 && (
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="not-prose flex flex-wrap gap-1.5 pt-2 pl-9"
        >
          {position.skills.map((skill, index) => (
            <motion.li key={index} variants={item} className="flex">
              <Skill>{skill}</Skill>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}

function Prose({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "prose prose-sm max-w-none text-foreground prose-zinc dark:prose-invert",
        "prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4",
        "prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
        className
      )}
      {...props}
    />
  );
}

function Skill({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border bg-muted/50 px-1.5 py-0.5 text-xs text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
