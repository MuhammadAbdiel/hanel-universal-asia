import { useTranslation, Trans } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-32 py-16"
      style={{
        backgroundImage: "url('/assets/1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#254CD5] via-[#254CD5] via-70% to-transparent opacity-100"></div>

      <div className="relative z-10 text-white" data-aos="fade-down">
        <h2 className="text-2xl sm:text-5xl font-bold mb-10">
          {t("aboutUs.title")}
        </h2>
        <p className="text-base sm:text-xl mb-4">
          <Trans
            i18nKey="aboutUs.paragraph1"
            components={[<span className="text-white font-bold" />]}
          />
        </p>
        <p className="text-base sm:text-xl mb-4">
          <Trans
            i18nKey="aboutUs.paragraph2"
            components={[<span className="font-bold" />]}
          />
        </p>
        <p className="text-base sm:text-xl">
          <Trans
            i18nKey="aboutUs.paragraph3"
            components={[<span className="font-bold" />]}
          />
        </p>
      </div>
    </section>
  );
}
