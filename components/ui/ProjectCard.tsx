import { ArrowUpRight } from "lucide-react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { cn } from "@/lib/cn";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tech: readonly string[];
  liveUrl?: string;
  githubUrl?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      className={cn(
        "group flex flex-col overflow-hidden",
        "hover:border-accent/40 hover:bg-surface/70 hover:-translate-y-1",
        "hover:shadow-2xl hover:shadow-accent/10"
      )}
    >
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
          <h3 className="text-xl font-semibold tracking-tight text-fg">
            {project.title}
          </h3>
          <p className="text-sm text-accent font-mono">{project.tagline}</p>
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
    </Card>
  );
}
