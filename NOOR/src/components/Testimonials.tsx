import { img } from "../media";
import { useLang } from "../LanguageContext";
import { Container, Eyebrow, Reveal } from "./ui";

const portraits = [
  img.portraitNeda,
  img.portraitArash,
  img.portraitSara,
  img.portraitReza,
];

export function Testimonials() {
  const { t } = useLang();

  return (
    <section id="stories" className="relative bg-ivory py-24 text-ink sm:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow>{t.stories.eyebrow}</Eyebrow>
          </div>
          <h2 className="font-display text-4xl text-navy sm:text-5xl">{t.stories.title}</h2>
          <p className="mt-4 text-stone">{t.stories.subtitle}</p>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {t.stories.items.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <figure className="card-hover flex h-full flex-col rounded-[1.6rem] border border-navy/8 bg-white p-7 shadow-[0_18px_40px_-28px_rgba(11,16,32,0.35)]">
                <div className="mb-5 flex items-center gap-4">
                  <img
                    src={portraits[i]}
                    alt={s.name}
                    className="h-14 w-14 rounded-full object-cover object-top ring-2 ring-gold/40"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <figcaption className="font-semibold text-navy">{s.name}</figcaption>
                    <p className="text-xs text-mist">{s.meta}</p>
                  </div>
                </div>
                <blockquote className="flex-1 font-display text-xl leading-relaxed text-navy/85">
                  “{s.quote}”
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
