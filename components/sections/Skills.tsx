import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SkillTile } from "@/components/ui/SkillTile";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";
import { skillGroups } from "@/lib/about";

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <Container>
        <FadeIn>
          <div className="mb-10 flex items-center gap-3 font-mono text-sm font-bold uppercase tracking-[0.18em] text-fg">
            <span className="h-px w-10 bg-accent" aria-hidden />
            <span>Skills</span>
          </div>
        </FadeIn>

        <FadeInStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
          {skillGroups.map((group) => (
            <FadeInItem key={group.label}>
              <Card className="p-5 h-full">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  {group.label}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {group.items.map((item) => (
                    <SkillTile key={item} name={item} />
                  ))}
                </div>
              </Card>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
