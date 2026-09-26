import { img } from "../media";
import { useLang } from "../LanguageContext";
import { Container, Eyebrow, Reveal } from "./ui";

export function Method() {
  const { t, lang } = useLang();

  return (
    <section id="method" className="relative overflow-hidden bg-navy-2 py-24 sm:py-32">
      <div className="persian-pattern pointer-events-none absolute inset-0 opacity-[0.06]" />
      <Container className="relative">
        <Reveal className="max-w-2xl">
          <Eyebrow>{t.method.eyebrow}</Eyebrow>
          <h2 className="font-display text-4xl text-ivory sm:text-5xl">{t.method.title}</h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[1.6rem] border border-gold-2/15 bg-gold-2/15 sm:grid-cols-2 lg:grid-cols-4">
          {t.method.steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.08}>
              <article className="h-full bg-navy p-7 sm:p-8">
                <span className="font-display text-4xl text-gold/70">{s.n}</span>
                <h3 className="mt-6 font-display text-3xl text-ivory">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand/70">{s.d}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 overflow-hidden rounded-[1.6rem]">
          <img
            src={img.studyGroup}
            loading="lazy"
            decoding="async"
            alt={
              lang === "fa"
                ? "دانش‌آموزان ایرانی در حال همکاری روی لپ‌تاپ در کافه"
                : "Iranian students collaborating over laptops in a sunlit café"
            }
            className="aspect-[4/3] w-full object-cover object-[center_30%] sm:aspect-[21/9]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
