import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { copy, type Copy, type Lang } from "./i18n";

type Ctx = {
  lang: Lang;
  t: Copy;
  dir: "ltr" | "rtl";
  toggle: () => void;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.lang = lang === "fa" ? "fa" : "en";
    html.dir = lang === "fa" ? "rtl" : "ltr";
    body.classList.toggle("fa", lang === "fa");
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      t: copy[lang] as Copy,
      dir: copy[lang].dir,
      toggle: () => setLang((l) => (l === "en" ? "fa" : "en")),
      setLang,
    }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
