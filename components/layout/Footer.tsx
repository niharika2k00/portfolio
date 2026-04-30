import { Mail } from "lucide-react";
import { Container } from "./Container";
import { IconLink } from "@/components/ui/IconLink";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { socials } from "@/lib/socials";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/50 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-muted">
            © {year} {site.name}. Built with Next.js + Tailwind.
          </p>
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
      </Container>
    </footer>
  );
}
