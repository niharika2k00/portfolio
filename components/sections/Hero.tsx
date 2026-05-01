import { ArrowRight, Download, Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { IconLink } from "@/components/ui/IconLink";
import { FadeIn } from "@/components/ui/FadeIn";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { site } from "@/lib/site";
import { socials } from "@/lib/socials";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="hero-glow pointer-events-none absolute inset-0 -z-10 opacity-40 blur-3xl"
      />

      <Container className="py-20 md:py-24 lg:py-28">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          <FadeIn
            delay={0.1}
            from="bottom"
            className="flex max-w-2xl flex-col items-center gap-6 text-center lg:items-start lg:text-left"
          >
            <Pill>Available for new opportunities</Pill>

            <div className="flex flex-col gap-2">
              <p className="font-mono text-sm tracking-wider text-muted">
                — Hi, I&apos;m
              </p>
              <h1 className="text-5xl font-medium tracking-tight md:text-6xl lg:text-7xl">
                <span className="text-gradient-brand">{site.name}</span>
              </h1>
              <p className="text-2xl font-medium tracking-tight text-fg md:text-3xl">
                {site.role}
              </p>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Building microservice platforms and cloud-native systems
              architectures in <span className="font-mono text-fg">Java</span>,{" "}
              <span className="font-mono text-fg">Spring Boot</span>,{" "}
              <span className="font-mono text-fg">Node.js</span>,{" "}
              <span className="font-mono text-fg">React</span>, and{" "}
              <span className="font-mono text-fg">AWS</span>. 3+ years at
              Turbot, shipping cloud-security tooling and chasing down latency.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Button as="a" href="#projects" variant="gradient" size="lg">
                View work
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                as="a"
                href={socials.resume}
                variant="ghost"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
                <Download className="h-4 w-4" />
              </Button>
              <Button as="a" href="#contact" variant="ghost" size="lg">
                Get in touch
              </Button>
            </div>

            <div className="flex items-center gap-2 pt-2">
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
          </FadeIn>

          <FadeIn delay={0.3} from="right" className="relative shrink-0">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-full opacity-60 blur-2xl bg-gradient-brand"
            />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-border bg-surface md:h-72 md:w-72">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile-pic.png"
                alt={site.name}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
