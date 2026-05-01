import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";
import { experience } from "@/lib/experience";

const stripBold = (text: string) => text.replace(/\*\*/g, "");

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've worked."
            description="3+ years across microservice platforms, cloud-native architectures, schema design, and CI/CD automation — building and shipping production systems end to end in agile teams."
          />
        </FadeIn>

        <div className="mt-12 relative">
          <span
            aria-hidden
            className="absolute left-2 top-2 bottom-2 w-px bg-border md:left-3"
          />

          <FadeInStagger as="ol" stagger={0.12}>
            {experience.map((role, idx) => (
              <FadeInItem
                key={`${role.company}-${idx}`}
                as="li"
                className="relative pl-10 pb-12 md:pl-14 last:pb-0"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center md:left-1"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/30 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg" />
                </span>

                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-center gap-3">
                    {role.company === "Turbot" && (
                      <div
                        aria-hidden
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-brand shadow-md shadow-accent/25"
                      />
                    )}
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-fg">
                        {role.company}
                      </h3>
                      <p className="mt-0.5 text-base font-medium text-muted">
                        {role.title}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end gap-0.5 md:mt-1">
                    <p className="font-mono text-xs uppercase tracking-widest text-muted">
                      {role.period}
                    </p>
                    <p className="font-mono text-xs text-muted">
                      {role.location}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 flex flex-col gap-2">
                  {role.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="text-sm leading-relaxed text-muted md:text-base"
                    >
                      <span className="mr-2 text-accent">▹</span>
                      {stripBold(b)}
                    </li>
                  ))}
                </ul>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </Container>
    </section>
  );
}
