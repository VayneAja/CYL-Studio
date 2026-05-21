import { Instagram, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ background: "#0A0A0F", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-10">
          <div>
            <span className="text-xl" style={{ fontWeight: 700, color: "#FFFFFF" }}>
              CYL<span style={{ color: "#6C47FF" }}>studio</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "#6B7280" }}>
              Jasa desain profesional untuk bisnis yang ingin tampil beda dan berkesan.
            </p>
            <div className="flex gap-3 mt-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: MessageCircle, href: "#" },
                { icon: Mail, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:opacity-80"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                >
                  <Icon size={15} color="#9CA3AF" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm mb-4" style={{ fontWeight: 600, color: "#FFFFFF" }}>
              Layanan
            </p>
            <ul className="flex flex-col gap-2">
              {["Logo & Brand Identity", "UI/UX Design", "Social Media Design", "Brand Guideline", "Desain Print"].map(
                (l) => (
                  <li key={l}>
                    <button
                      onClick={() => scrollTo("layanan")}
                      className="text-sm hover:opacity-80 transition-opacity text-left"
                      style={{ color: "#6B7280" }}
                    >
                      {l}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <p className="text-sm mb-4" style={{ fontWeight: 600, color: "#FFFFFF" }}>
              Navigasi
            </p>
            <ul className="flex flex-col gap-2">
              {[["Layanan", "layanan"], ["Portofolio", "portofolio"], ["Harga", "harga"], ["Testimoni", "testimoni"], ["Kontak", "kontak"]].map(
                ([label, id]) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollTo(id)}
                      className="text-sm hover:opacity-80 transition-opacity text-left"
                      style={{ color: "#6B7280" }}
                    >
                      {label}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "#4B5563" }}
        >
          <p>© 2026 CYL Studio. Semua hak dilindungi.</p>
          <p>Dibuat dengan ❤️ untuk pelaku bisnis Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
