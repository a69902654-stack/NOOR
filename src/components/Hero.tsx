import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { img } from "../media";
import { useLang } from "../LanguageContext";
import { Button, Container } from "./ui";

export function Hero({ onCta }: { onCta: () => void }) {
  const { t, lang } = useLang();

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      <div className="persian-pattern pointer-events-none absolute inset-0 opacity-[0.07]" />
      <div className="orb -start-24 top-10 h-80 w-80 bg-gold/20 animate-drift" />
      <div
        className="orb end-0 top-40 h-96 w-96 bg-teal/15 animate-drift"
        style={{ animationDelay: "2s" }}
      />
      <div className="orb start-1/3 bottom-0 h-64 w-64 bg-gold/10" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-2/25 bg-white/5 px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-gold-2 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-teal-2 opacity-70" />
              <span className="relative h-2 w-2 rounded-full bg-teal-2" />
            </span>
            {t.hero.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[2.65rem] leading-[1.08] tracking-tight text-ivory sm:text-6xl lg:text-[4.35rem]"
          >
            {t.hero.titleA}{" "}
            <em className="gold-text not-italic">{t.hero.titleB}</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-sand/80 sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button onClick={onCta} className="px-7 py-3.5 text-[15px]">
              <Sparkles size={16} />
              {t.hero.cta}
            </Button>
            <a href="#showcase">
              <Button variant="ghost" className="w-full px-7 py-3.5 text-[15px] sm:w-auto">
                {t.hero.cta2}
                <ArrowDownRight size={16} />
              </Button>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-xs tracking-wide text-mist"
          >
            {t.hero.proof}
          </motion.p>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-gold-2/15 pt-6"
          >
            {[
              [t.hero.stat1v, t.hero.stat1l],
              [t.hero.stat2v, t.hero.stat2l],
              [t.hero.stat3v, t.hero.stat3l],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl text-gold-2 sm:text-3xl">{v}</dt>
                <dd className="mt-1 text-[11px] leading-snug text-mist">{l}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-6 rounded-[2.2rem] bg-gradient-to-br from-gold/25 via-transparent to-teal/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.8rem] border border-gold-2/20 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
            <img
              src={img.heroStudent}
              fetchPriority="high"
              alt={
                lang === "fa"
                  ? "دانش‌آموز ایرانی در حال مطالعه در نور طلایی"
                  : "Iranian student studying in golden light"
              }
              className="aspect-[4/5] w-full object-cover object-[center_20%] sm:aspect-[5/6]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
            <div className="absolute start-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-ivory backdrop-blur-md">
              نور · NOOR
            </div>
          </div>

          <motion.div
            className="glass animate-float absolute -start-2 bottom-16 max-w-[240px] rounded-2xl p-3.5 sm:-start-8"
            initial={{ opacity: 0, x: lang === "fa" ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <p className="text-[11px] font-medium leading-relaxed text-gold-3">
              {t.hero.floating}
            </p>
            <div className="mt-2 flex -space-x-2 rtl:space-x-reverse">
              {["N", "A", "S"].map((n) => (
                <span
                  key={n}
                  className="grid h-7 w-7 place-items-center rounded-full border border-navy bg-navy-3 text-[10px] font-semibold text-gold-2"
                >
                  {n}
                </span>
              ))}
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gold text-[10px] font-bold text-navy">
                +12
              </span>
            </div>
          </motion.div>

          <motion.div
            className="glass animate-float absolute -end-2 top-16 rounded-2xl p-3 sm:-end-6"
            style={{ animationDelay: "1.2s" }}
            initial={{ opacity: 0, x: lang === "fa" ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
          >
            <p className="text-[10px] uppercase tracking-[0.16em] text-mist">IELTS</p>
            <p className="font-display text-2xl text-gold-2">7.5 → 8.0</p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
