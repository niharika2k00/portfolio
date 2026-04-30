import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconLink } from "@/components/ui/IconLink";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { socials } from "@/lib/socials";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-26">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-surface/40 p-10 backdrop-blur-md md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-32 -z-10 opacity-30 blur-3xl"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 30%, var(--color-accent), transparent 50%), radial-gradient(circle at 70% 70%, var(--color-accent-2), transparent 50%)",
            }}
          />

          <div className="flex flex-col items-center gap-8 text-center">
            <SectionHeading
              eyebrow="Contact"
              title={
                <>
                  Let&apos;s build
                  <br />
                  <span className="text-gradient-brand">something good.</span>
                </>
              }
              description="Open to senior backend / full-stack roles, interesting systems work, and conversations about cloud security and platform engineering."
              align="center"
            />

            <Button as="a" href={socials.emailHref} variant="gradient" size="lg">
              <Mail className="h-4 w-4" />
              {socials.email}
              <ArrowUpRight className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-2">
              <IconLink
                href={socials.github}
                label="GitHub"
                icon={<GithubIcon className="h-4 w-4" />}
              />
              <IconLink
                href={socials.linkedin}
                label="LinkedIn"
                icon={<LinkedinIcon className="h-4 w-4" />}
              />
              <IconLink
                href={socials.emailHref}
                label="Email"
                icon={<Mail className="h-4 w-4" />}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
