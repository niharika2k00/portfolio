import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { about } from "@/lib/about";
import { renderBold } from "@/lib/format";

const stats = [
  { icon: Briefcase, label: "Currently at", highlight: "Turbot" },
  { icon: Calendar, label: "of industry experience", highlight: "3+ years" },
  {
    icon: GraduationCap,
    label: "B.Tech CSE · UEM Kolkata",
    highlight: "9.05 / 10.0",
  },
  { icon: MapPin, label: "Kolkata, India", highlight: null },
] as const;

export function About() {
  return (
    <section id="about" className="py-16 md:py-26">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
          {/* Left — eyebrow + stat chips + availability */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 font-mono text-sm font-bold uppercase tracking-[0.18em] text-fg">
              <span className="h-px w-10 bg-accent" aria-hidden />
              <span>About</span>
            </div>

            <div className="flex flex-col gap-4">
              {stats.map(({ icon: Icon, label, highlight }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={16} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    {highlight && (
                      <span className="text-sm font-semibold text-fg leading-tight">
                        {highlight}
                      </span>
                    )}
                    <span className="text-xs text-muted leading-tight">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — paragraphs */}
          <div className="flex flex-col gap-6">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-muted md:text-lg"
              >
                {renderBold(p)}
              </p>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
