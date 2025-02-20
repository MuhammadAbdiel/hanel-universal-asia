import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white backdrop-blur-md fixed top-0 left-0 w-full shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto px-6 lg:px-12 py-2">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/assets/logo.png" alt="logo" width={100} />
          </div>

          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection("hero")}>Beranda</button>
            <button onClick={() => scrollToSection("about")}>
              Tentang Kami
            </button>
            <button onClick={() => scrollToSection("visi")}>Visi & Misi</button>
            <button onClick={() => scrollToSection("values")}>Values</button>
            <button onClick={() => scrollToSection("services")}>Layanan</button>
            <button onClick={() => scrollToSection("why")}>Mengapa</button>
            <button onClick={() => scrollToSection("client")}>Klien</button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden backdrop-blur-md absolute bg-white top-16 left-0 w-full shadow-md transition-all duration-300">
          <button
            onClick={() => scrollToSection("hero")}
            className="block py-3 px-6"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block py-3 px-6"
          >
            Tentang Kami
          </button>
          <button
            onClick={() => scrollToSection("visi")}
            className="block py-3 px-6"
          >
            Visi & Misi
          </button>
          <button
            onClick={() => scrollToSection("values")}
            className="block py-3 px-6"
          >
            Values
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="block py-3 px-6"
          >
            Layanan
          </button>
          <button
            onClick={() => scrollToSection("why")}
            className="block py-3 px-6"
          >
            Mengapa
          </button>
          <button
            onClick={() => scrollToSection("client")}
            className="block py-3 px-6"
          >
            Klien
          </button>
        </div>
      )}
    </nav>
  );
}
