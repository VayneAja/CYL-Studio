import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Layanan", "Portofolio", "Harga", "Testimoni", "Kontak"];

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <span
          className="text-xl tracking-tight cursor-pointer"
          style={{ fontWeight: 700, color: "#0F0F0F" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        ><span className="font-bold">CYL </span>Studio</span>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Kontak")}
            className="px-4 py-2 rounded-lg text-sm text-white transition-all hover:opacity-90"
            style={{ background: "#6C47FF" }}
          >
            Hubungi Kami
          </button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-sm text-gray-600 hover:text-gray-900 text-left"
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Kontak")}
            className="px-4 py-2 rounded-lg text-sm text-white w-fit"
            style={{ background: "#6C47FF" }}
          >
            Hubungi Kami
          </button>
        </div>
      )}
    </nav>
  );
}
