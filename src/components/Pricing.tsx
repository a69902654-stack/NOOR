import { Check } from "lucide-react";
import { useLang } from "../LanguageContext";
import { Button, Container, Eyebrow, Reveal } from "./ui";

export function Pricing({
  onCta,
}: {
  onCta: (plan?: string) => void;
}) {
  const { t } = useLang();

  return (
    <section id="pricing" className="relative overflow-hidden bg-navy py-24 sm:py-32">
      <div className="orb start-1/4 top-10 h-72 w-72 bg-gold/10 animate-drift" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow>{t.pricing.eyebrow}</Eyebrow>
          </div>
          <h2 className="font-display text-4xl text-ivory sm:text-5xl">{t.pricing.title}</h2>
          <p className="mt-4 text-sand/70">{t.pricing.subtitle}</p>
        </Reveal>

        <div className="mt-16 grid items-stretch gap-5 lg:grid-cols-3">
          {t.pricing.plans.map((plan, i) => {
            const featured = plan.id === "noor";
            return (
              <Reveal key={plan.id} delay={i * 0.08} className="h-full">
                <article
                  className={`relative flex h-full flex-col rounded-[1.7rem] border p-7 sm:p-8 ${
                    featured
                      ? "border-gold/50 bg-gradient-to-b from-navy-3 to-navy shadow-[0_30px_70px_-30px_rgba(196,163,90,0.35)]"
                      : "border-gold-2/15 bg-white/[0.03]"
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-navy">
                      {t.pricing.popular}
                    </span>
                  )}
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gold-2">
                    {plan.nameFaHint}
                  </p>
                  <h3 className="mt-1 font-display text-4xl text-ivory">{plan.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{plan.desc}</p>
                  <div className="mt-6 flex items-end gap-2">
                    <span className="font-display text-4xl text-gold-2">{plan.price}</span>
                    <span className="mb-1 text-xs text-mist">{t.pricing.toman}</span>
                  </div>
                  <p className="text-xs text-mist">
                    {t.pricing.or} {plan.usd} · {plan.period}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-sm text-sand/80">
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0 text-gold"
                          strokeWidth={2.2}
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={featured ? "gold" : "ghost"}
                    className="mt-8 w-full"
                    onClick={() => onCta(plan.id)}
                  >
                    {t.pricing.cta}
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <p className="mt-10 text-center text-sm text-mist">{t.pricing.note}</p>
        </Reveal>
      </Container>
    </section>
  );
}
