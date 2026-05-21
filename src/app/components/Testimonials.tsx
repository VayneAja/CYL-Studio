import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rizky Ardana",
    role: "Owner Kafe Kintamani",
    avatar: "RA",
    color: "#6C47FF",
    text: "CYL Studio beneran ngebantu brand kafe gua keliatan lebih pro. Logo barunya dapet banyak pujian dari pelanggan. Proses cepet, revisi responsif, hasilnya memuaskan!",
    stars: 5,
  },
  {
    name: "Sari Dewi",
    role: "Founder Fashion UMKM",
    avatar: "SD",
    color: "#FF6B6B",
    text: "Udah coba beberapa jasa desain sebelumnya, tapi CYL Studio beda. Mereka beneran dengerin mau kita, bukan cuma ngasih template. Brand identity-nya matching banget sama visi bisnis gue.",
    stars: 5,
  },
  {
    name: "Budi Santoso",
    role: "Co-founder Startup Edukasi",
    avatar: "BS",
    color: "#10B981",
    text: "UI/UX app edukasi kami jadi jauh lebih clean dan user-friendly. Feedback dari user naik drastis setelah redesign. Worth every penny!",
    stars: 5,
  },
  {
    name: "Melinda Putri",
    role: "Digital Marketing Manager",
    avatar: "MP",
    color: "#F59E0B",
    text: "Template sosmed yang dibuatin buat kampanye kami konsisten dan estetik banget. Tim gampang edit sendiri. Engagement naik 40% dalam sebulan pertama.",
    stars: 5,
  },
  {
    name: "Andi Wijaya",
    role: "Owner Barbershop",
    avatar: "AW",
    color: "#3B82F6",
    text: "Dapet kartu nama, brosur, sama brand guideline lengkap. Sekarang barbershop gue keliatan makin legit dan profesional. Klien baru makin banyak masuk.",
    stars: 5,
  },
  {
    name: "Nindi Rahayu",
    role: "Content Creator",
    avatar: "NR",
    color: "#EC4899",
    text: "Feed Instagram gue jadi rapi dan punya identitas visual yang kuat. CYL Studio tau banget cara bikin konten yang eye-catching tapi tetap on-brand.",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimoni" className="py-24" style={{ background: "#F8F7FF" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm mb-3" style={{ color: "#6C47FF", fontWeight: 600, letterSpacing: "0.05em" }}>
            APA KATA KLIEN
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 800, color: "#0A0A0F" }}>
            Mereka Sudah Percaya
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -5, boxShadow: `0 12px 30px ${t.color}20` }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4 cursor-default"
              style={{ border: "1px solid rgba(0,0,0,0.06)" }}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={14} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <p style={{ fontSize: "0.85rem", color: "#374151", lineHeight: 1.75 }}>"{t.text}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                  style={{ background: t.color, fontWeight: 700 }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0A0A0F" }}>{t.name}</p>
                  <p style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
