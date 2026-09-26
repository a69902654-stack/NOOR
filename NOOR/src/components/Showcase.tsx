import { img } from "../media";
import { useLang } from "../LanguageContext";
import { Container, Eyebrow, Reveal } from "./ui";

export function Showcase() {
  const { t, lang } = useLang();

  return (
    <section id="showcase" className="relative overflow-hidden bg-navy py-24 sm:py-32">
      <div className="orb -end-20 top-20 h-80 w-80 bg-gold/15 animate-drift" />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>{t.showcase.eyebrow}</Eyebrow>
            <h2 className="font-display text-4xl leading-tight text-ivory sm:text-5xl">
              {t.showcase.title}
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-sand/75">
              {t.showcase.subtitle}
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6">
              {t.showcase.points.map((p) => (
                <div key={p.l} className="border-s border-gold/30 ps-4">
                  <dt className="font-display text-2xl text-gold-2">{p.k}</dt>
                  <dd className="mt-1 text-xs text-mist">{p.l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.12} className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gold/10 blur-2xl" />
            <figure className="relative overflow-hidden rounded-[1.6rem] border border-gold-2/20">
              <img
                src={img.appLearning}
                alt={t.showcase.caption}
                className="aspect-[5/4] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/70 to-transparent p-5 text-xs text-sand/80">
                {t.showcase.caption}
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-2">
            {t.showcase.modulesTitle}
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.showcase.modules.map((m, i) => (
              <div
                key={m.t}
                className="card-hover rounded-2xl border border-gold-2/15 bg-white/[0.03] p-6"
              >
                <span className="font-display text-sm text-gold">
                  {lang === "fa" ? ["۰۱", "۰۲", "۰۳", "۰۴"][i] : `0${i + 1}`}
                </span>
                <h3 className="mt-3 font-display text-2xl text-ivory">{m.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{m.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
