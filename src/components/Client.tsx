import { useTranslation } from "react-i18next";

export default function Client() {
  const { t } = useTranslation();

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center px-6"
      style={{
        backgroundImage: "url('/assets/background-2.png')", // Ganti dengan path gambar latar belakangmu
      }}
    >
      <div className="absolute inset-0 bg-white opacity-50"></div>

      {/* Container Putih */}
      <div className="relative bg-[#254CD5] max-w-5xl w-full py-12 px-6 sm:px-12 lg:px-16 rounded-md shadow-md">
        {/* Header Section */}
        <div
          className="bg-white text-[#254CD5] text-center py-4 rounded-md mb-8"
          data-aos="fade-down"
        >
          <h2 className="text-2xl sm:text-5xl font-bold uppercase mb-4">
            {t("clientSection.header.title")}
          </h2>
          <p className="text-sm sm:text-lg uppercase">
            {t("clientSection.header.subtitle")}
          </p>
        </div>

        {/* Logo Klien (Berjejer Horizontal) */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center"
          data-aos="fade-down"
        >
          <div className="flex justify-center bg-[#1c39a4] h-32 rounded-md">
            <img src="/assets/oe.png" alt="Object Expression" className="" />
          </div>
          <div className="flex justify-center bg-white h-32 rounded-md">
            <img src="/assets/ihp.jpg" alt="Partnership" className="w-32" />
          </div>
          <div className="flex justify-center bg-white h-32 rounded-md">
            <img
              src="/assets/pbs.svg"
              alt="Prima Baja Semesta"
              className="w-32"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
