import { useTranslation } from "react-i18next";

export default function Why() {
  const { t } = useTranslation();

  return (
    <section
      className="relative w-full min-h-screen bg-no-repeat bg-contain bg-right"
      style={{
        backgroundImage: "url('/assets/5.jpg')",
      }}
    >
      {/* Layer putih, menempel di kanan dengan lebar ~80% */}
      <div className="md:absolute top-0 left-0 md:w-[80%] h-full bg-white z-10 flex flex-col justify-center">
        <div className="px-6 sm:px-12 lg:px-16 py-16">
          {/* Header */}
          <div className="mb-12" data-aos="fade-down">
            <h2 className="text-2xl sm:text-5xl font-bold text-black uppercase mb-4">
              {t("whySection.header.line1")}
            </h2>
            <h2 className="text-2xl sm:text-5xl font-bold text-[#254CD5] uppercase mb-4">
              {t("whySection.header.line2")}
            </h2>
            <p className="text-[#254CD5] text-sm sm:text-lg uppercase">
              {t("whySection.header.subtitle")}
            </p>
          </div>

          {/* Daftar Alasan */}
          <div className="space-y-10">
            {/* Berorientasi Pada Klien */}
            <div className="flex items-center" data-aos="fade-down">
              <div className="w-14 h-14 flex-shrink-0 rounded-full border-2 bg-[#254CD5] text-white text-xl flex items-center justify-center font-bold mr-4">
                {/* Bisa ditambahkan icon atau inisial */}
              </div>
              <div>
                <h3 className="font-bold text-black text-xl uppercase">
                  {t("whySection.items.clientOriented.title")}
                </h3>
                <p className="text-gray-700 text-lg">
                  {t("whySection.items.clientOriented.description")}
                </p>
              </div>
            </div>

            {/* Inovatif */}
            <div className="flex items-center" data-aos="fade-down">
              <div className="w-14 h-14 flex-shrink-0 rounded-full border-2 bg-[#254CD5] text-white text-xl flex items-center justify-center font-bold mr-4">
                {/* Bisa ditambahkan icon atau inisial */}
              </div>
              <div>
                <h3 className="font-bold text-black text-xl uppercase">
                  {t("whySection.items.innovative.title")}
                </h3>
                <p className="text-gray-700 text-lg">
                  {t("whySection.items.innovative.description")}
                </p>
              </div>
            </div>

            {/* Tim Profesional */}
            <div className="flex items-center" data-aos="fade-down">
              <div className="w-14 h-14 flex-shrink-0 rounded-full border-2 bg-[#254CD5] text-white text-xl flex items-center justify-center font-bold mr-4">
                {/* Bisa ditambahkan icon atau inisial */}
              </div>
              <div>
                <h3 className="font-bold text-black text-xl uppercase">
                  {t("whySection.items.professionalTeam.title")}
                </h3>
                <p className="text-gray-700 text-lg">
                  {t("whySection.items.professionalTeam.description")}
                </p>
              </div>
            </div>

            {/* Pelayanan Terintegrasi */}
            <div className="flex items-center" data-aos="fade-down">
              <div className="w-14 h-14 flex-shrink-0 rounded-full border-2 bg-[#254CD5] text-white text-xl flex items-center justify-center font-bold mr-4">
                {/* Bisa ditambahkan icon atau inisial */}
              </div>
              <div>
                <h3 className="font-bold text-black text-xl uppercase">
                  {t("whySection.items.integratedService.title")}
                </h3>
                <p className="text-gray-700 text-lg">
                  {t("whySection.items.integratedService.description")}
                </p>
              </div>
            </div>
          </div>
          {/* End Daftar Alasan */}
        </div>
      </div>
    </section>
  );
}
