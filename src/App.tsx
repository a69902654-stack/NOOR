import { useCallback, useEffect, useState } from "react";
import { LanguageProvider, useLang } from "./LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { Features } from "./components/Features";
import { Showcase } from "./components/Showcase";
import { Benefits } from "./components/Benefits";
import { Method } from "./components/Method";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { EnrollmentModal } from "./components/EnrollmentModal";
import { Button } from "./components/ui";

function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setP(max > 0 ? el.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2.5px]"
      aria-hidden
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-gold via-gold-3 to-gold rtl:origin-right"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  );
}

function MobileDock({ onCta }: { onCta: () => void }) {
  const { t } = useLang();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <div className="glass flex items-center justify-between gap-3 rounded-full py-2 pe-2 ps-5 shadow-[0_-10px_40px_-16px_rgba(0,0,0,0.5)]">
        <div className="min-w-0">
          <p className="truncate text-[11px] font-semibold text-gold-2">NOOR · ۶.۹M</p>
          <p className="truncate text-[10px] text-cream/70">{t.cta.eyebrow}</p>
        </div>
        <Button onClick={onCta} className="shrink-0 px-5 py-2.5 text-xs">
          {t.nav.cta}
        </Button>
      </div>
    </div>
  );
}

function Page() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [plan, setPlan] = useState("noor");

  const openModal = useCallback((nextPlan?: string) => {
    if (nextPlan) setPlan(nextPlan);
    setOpen(true);
  }, []);

  return (
    <div className="relative pb-20 lg:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
      >
        {lang === "fa" ? "برو به محتوا" : "Skip to content"}
      </a>
      <div className="grain" aria-hidden />
      <ScrollProgress />
      <Navbar onCta={() => openModal()} />
      <main id="main">
        <Hero onCta={() => openModal()} />
        <SocialProof />
        <Features />
        <Showcase />
        <Benefits />
        <Method />
        <Testimonials />
        <Pricing onCta={(p) => openModal(p)} />
        <FAQ />
        <CTA onCta={() => openModal()} />
      </main>
      <Footer />
      {!open && <MobileDock onCta={() => openModal()} />}
      <EnrollmentModal open={open} plan={plan} onClose={() => setOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}
