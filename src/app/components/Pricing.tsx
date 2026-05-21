import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "299",
    desc: "Cocok untuk bisnis baru yang butuh identitas visual dasar.",
    features: [
      "1 Logo (3 konsep)",
      "Palet warna & tipografi",
      "Format PNG, JPG, SVG",
      "2x revisi",
      "Deliverable dalam 5 hari",
    ],
    cta: "Pilih Paket",
    highlight: false,
    color: "#6C47FF",
    emoji: "🌱",
  },
  {
    name: "Growth",
    price: "699",
    desc: "Paket lengkap untuk brand yang ingin tampil konsisten di semua platform.",
    features: [
      "Semua di Starter",
      "Brand guideline lengkap",
      "10 template sosmed",
      "Kartu nama & kop surat",
      "5x revisi",
      "Deliverable dalam 7 hari",
    ],
    cta: "Mulai Sekarang",
    highlight: true,
    color: "#6C47FF",
    emoji: "🚀",
  },
  {
    name: "Pro",
    price: "1.299",
    desc: "Solusi menyeluruh untuk bisnis yang siap scale-up.",
    features: [
      "Semua di Growth",
      "UI/UX web atau app (5 halaman)",
      "Mockup presentasi",
      "Konten sosmed 1 bulan",
      "Revisi unlimited",
      "Support 30 hari",
    ],
    cta: "Konsultasi Gratis",
    highlight: false,
    color: "#6C47FF",
    emoji: "💎",
  },
];

export function Pricing() {
  const [selected, setSelected] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState<number | null>(null);

  const handleSelect = (i: number) => {
    setSelected(i);
    setConfirmed(null);
  };

  const handleConfirm = (i: number) => {
    setConfirmed(i);
    setTimeout(() => {
      setSelected(null);
      document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" });
    }, 900);
  };

  return (
    <section id="harga" className="py-24" style={{ background: "#0A0A0F" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm mb-3" style={{ color: "#A78BFF", fontWeight: 600, letterSpacing: "0.05em" }}>
            PAKET HARGA
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 800, color: "#FFFFFF" }}>
            Harga Transparan, No Hidden Fee
          </h2>
          <p className="mt-3 max-w-lg mx-auto text-sm" style={{ color: "#6B7280" }}>
            Klik paket untuk pilih. Custom juga tersedia — hubungi kami.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleSelect(i)}
              animate={
                selected === i
                  ? { scale: [1, 1.03, 1], transition: { duration: 0.35 } }
                  : {}
              }
              className="rounded-2xl p-7 flex flex-col gap-6 relative cursor-pointer"
              style={
                p.highlight
                  ? {
                      background: "linear-gradient(135deg, #6C47FF, #8B5CF6)",
                      boxShadow: selected === i ? "0 0 60px rgba(108,71,255,0.6)" : "0 0 40px rgba(108,71,255,0.35)",
                      outline: selected === i ? "2px solid #A78BFF" : "none",
                    }
                  : {
                      background: selected === i ? "#1E1B3A" : "#1A1A2E",
                      border: selected === i ? "1.5px solid #6C47FF" : "1px solid rgba(255,255,255,0.08)",
                    }
              }
            >
              {p.highlight && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs text-white"
                  style={{ background: "#FF6B6B", fontWeight: 600 }}
                >
                  Paling Banyak Dipilih
                </span>
              )}

              <div className="flex items-center justify-between">
                <div>
                  <p style={{ fontSize: "0.85rem", fontWeight: 600, color: p.highlight ? "#E0D4FF" : "#A78BFF" }}>
                    {p.emoji} {p.name}
                  </p>
                  <div className="flex items-end gap-1 mt-2">
                    <span style={{ fontSize: "0.85rem", color: p.highlight ? "#E0D4FF" : "#9CA3AF" }}>Rp</span>
                    <span style={{ fontSize: "2.2rem", fontWeight: 800, color: "#FFFFFF", lineHeight: 1 }}>
                      {p.price}k
                    </span>
                  </div>
                </div>

                <AnimatePresence>
                  {selected === i && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: p.highlight ? "rgba(255,255,255,0.25)" : "rgba(108,71,255,0.3)" }}
                    >
                      <Check size={14} color="white" strokeWidth={3} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <p className="text-sm" style={{ color: p.highlight ? "#D8C9FF" : "#6B7280" }}>
                {p.desc}
              </p>

              <ul className="flex flex-col gap-3">
                {p.features.map((f, fi) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: fi * 0.05 }}
                    className="flex items-start gap-2.5 text-sm"
                  >
                    <div
                      className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: p.highlight ? "rgba(255,255,255,0.25)" : "rgba(108,71,255,0.2)" }}
                    >
                      <Check size={10} color={p.highlight ? "#fff" : "#A78BFF"} strokeWidth={3} />
                    </div>
                    <span style={{ color: p.highlight ? "#F0EBFF" : "#D1D5DB" }}>{f}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={(e) => { e.stopPropagation(); handleConfirm(i); }}
                className="w-full py-3 rounded-xl text-sm transition-all relative overflow-hidden"
                style={
                  p.highlight
                    ? { background: "#FFFFFF", color: "#6C47FF", fontWeight: 700 }
                    : { background: selected === i ? "#6C47FF" : "rgba(108,71,255,0.2)", color: selected === i ? "#fff" : "#A78BFF", border: selected === i ? "none" : "1px solid rgba(108,71,255,0.3)", fontWeight: 600 }
                }
              >
                <AnimatePresence mode="wait">
                  {confirmed === i ? (
                    <motion.span
                      key="done"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <Sparkles size={14} /> Oke, menuju form...
                    </motion.span>
                  ) : (
                    <motion.span
                      key="cta"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                    >
                      {p.cta}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
