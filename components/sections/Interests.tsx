import { Container } from "@/components/layout/Container";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";
import { cn } from "@/lib/cn";

const interests = [
  {
    emoji: "🏔️",
    term: "Orophile",
    pronunciation: "/ˈɒr.ə.faɪl/",
    def: "n. one who treats altitude as a feature, not a bug",
    // one who pushes to mountains more often than to production
    // one who considers low altitude a legacy system
    // one who scales peaks, not just microservices
    quote: "The mountains are calling and I must go.",
    author: "John Muir",
    tag: "git push --force mountains",
    from: "from-accent/16",
    to: "to-accent-2/10",
    dot: "bg-accent",
  },
  {
    emoji: "🥗",
    term: "Kitchen Engineer",
    pronunciation: "/ˈkɪtʃ.ɪn ˌen.dʒɪˈnɪər/",
    def: "n. one who architects nourishing meals from scratch",
    quote:
      "Cooking is like love - it should be entered into with abandon or not at all.",
    author: "Harriet van Horne",
    tag: "cook --flag=healthy --no-junk",
    from: "from-emerald-500/16",
    to: "to-teal-400/5",
    dot: "bg-emerald-500",
  },
  {
    emoji: "💃",
    term: "Rhythm Debugger",
    pronunciation: "/ˈrɪð.əm dɪˈbʌɡ.ər/",
    def: "n. one who runs on music when coffee fails",
    quote: "Dance is the hidden language of the soul of the body.",
    author: "Martha Graham",
    tag: "catch (err) { keepDancing(); }",
    from: "from-pink-500/16",
    to: "to-purple-400/5",
    dot: "bg-pink-500",
  },
] as const;

export function Interests() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <FadeIn>
          <div className="mb-8 flex items-center gap-3 font-mono text-sm font-bold uppercase tracking-[0.18em] text-fg">
            <span className="h-px w-10 bg-accent" aria-hidden />
            <span>{"when not pushing to prod"}</span>
          </div>
        </FadeIn>

        <FadeInStagger className="grid gap-4 sm:grid-cols-3" stagger={0.1}>
          {interests.map((item) => (
            <FadeInItem key={item.term} className="h-full">
              <div
                className={cn(
                  "group relative h-full overflow-hidden rounded-2xl border border-border/60",
                  "bg-gradient-to-br backdrop-blur-md",
                  item.from,
                  item.to,
                  "transition-all duration-300 hover:border-border hover:shadow-xl"
                )}
              >
                {/* decorative quote mark */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-6 select-none font-serif text-[9rem] leading-none text-fg/5 transition-all duration-500 group-hover:text-fg/10"
                >
                  "
                </span>

                <div className="relative flex h-full flex-col gap-5 p-6">
                  {/* emoji + term */}
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{item.emoji}</span>
                    <div>
                      <h3 className="text-base font-semibold text-fg">
                        {item.term}
                      </h3>
                      <p className="font-mono text-[10px] text-muted">
                        {item.pronunciation}
                      </p>
                      <p className="text-xs italic text-accent">{item.def}</p>
                    </div>
                  </div>

                  {/* quote */}
                  <blockquote className="flex-1 border-l-2 border-border pl-4">
                    <p className="font-serif text-base leading-relaxed text-fg">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <footer className="mt-2 font-mono text-[10px] text-muted">
                      — {item.author}
                    </footer>
                  </blockquote>

                  {/* code tag */}
                  <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-bg/60 px-3 py-2">
                    <span
                      className={cn("h-2 w-2 shrink-0 rounded-full", item.dot)}
                    />
                    <code className="font-mono text-[11px] text-muted">
                      {item.tag}
                    </code>
                  </div>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
