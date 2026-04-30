import Image from "next/image";
import { cn } from "@/lib/cn";

type IconEntry = { slug: string; invertOnDark?: boolean };

const ICON_MAP: Record<string, IconEntry> = {
  Java: { slug: "java" },
  JavaScript: { slug: "javascript" },
  TypeScript: { slug: "typescript" },
  "C++": { slug: "cplusplus" },
  C: { slug: "c" },

  "Spring Boot": { slug: "spring" },
  Hibernate: { slug: "hibernate" },
  "Node.js": { slug: "nodejs" },
  "Express.js": { slug: "express", invertOnDark: true },
  Nginx: { slug: "nginx" },
  JWT: { slug: "jsonwebtokens" },

  React: { slug: "react" },
  Redux: { slug: "redux" },
  "Next.js": { slug: "nextjs", invertOnDark: true },
  "Material UI": { slug: "materialui" },
  Tailwind: { slug: "tailwindcss" },
  HTML: { slug: "html5" },
  CSS: { slug: "css3" },

  "Apache Kafka": { slug: "apachekafka", invertOnDark: true },
  GraphQL: { slug: "graphql" },

  PostgreSQL: { slug: "postgresql" },
  MySQL: { slug: "mysql" },
  MongoDB: { slug: "mongodb" },
  Redis: { slug: "redis" },
  Firebase: { slug: "firebase" },

  AWS: { slug: "amazonwebservices" },
  Azure: { slug: "azure" },
  GCP: { slug: "googlecloud" },

  Docker: { slug: "docker" },
  Terraform: { slug: "terraform" },
  OpenTofu: { slug: "opentofu" },
  "GitHub Actions": { slug: "githubactions" },
  Git: { slug: "git" },
  Linux: { slug: "linux" },

  "Claude Code": { slug: "claude" },
  Cursor: { slug: "cursor", invertOnDark: true },
  Copilot: { slug: "githubcopilot", invertOnDark: true },
};

export function SkillTile({ name }: { name: string }) {
  const entry = ICON_MAP[name];

  if (!entry) {
    return (
      <span
        title={name}
        className="inline-flex items-center rounded-pill border border-border/60 bg-bg/60 px-3 py-1.5 font-mono text-xs text-fg backdrop-blur-sm transition-colors hover:border-accent/50 hover:text-accent"
      >
        {name}
      </span>
    );
  }

  return (
    <div
      title={name}
      aria-label={name}
      className="group relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-bg/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-bg hover:shadow-lg hover:shadow-accent/15"
    >
      <Image
        src={`/images/skills/${entry.slug}.svg`}
        alt={name}
        width={26}
        height={26}
        className={cn(
          "h-6 w-6 transition-transform duration-300 group-hover:scale-110",
          entry.invertOnDark && "dark:invert"
        )}
        unoptimized
      />
    </div>
  );
}
