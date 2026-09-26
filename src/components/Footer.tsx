import { useLang } from "../LanguageContext";
import { Container, Logo } from "./ui";

export function Footer() {
  const { t } = useLang();

  const cols = [
    { title: t.footer.col1, links: t.footer.links1, hrefs: ["#showcase", "#method", "#pricing", "#stories"] },
    { title: t.footer.col2, links: t.footer.links2, hrefs: ["#top", "#stories", "#top", "#top"] },
    { title: t.footer.col3, links: t.footer.links3, hrefs: ["#faq", "#faq", "#pricing", "#top"] },
  ];

  return (
    <footer className="border-t border-gold-2/10 bg-navy pt-16 pb-8">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs font-display text-2xl text-gold-2/80">
              {t.footer.tagline}
            </p>
            <p className="mt-4 text-xs tracking-wide text-mist">{t.footer.cities}</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-2">
                  {c.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {c.links.map((l, i) => (
                    <li key={l}>
                      <a
                        href={c.hrefs[i]}
                        className="text-sm text-sand/70 transition hover:text-gold-2"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-gold-2/10 pt-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.copy}</p>
          <p>{t.footer.legal}</p>
        </div>
      </Container>
    </footer>
  );
}
