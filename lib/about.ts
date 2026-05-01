export const about = {
  paragraphs: [
    "I'm a **Software Engineer** with **3+ years** building **microservice platforms** and **cloud-native architectures** — Java, Spring Boot, React, Node.js, and AWS — currently at **Turbot** working on **cloud security and governance (PSPM)** tooling.",
    "I gravitate toward systems work: schema design, event-driven pipelines, CI/CD automation, and chasing down performance regressions. I enjoy migrations and codebase modernization. Comfortable collaborating in agile teams — sprint-based delivery, cross-functional pairing, and mentoring engineers to independent ownership.",
  ],
} as const;

export type SkillGroup = {
  label: string;
  items: readonly string[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    label: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "C++", "C"],
  },
  {
    label: "Backend",
    items: [
      "Spring Boot",
      "Hibernate",
      "JPA",
      "Spring Security",
      "Node.js",
      "Express.js",
      "Nginx",
      "JWT",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Redux",
      "Next.js",
      "Material UI",
      "Tailwind",
      "HTML",
      "CSS",
    ],
  },
  {
    label: "Microservices",
    items: ["REST", "WebSockets", "Apache Kafka", "API Gateway", "GraphQL"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    label: "Cloud",
    items: [
      "AWS",
      "Azure",
      "GCP",
      "EC2",
      "S3",
      "Lambda",
      "EventBridge",
      "SNS",
      "SQS",
      "CloudWatch",
      "Cognito",
    ],
  },
  {
    label: "DevOps",
    items: [
      "Docker",
      "Terraform",
      "OpenTofu",
      "GitHub Actions",
      "Git",
      "Linux",
    ],
  },
  {
    label: "AI Tools",
    items: ["Claude Code", "Cursor", "Copilot", "OpenAI"],
  },
];
