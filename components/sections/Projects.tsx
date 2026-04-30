import { Coffee } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-26">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've shipped."
          description={
            <>
              Built on too much coffee{" "}
              <Coffee className="inline h-4 w-4 -translate-y-0.5 text-accent-3" aria-hidden />{" "}
              and too little sleep — side projects where I went deep into streaming
              pipelines, database internals, and the systems-level rabbit holes that
              don&apos;t fit a sprint.
            </>
          }
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
