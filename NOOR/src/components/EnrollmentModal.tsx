import { FormEvent, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { useLang } from "../LanguageContext";
import { Button } from "./ui";

export function EnrollmentModal({
  open,
  plan,
  onClose,
}: {
  open: boolean;
  plan: string;
  onClose: () => void;
}) {
  const { t } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    level: "",
    plan,
  });

  useEffect(() => {
    setForm((f) => ({ ...f, plan: plan || t.pricing.plans[1].id }));
  }, [plan, t.pricing.plans]);

  useEffect(() => {
    if (!open) {
      const id = setTimeout(() => {
        setStatus("idle");
        setError("");
      }, 280);
      return () => clearTimeout(id);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.city || !form.level || !form.plan) {
      setError(t.modal.error);
      return;
    }
    setError("");
    setStatus("sending");
    window.setTimeout(() => setStatus("done"), 900);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-navy/70 backdrop-blur-md"
            aria-label={t.modal.close}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enroll-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-md overflow-hidden rounded-[1.6rem] border border-gold-2/20 bg-ivory text-ink shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute end-3 top-3 grid h-9 w-9 place-items-center rounded-full text-stone hover:bg-navy/5"
              aria-label={t.modal.close}
            >
              <X size={16} />
            </button>

            {status === "done" ? (
              <div className="px-7 py-12 text-center">
                <CheckCircle2 className="mx-auto text-teal" size={40} />
                <h3 className="mt-4 font-display text-3xl text-navy">
                  {t.modal.successTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  {t.modal.successBody}
                </p>
                <Button className="mt-8" onClick={onClose}>
                  {t.modal.close}
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="px-7 py-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                  NOOR
                </p>
                <h3 id="enroll-title" className="mt-1 font-display text-3xl text-navy">
                  {t.modal.title}
                </h3>
                <p className="mt-2 text-sm text-stone">{t.modal.subtitle}</p>

                <div className="mt-6 space-y-3.5">
                  <Field label={t.modal.name}>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={t.modal.namePh}
                      className="field"
                    />
                  </Field>
                  <Field label={t.modal.phone}>
                    <input
                      required
                      inputMode="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder={t.modal.phonePh}
                      className="field"
                    />
                  </Field>
                  <Field label={t.modal.city}>
                    <select
                      required
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="field"
                    >
                      <option value="">{t.modal.cityPh}</option>
                      {t.modal.cities.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label={t.modal.level}>
                    <select
                      required
                      value={form.level}
                      onChange={(e) => setForm({ ...form, level: e.target.value })}
                      className="field"
                    >
                      <option value="">{t.modal.levelPh}</option>
                      {t.modal.levels.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label={t.modal.plan}>
                    <select
                      required
                      value={form.plan}
                      onChange={(e) => setForm({ ...form, plan: e.target.value })}
                      className="field"
                    >
                      {t.pricing.plans.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                {error && <p className="mt-3 text-xs text-red-700">{error}</p>}

                <Button type="submit" className="mt-6 w-full" disabled={status === "sending"}>
                  {status === "sending" ? t.modal.sending : t.modal.submit}
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-semibold tracking-wide text-stone">
        {label}
      </span>
      {children}
    </label>
  );
}
