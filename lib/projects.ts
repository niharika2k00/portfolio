import { Database } from "lucide-react";
import type { Project } from "@/components/ui/ProjectCard";

export const projects: readonly Project[] = [
  {
    slug: "video-hub",
    title: "🎥 VideoHub",
    tagline: "Video streaming platform",
    description:
      "End-to-end HLS video streaming with FFmpeg-based parallel transcoding across 5 resolutions (240p–1080p), Spring Boot microservices, Kafka event-driven pipeline, and AWS S3 storage. JWT auth with RBAC, embeddable adaptive-bitrate player.",
    image: "/images/projects/video-hub.png",
    tech: ["Java", "Spring Boot", "Kafka", "MySQL", "React", "AWS S3", "Docker", "FFmpeg"],
    liveUrl: "https://videohub.raspberryip.com/",
    githubUrl: "https://github.com/niharika2k00/videohub-video-steaming-platform",
  },
  {
    slug: "chocolatey",
    title: "🍫 Chocolatey",
    tagline: "MERN e-commerce with PayPal",
    description:
      "Full-stack chocolate store with product catalog, cart, order management, and review/rating support. JWT-based RBAC, PayPal sandbox integration for real-time transaction tracking, multi-arch Docker builds.",
    image: "/images/projects/chocolatey.png",
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "PayPal API", "Docker"],
    liveUrl: "https://chocolatey.raspberryip.com/",
    githubUrl: "https://github.com/niharika2k00/chocolatey-ecommerce-website",
  },
  {
    slug: "dbviz",
    title: "DBViz",
    icon: Database,
    tagline: "Interactive PostgreSQL visualizer",
    description:
      "Single-binary database internals visualizer — connects to your Postgres, runs EXPLAIN ANALYZE, animates B-tree page traversal, and lets you toggle indexes to see query-planner behavior live. Go backend with embedded React frontend.",
    image: "/images/projects/dbviz.svg",
    tech: ["Go", "React 19", "TypeScript", "PostgreSQL", "D3.js", "WebSocket"],
    githubUrl: "https://github.com/niharika2k00",
  },
] as const;
