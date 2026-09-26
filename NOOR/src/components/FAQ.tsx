import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useLang } from "../LanguageContext";
import { Container, Eyebrow, Reveal } from "./ui";

export function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-cream py-24 text-ink sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>{t.faq.eyebrow}</Eyebrow>
            <h2 className="font-display text-4xl text-navy sm:text-5xl">{t.faq.title}</h2>
          </Reveal>

          <div className="divide-y divide-navy/10 border-y border-navy/10">
            {t.faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={i * 0.04}>
                  <div>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 py-5 text-start"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-xl text-navy sm:text-2xl">
                        {item.q}
                      </span>
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-navy/15 transition ${
                          isOpen ? "rotate-45 bg-navy text-gold-2" : "text-navy"
                        }`}
                      >
                        <Plus size={16} />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 text-sm leading-relaxed text-stone">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
