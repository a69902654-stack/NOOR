import { Send } from "lucide-react";
import { useLang } from "../LanguageContext";
import { Button, Container, Reveal } from "./ui";

export function CTA({ onCta }: { onCta: () => void }) {
  const { t, lang } = useLang();

  return (
    <section className="relative overflow-hidden bg-navy-2 py-24 sm:py-28">
      <div className="persian-pattern pointer-events-none absolute inset-0 opacity-[0.08]" />
      <div className="orb start-10 top-0 h-80 w-80 bg-gold/20" />
      <div className="orb end-0 bottom-0 h-72 w-72 bg-teal/20" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl rounded-[2rem] border border-gold-2/20 bg-gradient-to-br from-navy-3/80 to-navy/80 px-6 py-14 text-center shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:px-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-2">
            {t.cta.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl text-ivory sm:text-5xl">{t.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-lg text-sand/75">{t.cta.subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button onClick={onCta} className="px-8 py-3.5 animate-glow">
              {t.cta.primary}
            </Button>
            <a
              href="https://t.me/nooracademy"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" className="px-8 py-3.5">
                <Send size={15} />
                {t.cta.secondary}
              </Button>
            </a>
          </div>
          <p className="mt-6 text-xs text-mist">{t.cta.fine}</p>
          {lang === "fa" && (
            <p className="mt-8 font-display text-3xl text-gold/40" aria-hidden>
              نور
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
