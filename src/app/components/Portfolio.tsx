import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Branding Kafe Lokal",
    category: "Logo & Branding",
    client: "Kafe Kintamani, Bali",
    duration: "5 hari",
    desc: "Redesign total identitas visual kafe dengan konsep earthy dan modern. Termasuk logo, menu, dan packaging kopi.",
    img: "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dvJTIwYnJhbmRpbmclMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MXx8fHwxNzc5Mjc3NDc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#6C47FF",
  },
  {
    title: "Aplikasi Belanja Online",
    category: "UI/UX Design",
    client: "Startup Fintech, Jakarta",
    duration: "14 hari",
    desc: "Desain ulang flow checkout dan homepage e-commerce. Conversion rate naik 28% setelah launch.",
    img: "https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwbW9ja3VwJTIwc2NyZWVufGVufDF8fHx8MTc3OTI3NzQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#FF6B6B",
  },
  {
    title: "Identity UMKM Fashion",
    category: "Brand Identity",
    client: "Label Lokal, Bandung",
    duration: "7 hari",
    desc: "Brand identity lengkap untuk label fashion lokal. Termasuk logo, swing tag, dan packaging premium.",
    img: "https://images.unsplash.com/photo-1597979732130-9d2ad18df38b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsb2dvJTIwYnJhbmRpbmclMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MXx8fHwxNzc5Mjc3NDc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#F59E0B",
  },
  {
    title: "Website Portofolio Kreatif",
    category: "UI/UX Design",
    client: "Fotografer Freelance",
    duration: "10 hari",
    desc: "Website portofolio minimalis dengan galeri foto interaktif dan form booking yang terintegrasi.",
    img: "https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc5MTI1MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#10B981",
  },
  {
    title: "Visual Brand Startup Tech",
    category: "Logo & Branding",
    client: "SaaS Startup, Surabaya",
    duration: "6 hari",
    desc: "Logo dan brand system untuk startup B2B. Clean, trustworthy, dan scalable untuk semua kebutuhan digital.",
    img: "https://images.unsplash.com/photo-1572533717789-543da73adb20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsb2dvJTIwYnJhbmRpbmclMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MXx8fHwxNzc5Mjc3NDc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#3B82F6",
  },
  {
    title: "Desain App Mobile",
    category: "UI/UX Design",
    client: "Healthtech App",
    duration: "21 hari",
    desc: "UI/UX lengkap untuk aplikasi kesehatan. 40+ screens, design system, dan handoff Figma yang rapi.",
    img: "https://images.unsplash.com/photo-1669850850090-54237ab4a4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx1aSUyMHV4JTIwZGVzaWduJTIwbW9ja3VwJTIwc2NyZWVufGVufDF8fHx8MTc3OTI3NzQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#EC4899",
  },
];

export function Portfolio() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="portofolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm mb-3" style={{ color: "#6C47FF", fontWeight: 600, letterSpacing: "0.05em" }}>
            KARYA KAMI
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 800, color: "#0A0A0F" }}>
            Portofolio Pilihan
          </h2>
          <p className="mt-3 max-w-lg mx-auto text-sm" style={{ color: "#6B7280" }}>
            Klik proyek untuk lihat detail. Beberapa karya bersama klien dari berbagai industri.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6, boxShadow: `0 16px 40px ${p.color}25` }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActive(i)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ border: "1px solid rgba(0,0,0,0.06)" }}
            >
              <div className="relative overflow-hidden">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                  <ImageWithFallback
                    src={p.img}
                    alt={p.title}
                    className="w-full h-52 object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex items-center gap-1.5 text-white text-xs font-semibold">
                    <ExternalLink size={13} /> Lihat Detail
                  </div>
                </div>
              </div>
              <div className="p-4">
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ background: `${p.color}15`, color: p.color, fontSize: "0.7rem" }}
                >
                  {p.category}
                </span>
                <p className="mt-2" style={{ fontSize: "0.9rem", fontWeight: 600, color: "#0A0A0F" }}>
                  {p.title}
                </p>
                <p className="mt-1 text-xs" style={{ color: "#9CA3AF" }}>{p.client}</p>
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
              style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
            >
              <div
                className="relative bg-white rounded-2xl overflow-hidden max-w-lg w-full pointer-events-auto"
                style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.25)" }}
              >
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm hover:bg-white transition-colors"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}
                >
                  <X size={15} />
                </button>

                <motion.div
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src={projects[active].img}
                    alt={projects[active].title}
                    className="w-full h-56 object-cover"
                  />
                </motion.div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: `${projects[active].color}15`, color: projects[active].color, fontSize: "0.7rem" }}
                      >
                        {projects[active].category}
                      </span>
                      <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0A0A0F", marginTop: "0.5rem" }}>
                        {projects[active].title}
                      </h3>
                    </div>
                  </div>

                  <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.75, marginBottom: "1rem" }}>
                    {projects[active].desc}
                  </p>

                  <div className="flex gap-6 py-3 mb-4" style={{ borderTop: "1px solid #F3F4F6", borderBottom: "1px solid #F3F4F6" }}>
                    {[["Klien", projects[active].client], ["Durasi", projects[active].duration]].map(([label, val]) => (
                      <div key={label}>
                        <p style={{ fontSize: "0.7rem", color: "#9CA3AF", marginBottom: "0.2rem" }}>{label}</p>
                        <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#0A0A0F" }}>{val}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setActive(null);
                      setTimeout(() => document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" }), 200);
                    }}
                    className="w-full py-2.5 rounded-xl text-sm text-white transition-all hover:opacity-90"
                    style={{ background: projects[active].color, fontWeight: 700 }}
                  >
                    Mau Proyek Serupa? Hubungi Kami
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
