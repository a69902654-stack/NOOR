import {
  BookOpen,
  Globe2,
  GraduationCap,
  LineChart,
  Sparkle,
  Users,
} from "lucide-react";
import { useLang } from "../LanguageContext";
import { Container, Eyebrow, Reveal } from "./ui";

const icons = [BookOpen, Globe2, Users, LineChart, GraduationCap, Sparkle];

export function Features() {
  const { t } = useLang();

  return (
    <section id="features" className="relative bg-ivory py-24 text-ink sm:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow>{t.features.eyebrow}</Eyebrow>
          </div>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-navy sm:text-5xl">
            {t.features.title}
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-stone sm:text-base">
            {t.features.subtitle}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <article className="card-hover group h-full rounded-3xl border border-navy/8 bg-white p-7 shadow-[0_20px_50px_-32px_rgba(11,16,32,0.35)]">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-navy text-gold-2 transition duration-500 group-hover:bg-gold group-hover:text-navy">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display text-2xl text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{item.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
