import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Palette, Layout, Megaphone, FileImage, Pen, Smartphone, X, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Pen,
    title: "Logo & Brand Identity",
    desc: "Logo profesional yang mencerminkan nilai bisnis kamu. Termasuk panduan brand, palet warna, dan tipografi.",
    detail: "Kami mengerjakan minimal 3 konsep logo berbeda, lalu kamu pilih dan poles bersama. Deliverable akhir berupa file AI, SVG, PNG, PDF — siap cetak dan digital. Estimasi 3–5 hari kerja.",
    tag: "Paling Populer",
    color: "#6C47FF",
    items: ["3 konsep logo", "Palet warna", "Tipografi brand", "File AI/SVG/PNG/PDF", "Panduan penggunaan"],
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    desc: "Desain antarmuka aplikasi dan website yang intuitif, modern, dan user-friendly untuk semua platform.",
    detail: "Dimulai dari wireframe, lalu high-fidelity prototype di Figma. Kamu bisa langsung handover ke developer dengan design system yang terstruktur.",
    tag: null,
    color: "#FF6B6B",
    items: ["Wireframe", "High-fidelity UI", "Prototype Figma", "Design system", "Handoff ke dev"],
  },
  {
    icon: Megaphone,
    title: "Social Media Design",
    desc: "Konten visual feed Instagram, banner promosi, story, dan materi pemasaran digital lainnya.",
    detail: "Template yang bisa kamu edit sendiri via Canva atau Adobe. Konsisten secara visual, eye-catching, dan sesuai tone brand kamu.",
    tag: null,
    color: "#F59E0B",
    items: ["Feed Instagram", "Story & Reels cover", "Banner promosi", "Template editable", "10–30 desain/paket"],
  },
  {
    icon: Palette,
    title: "Brand Guideline",
    desc: "Dokumen panduan brand lengkap agar identitas bisnis kamu konsisten di semua media.",
    detail: "Dokumen PDF/presentasi yang berisi aturan penggunaan logo, warna, font, tone of voice, dan contoh penerapan di berbagai media.",
    tag: null,
    color: "#10B981",
    items: ["Aturan logo", "Color system", "Typography guide", "Tone of voice", "Contoh penerapan"],
  },
  {
    icon: FileImage,
    title: "Desain Print",
    desc: "Kartu nama, brosur, poster, banner, dan semua kebutuhan materi cetak bisnis kamu.",
    detail: "File siap cetak dalam format CMYK dengan bleed area yang benar. Tinggal kamu kirim ke percetakan mana saja.",
    tag: null,
    color: "#3B82F6",
    items: ["Kartu nama", "Brosur & flyer", "Poster & banner", "File CMYK siap cetak", "Packaging sederhana"],
  },
  {
    icon: Smartphone,
    title: "Mockup & Presentasi",
    desc: "Mockup produk dan deck presentasi yang menarik untuk pitch ke investor atau klien.",
    detail: "Presentasi yang storytelling-nya kuat dan visual yang bersih. Cocok untuk pitch deck, company profile, atau proposal klien.",
    tag: null,
    color: "#EC4899",
    items: ["Pitch deck", "Company profile", "Mockup produk", "Proposal visual", "PowerPoint/Keynote/Figma"],
  },
];

export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="layanan" className="py-24" style={{ background: "#F8F7FF" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm mb-3" style={{ color: "#6C47FF", fontWeight: 600, letterSpacing: "0.05em" }}>
            APA YANG KAMI TAWARKAN
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 800, color: "#0A0A0F" }}>
            Layanan Desain Lengkap
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm" style={{ color: "#6B7280" }}>
            Klik kartu untuk lihat detail layanan. Dari kebutuhan digital sampai cetak, semua ada.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, boxShadow: `0 12px 32px ${s.color}22` }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActive(i)}
              className="relative bg-white rounded-2xl p-6 cursor-pointer"
              style={{ border: "1px solid rgba(0,0,0,0.06)", transition: "border-color 0.2s" }}
            >
              {s.tag && (
                <span
                  className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs text-white"
                  style={{ background: s.color, fontSize: "0.65rem" }}
                >
                  {s.tag}
                </span>
              )}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${s.color}18` }}
              >
                <s.icon size={20} style={{ color: s.color }} />
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0A0A0F", marginBottom: "0.5rem" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.7 }}>{s.desc}</p>
              <div className="flex items-center gap-1 mt-4" style={{ color: s.color, fontSize: "0.8rem", fontWeight: 600 }}>
                Lihat detail <ArrowRight size={13} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active !== null && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="fixed inset-0 z-40"
              style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
            >
              <div
                className="relative bg-white rounded-2xl p-8 max-w-md w-full pointer-events-auto"
                style={{ boxShadow: `0 24px 60px ${services[active].color}33` }}
              >
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100"
                >
                  <X size={16} />
                </button>

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${services[active].color}15` }}
                >
                  {(() => { const Icon = services[active].icon; return <Icon size={22} style={{ color: services[active].color }} />; })()}
                </div>

                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0A0A0F", marginBottom: "0.5rem" }}>
                  {services[active].title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                  {services[active].detail}
                </p>

                <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#0A0A0F", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>
                  TERMASUK:
                </p>
                <ul className="flex flex-col gap-2 mb-6">
                  {services[active].items.map((item, idx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06 }}
                      className="flex items-center gap-2.5 text-sm"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: services[active].color }}
                      />
                      <span style={{ color: "#374151" }}>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    setActive(null);
                    setTimeout(() => document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" }), 200);
                  }}
                  className="w-full py-3 rounded-xl text-sm text-white transition-all hover:opacity-90"
                  style={{ background: services[active].color, fontWeight: 700 }}
                >
                  Pesan Layanan Ini
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
