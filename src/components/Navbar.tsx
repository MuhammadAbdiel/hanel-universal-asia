import { useState } from "react";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <nav className="bg-white backdrop-blur-md fixed top-0 left-0 w-full shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto px-6 lg:px-12 py-2">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/assets/logo.png" alt="logo" width={100} />
          </div>

          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection("hero")}>
              {t("navbar.home")}
            </button>
            <button onClick={() => scrollToSection("about")}>
              {t("navbar.about")}
            </button>
            <button onClick={() => scrollToSection("visi")}>
              {t("navbar.vision")}
            </button>
            <button onClick={() => scrollToSection("values")}>
              {t("navbar.values")}
            </button>
            <button onClick={() => scrollToSection("services")}>
              {t("navbar.services")}
            </button>
            <button onClick={() => scrollToSection("why")}>
              {t("navbar.why")}
            </button>
            <button onClick={() => scrollToSection("client")}>
              {t("navbar.clients")}
            </button>
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 hover:text-gray-300 focus:outline-none"
              >
                <Globe size={20} />
                <span className="uppercase">{i18n.language}</span>
                <ChevronDown size={16} />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded-md shadow-lg z-50">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage("id")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Indonesian
                  </button>
                </div>
              )}
            </div>
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
            {t("navbar.home")}
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block py-3 px-6"
          >
            {t("navbar.about")}
          </button>
          <button
            onClick={() => scrollToSection("visi")}
            className="block py-3 px-6"
          >
            {t("navbar.vision")}
          </button>
          <button
            onClick={() => scrollToSection("values")}
            className="block py-3 px-6"
          >
            {t("navbar.values")}
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="block py-3 px-6"
          >
            {t("navbar.services")}
          </button>
          <button
            onClick={() => scrollToSection("why")}
            className="block py-3 px-6"
          >
            {t("navbar.why")}
          </button>
          <button
            onClick={() => scrollToSection("client")}
            className="block py-3 px-6"
          >
            {t("navbar.clients")}
          </button>

          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center space-x-1 w-full px-6 py-3 hover:bg-gray-700 focus:outline-none"
            >
              <Globe size={20} />
              <span className="uppercase">{i18n.language}</span>
              <ChevronDown size={16} />
            </button>
            {isLangOpen && (
              <div className="w-full bg-white text-black rounded-md shadow-lg z-50">
                <button
                  onClick={() => changeLanguage("en")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("id")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  Indonesian
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
