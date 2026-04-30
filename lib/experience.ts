export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: readonly string[];
};

export const experience: readonly Role[] = [
  {
    company: "Turbot",
    title: "Software Engineer",
    period: "Jul 2023 – Present",
    location: "New York, USA (Remote)",
    bullets: [
      "Cut storage costs by **~60%** by designing a **log archival pipeline** in Java Spring Boot that aggregates logs across services and writes partitioned Parquet files to S3.",
      "Built a **real-time event-driven pipeline** in Node.js integrating AWS EventBridge, SNS, CloudTrail, and Lambda — handles **1.2k events/min** with fault-tolerant polling fallback.",
      "Optimized React app performance via reusable components, code splitting, and virtualized rendering — bundle **900KB → 350KB** gzipped, page load **3.8s → 1.9s**.",
      "Built **Terraform/OpenTofu infrastructure test automation** across AWS, Azure, and GCP — cut deployment cycles **~60%** and prod issues **20%**.",
      "Optimized GraphQL API P95 from **2.4s to under 1s** using DataLoaders, SQL indexing, and Redis caching.",
      "Built **AI-powered remediation** in Turbot Guardrails — generates Terraform/CLI commands from compliance violations across Anthropic, OpenAI, and Bedrock.",
      "Led **AWS SDK v2→v3 migration across 180+ services** in 2 months (3-member team) with **zero regressions**.",
      "Mentored and onboarded **4+ engineers** to independent delivery within their first month.",
    ],
  },
  {
    company: "Turbot",
    title: "Junior Software Engineer Intern",
    period: "Aug 2022 – Jun 2023",
    location: "New York, USA (Remote)",
    bullets: [
      "Contributed to Turbot's open-source CLI tools — **Steampipe** (zero-ETL SQL over cloud APIs) and **Powerpipe** (CSPM).",
      "Built **Jest unit tests** for React components and API integrations.",
      "Built reusable server-side Nunjucks templates, eliminating **32%** of redundant code across the team.",
    ],
  },
  {
    company: "Meliorist Developers Pvt Ltd",
    title: "Full Stack Developer Intern",
    period: "Jun 2021 – Apr 2022",
    location: "Mumbai, India (Remote)",
    bullets: [
      "Engineered a **CRM tool** with Java Spring Boot, Hibernate, React, and MySQL — automated workflows and lifted customer onboarding rate by **28%** in a week.",
      "Built **serverless APIs** with AWS Lambda (Node.js), Cognito, MongoDB, and WebSockets — real-time notifications for **6k+ users**.",
      "Developed a **healthcare ERP frontend** with React and Material UI — reusable components improved code scalability **~70%** and accelerated delivery **30%**.",
    ],
  },
  {
    company: "The Prodigious People",
    title: "Web Developer",
    period: "Apr 2021 – Jun 2021",
    location: "Remote",
    bullets: [
      "Built a **user-auth system** from scratch with React + Firebase, end-to-end.",
      "Optimized existing codebase, reducing latency **60–70%** and contributing to **18%+** sales lift.",
      "Built a **blogging platform** with React + Firebase — rich text editor, reverse-chronological feed, admin panel.",
    ],
  },
  {
    company: "Tawi Tech Solutions",
    title: "Frontend Developer",
    period: "Mar 2021 – May 2021",
    location: "Jammu & Kashmir, India",
    bullets: [
      "Built a responsive site for an animal NGO with React, integrating real-time Facebook and Twitter feeds.",
      "Enhanced existing projects with new features and improved overall functionality.",
    ],
  },
] as const;
