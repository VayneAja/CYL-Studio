import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16" style={{ background: "#0A0A0F" }}>
      {/* bg blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "#6C47FF" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: "#FF6B6B" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs w-fit"
            style={{ background: "rgba(108,71,255,0.15)", color: "#A78BFF", border: "1px solid rgba(108,71,255,0.3)" }}
          >
            <Sparkles size={12} />
            Jasa Desain Profesional
          </div>

          <h1
            className="leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#FFFFFF" }}
          >
            Ide Kamu,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6C47FF, #FF6B6B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Kami Wujudkan
            </span>
          </h1>

          <p className="text-base leading-relaxed" style={{ color: "#9CA3AF" }}>
            Kami bantu brand kamu tampil beda. Dari logo, branding, hingga UI/UX — semua dikerjakan dengan serius, cepat,
            dan harga yang ramah di kantong.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm text-white transition-all hover:opacity-90 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #6C47FF, #8B5CF6)" }}
            >
              Mulai Sekarang <ArrowRight size={16} />
            </button>
            <button
              onClick={() => document.getElementById("portofolio")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm transition-all hover:bg-white/10"
              style={{ color: "#D1D5DB", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Lihat Portofolio
            </button>
          </div>

          <div className="flex gap-8 pt-2">
            {[["50+", "Klien"], ["200+", "Proyek"], ["4.9★", "Rating"]].map(([val, label]) => (
              <div key={label}>
                <p style={{ fontSize: "1.4rem", fontWeight: 700, color: "#FFFFFF" }}>{val}</p>
                <p style={{ fontSize: "0.75rem", color: "#6B7280" }}>{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxncmFwaGljJTIwZGVzaWduJTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc5MTI1MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Design workspace"
              className="w-full h-80 object-cover"
            />
          </div>
          {/* floating card */}
          <div
            className="absolute -bottom-4 -left-6 px-4 py-3 rounded-xl flex items-center gap-3"
            style={{ background: "#1A1A2E", border: "1px solid rgba(108,71,255,0.4)" }}
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#6C47FF" }}>
              <Sparkles size={14} color="white" />
            </div>
            <div>
              <p style={{ fontSize: "0.7rem", color: "#6B7280" }}>Proyek selesai</p>
              <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#FFFFFF" }}>Branding UMKM — 3 hari</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
