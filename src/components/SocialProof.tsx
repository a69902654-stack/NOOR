import { useLang } from "../LanguageContext";
import { Container, Reveal } from "./ui";

export function SocialProof() {
  const { t } = useLang();
  const items = [...t.logos.items, ...t.logos.items];
  const stats = [
    [t.social.a, t.social.al],
    [t.social.b, t.social.bl],
    [t.social.c, t.social.cl],
    [t.social.d, t.social.dl],
  ];

  return (
    <section className="relative border-y border-gold-2/10 bg-navy-2/80 py-14">
      <Container>
        <Reveal>
          <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-mist">
            {t.logos.label}
          </p>
        </Reveal>
      </Container>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-2 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-2 to-transparent" />
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap py-2">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-xl tracking-[0.18em] text-cream/35 sm:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <Container>
        <Reveal className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map(([v, l]) => (
            <div key={l} className="text-center">
              <p className="font-display text-3xl text-gold-2 sm:text-4xl">{v}</p>
              <p className="mt-1 text-xs text-mist">{l}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
