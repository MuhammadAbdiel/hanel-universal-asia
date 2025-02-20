import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      {/* Bagian Atas: Background Image + Overlay + Text */}
      <div
        className="relative w-full h-[300px] sm:h-[350px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/4.jpeg')", // Ganti dengan gambar Anda
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#254CD5] via-[#254CD5] via-20% to-transparent bg-opacity-50 flex items-center justify-center"
          data-aos="fade-down"
        >
          <div className="text-center text-white">
            <h2 className="text-xl sm:text-5xl font-bold uppercase mb-4">
              {t("services.header.title")}
            </h2>
            <p className="text-sm sm:text-lg uppercase">
              {t("services.header.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Bagian Bawah: Background Putih + Card Layanan */}
      <div className="bg-white py-16 px-6 sm:px-12 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Pembuatan Website */}
          <div
            className="bg-[#254CD5] text-white p-6 rounded-md shadow-lg text-center"
            data-aos="fade-down"
          >
            <div className="flex justify-center mb-4">
              {/* Icon atau gambar dapat ditambahkan di sini */}
            </div>
            <h3 className="text-2xl font-bold uppercase mb-10">
              {t("services.cards.website.title")}
            </h3>
            <ul className="text-md space-y-2">
              <li>{t("services.cards.website.items.0")}</li>
              <li>{t("services.cards.website.items.1")}</li>
              <li>{t("services.cards.website.items.2")}</li>
              <li>{t("services.cards.website.items.3")}</li>
              <li>{t("services.cards.website.items.4")}</li>
            </ul>
          </div>

          {/* Card 2: Pengembangan Aplikasi */}
          <div
            className="bg-[#254CD5] text-white p-6 rounded-md shadow-lg text-center"
            data-aos="fade-down"
          >
            <div className="flex justify-center mb-4">
              {/* Icon atau gambar dapat ditambahkan di sini */}
            </div>
            <h3 className="text-2xl font-bold uppercase mb-10">
              {t("services.cards.app.title")}
            </h3>
            <ul className="text-md space-y-2">
              <li>{t("services.cards.app.items.0")}</li>
              <li>{t("services.cards.app.items.1")}</li>
              <li>{t("services.cards.app.items.2")}</li>
              <li>{t("services.cards.app.items.3")}</li>
            </ul>
          </div>

          {/* Card 3: Dukungan IT */}
          <div
            className="bg-[#254CD5] text-white p-6 rounded-md shadow-lg text-center"
            data-aos="fade-down"
          >
            <div className="flex justify-center mb-4">
              {/* Icon atau gambar dapat ditambahkan di sini */}
            </div>
            <h3 className="text-2xl font-bold uppercase mb-10">
              {t("services.cards.itSupport.title")}
            </h3>
            <ul className="text-md space-y-2">
              <li>{t("services.cards.itSupport.items.0")}</li>
              <li>{t("services.cards.itSupport.items.1")}</li>
              <li>{t("services.cards.itSupport.items.2")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
