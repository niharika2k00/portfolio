import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { Badge } from "./Badge";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { cn } from "@/lib/cn";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export type Project = {
  slug: string;
  title: string;
  icon?: LucideIcon;
  tagline: string;
  description: string;
  image: string;
  tech: readonly string[];
  liveUrl?: string;
  githubUrl?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl",
        "border border-border/60 bg-surface/40 backdrop-blur-md",
        "transition-all duration-300 ease-out",
        "hover:scale-[1.015] hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/15"
      )}
    >
      {/* top gradient bar — slides in on hover */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 z-10 h-[2px] origin-left scale-x-0 bg-gradient-brand transition-transform duration-300 group-hover:scale-x-100"
      />

      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE_PATH}${project.image}`}
          alt={`${project.title} screenshot`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent opacity-60" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-col gap-1.5">
          <h3 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-fg">
            {project.icon && <project.icon className="h-5 w-5 shrink-0 text-accent" />}
            {project.title}
          </h3>
          <p className="font-mono text-sm text-accent">{project.tagline}</p>
        </div>

        <p className="text-sm leading-relaxed text-muted line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-fg transition-colors hover:text-accent"
            >
              Live
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-fg transition-colors hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
