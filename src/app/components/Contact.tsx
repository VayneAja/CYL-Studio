import { useState } from "react";
import { motion } from "motion/react";
import { MessageCircle, Mail, Instagram, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Jalur pengiriman data rahasia ke Formspree tanpa reload halaman
      const response = await fetch("https://formspree.io/f/xojbdqyb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSent(true);
      } else {
        alert("Waduh gagal kirim, coba lagi atau hubungi via WhatsApp ya bre!");
      }
    } catch (error) {
      alert("Ada masalah jaringan nih, bre!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kontak" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm mb-3" style={{ color: "#6C47FF", fontWeight: 600, letterSpacing: "0.05em" }}>
            HUBUNGI KAMI
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 800, color: "#0A0A0F" }}>
            Siap Mulai Projekmu?
          </h2>
          <p className="mt-3 max-w-lg mx-auto text-sm" style={{ color: "#6B7280" }}>
            Konsultasi pertama gratis! Ceritain kebutuhan desain kamu dan kita diskusiin bareng.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div
              className="rounded-2xl p-6"
              style={{ background: "#F8F7FF", border: "1px solid rgba(108,71,255,0.15)" }}
            >
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0A0A0F", marginBottom: "1rem" }}>
                Hubungi Langsung
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  { icon: MessageCircle, label: "WhatsApp", val: "+62 812 1273 7139", color: "#10B981" },
                  { icon: Mail, label: "Email", val: "halo@CYLStudio.id", color: "#6C47FF" },
                  { icon: Instagram, label: "Instagram", val: "@CYLStudio.id", color: "#EC4899" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${c.color}15` }}
                    >
                      <c.icon size={16} style={{ color: c.color }} />
                    </div>
                    <div>
                      <p style={{ fontSize: "0.7rem", color: "#9CA3AF" }}>{c.label}</p>
                      <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#0A0A0F" }}>{c.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-6" style={{ background: "#0A0A0F" }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.75rem" }}>
                Jam Operasional
              </p>
              {[
                ["Senin – Jumat", "09.00 – 21.00 WIB"],
                ["Sabtu", "10.00 – 17.00 WIB"],
                ["Minggu", "Libur (Emergency? WA aja)"],
              ].map(([day, time]) => (
                <div key={day} className="flex justify-between items-center py-1.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <span style={{ fontSize: "0.8rem", color: "#9CA3AF" }}>{day}</span>
                  <span style={{ fontSize: "0.8rem", color: "#D1D5DB", fontWeight: 500 }}>{time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-4 h-full py-16">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(16,185,129,0.1)" }}
                >
                  <CheckCircle size={32} style={{ color: "#10B981" }} />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0A0A0F" }}>Pesan Terkirim!</h3>
                <p className="text-center text-sm" style={{ color: "#6B7280" }}>
                  Tim kami akan menghubungi kamu dalam 1×24 jam. Terima kasih sudah percaya ke CYL Studio!
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", service: "", message: "" }); }}
                  className="text-sm"
                  style={{ color: "#6C47FF", fontWeight: 600 }}
                >
                  Kirim pesan lagi
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {[
                  { key: "name", label: "Nama Lengkap", type: "text", placeholder: "Rizky Ardana" },
                  { key: "email", label: "Email", type: "email", placeholder: "kamu@email.com" },
                ].map((f) => (
                  <div key={f.key}>
                    <label
                      className="block mb-1.5"
                      style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151" }}
                    >
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      name={f.key} // Ditambah name biar dikenali Formspree
                      placeholder={f.placeholder}
                      required
                      value={(form as any)[f.key]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl outline-none transition-all"
                      style={{
                        background: "#F8F7FF",
                        border: "1px solid rgba(108,71,255,0.2)",
                        fontSize: "0.85rem",
                        color: "#0A0A0F",
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label className="block mb-1.5" style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151" }}>
                    Layanan yang Dibutuhkan
                  </label>
                  <select
                    name="service" // Ditambah name biar dikenali Formspree
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl outline-none"
                    style={{
                      background: "#F8F7FF",
                      border: "1px solid rgba(108,71,255,0.2)",
                      fontSize: "0.85rem",
                      color: form.service ? "#0A0A0F" : "#9CA3AF",
                    }}
                  >
                    <option value="" disabled>Pilih layanan...</option>
                    <option value="logo">Logo & Brand Identity</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="sosmed">Social Media Design</option>
                    <option value="brand">Brand Guideline</option>
                    <option value="print">Desain Print</option>
                    <option value="mockup">Mockup & Presentasi</option>
                    <option value="custom">Custom / Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-1.5" style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151" }}>
                    Ceritakan Kebutuhanmu
                  </label>
                  <textarea
                    name="message" // Ditambah name biar dikenali Formspree
                    rows={4}
                    placeholder="Bisnis saya bergerak di bidang... saya butuh..."
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl outline-none resize-none"
                    style={{
                      background: "#F8F7FF",
                      border: "1px solid rgba(108,71,255,0.2)",
                      fontSize: "0.85rem",
                      color: "#0A0A0F",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading} // Cegah spam klik pas lagi ngirim
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white text-sm transition-all hover:opacity-90 hover:scale-[1.01]"
                  style={{ 
                    background: "linear-gradient(135deg, #6C47FF, #8B5CF6)", 
                    fontWeight: 700,
                    opacity: loading ? 0.7 : 1 
                  }}
                >
                  {loading ? "Mengirim..." : "Kirim Pesan"} <Send size={15} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}