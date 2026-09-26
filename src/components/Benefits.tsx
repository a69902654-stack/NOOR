import { img } from "../media";
import { useLang } from "../LanguageContext";
import { Container, Eyebrow, Reveal } from "./ui";

export function Benefits() {
  const { t, lang } = useLang();

  return (
    <section className="relative bg-cream py-24 text-ink sm:py-32">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.7fr]">
          <Reveal>
            <Eyebrow>{t.benefits.eyebrow}</Eyebrow>
            <h2 className="font-display max-w-xl text-4xl leading-tight text-navy sm:text-5xl">
              {t.benefits.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="border-s-2 border-gold ps-5 text-[15px] italic leading-relaxed text-stone">
              “{t.benefits.quote}”
              <footer className="mt-3 not-italic text-xs tracking-wide text-mist">
                {t.benefits.quoteBy}
              </footer>
            </blockquote>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {t.benefits.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="card-hover h-full rounded-3xl bg-white p-6 shadow-[0_16px_40px_-28px_rgba(11,16,32,0.4)]">
                  <span className="font-display text-gold">
                    {lang === "fa" ? ["۰۱", "۰۲", "۰۳", "۰۴"][i] : `0${i + 1}`}
                  </span>
                  <h3 className="mt-3 font-display text-2xl text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12} className="grid gap-5">
            <div className="relative min-h-[260px] overflow-hidden rounded-[1.6rem]">
              <img
                src={img.successMoment}
                loading="lazy"
                decoding="async"
                alt={
                  lang === "fa"
                    ? "لحظه پذیرش دانش‌آموز"
                    : "A student in a moment of acceptance"
                }
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <img
                src={img.mentor}
                loading="lazy"
                decoding="async"
                alt={lang === "fa" ? "منتور نور" : "NOOR mentor"}
                className="h-44 w-full rounded-[1.3rem] object-cover object-top sm:h-52"
              />
              <img
                src={img.studentMale}
                loading="lazy"
                decoding="async"
                alt={lang === "fa" ? "دانش‌آموز در کتابخانه" : "Student in a library"}
                className="h-44 w-full rounded-[1.3rem] object-cover object-top sm:h-52"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
