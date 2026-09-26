import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "../LanguageContext";
import { Button, Container, Logo } from "./ui";

export function Navbar({ onCta }: { onCta: () => void }) {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#features", label: t.nav.features },
    { href: "#method", label: t.nav.method },
    { href: "#stories", label: t.nav.stories },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "glass py-2.5 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]" : "bg-transparent py-5"
      }`}
    >
      <Container className="flex items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-[13px] font-medium tracking-wide text-cream/75 transition hover:text-cream"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggle}
            className="rounded-full border border-gold-2/20 px-3 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-gold-2 transition hover:border-gold-2/50 hover:bg-gold-2/10"
            aria-label={lang === "en" ? "Switch to Persian" : "Switch to English"}
          >
            {lang === "en" ? "FA" : "EN"}
          </button>
          <Button
            onClick={onCta}
            className="hidden px-5 py-2.5 text-[13px] sm:inline-flex"
          >
            {t.nav.cta}
          </Button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-gold-2/20 text-cream lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden"
          >
            <Container className="flex flex-col gap-1 pb-6 pt-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base text-cream/90 hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <Button onClick={() => { setOpen(false); onCta(); }} className="mt-3 w-full">
                {t.nav.cta}
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
