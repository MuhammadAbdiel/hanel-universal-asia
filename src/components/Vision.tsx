import { useTranslation } from "react-i18next";

export default function Vision() {
  const { t } = useTranslation();

  return (
    <section
      className="relative w-full min-h-screen bg-no-repeat bg-contain bg-left"
      style={{
        backgroundImage: "url('/assets/2.jpg')",
      }}
    >
      <div className="md:absolute top-0 right-0 md:w-[80%] h-full bg-white z-10 flex flex-col justify-center">
        <div className="px-6 sm:px-12 lg:px-16 py-16">
          {/* Visi */}
          <div className="mb-10" data-aos="fade-down">
            <h2 className="text-5xl font-bold text-[#254CD5] uppercase mb-10">
              {t("vision.title")}
            </h2>
            <p className="text-black leading-relaxed text-xl">
              {t("vision.description")}
            </p>
          </div>

          {/* Misi */}
          <div
            className="bg-[#254CD5] rounded-md shadow-md mx-auto p-6 sm:p-8"
            data-aos="fade-down"
          >
            <h2 className="text-5xl font-bold text-white uppercase mb-10">
              {t("vision.mission.title")}
            </h2>
            <ul className="list-decimal list-inside space-y-3 text-white leading-relaxed text-xl">
              <li>{t("vision.mission.item1")}</li>
              <li>{t("vision.mission.item2")}</li>
              <li>{t("vision.mission.item3")}</li>
              <li>{t("vision.mission.item4")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
