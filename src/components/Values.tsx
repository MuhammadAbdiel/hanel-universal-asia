import { useTranslation } from "react-i18next";

export default function Values() {
  const { t } = useTranslation();

  return (
    <section
      className="relative w-full min-h-screen bg-no-repeat bg-contain bg-left"
      style={{
        backgroundImage: "url('/assets/3.jpg')", // Ganti dengan path gambar Anda
      }}
    >
      {/* Layer putih, menempel di kanan dengan lebar ~80% */}
      <div className="md:absolute top-0 right-0 md:w-[80%] h-full bg-white z-10 flex flex-col justify-center">
        <div className="px-6 sm:px-12 lg:px-16 py-16">
          {/* Header Values */}
          <div
            className="bg-[#254CD5] px-6 py-4 rounded-md shadow-md mb-12"
            data-aos="fade-down"
          >
            <h2 className="text-2xl sm:text-5xl font-bold text-white uppercase mb-4">
              {t("values.header.title")}
            </h2>
            <p className="text-white text-sm sm:text-lg uppercase">
              {t("values.header.subtitle")}
            </p>
          </div>

          {/* Daftar Values (H, A, N, E, L) */}
          <div className="space-y-10" data-aos="fade-down">
            {/* HONESTY */}
            <div className="flex items-center">
              <div className="w-14 h-14 flex-shrink-0 rounded-full border-2 bg-[#254CD5] text-white text-xl flex items-center justify-center font-bold mr-4">
                H
              </div>
              <div>
                <h3 className="font-bold text-[#254CD5] text-xl uppercase">
                  {t("values.items.honesty.title")}
                </h3>
                <p className="text-gray-700 text-lg">
                  {t("values.items.honesty.description")}
                </p>
              </div>
            </div>

            {/* AGILITY */}
            <div className="flex items-center">
              <div className="w-14 h-14 flex-shrink-0 rounded-full border-2 bg-[#254CD5] text-white text-xl flex items-center justify-center font-bold mr-4">
                A
              </div>
              <div>
                <h3 className="font-bold text-[#254CD5] text-xl uppercase">
                  {t("values.items.agility.title")}
                </h3>
                <p className="text-gray-700 text-lg">
                  {t("values.items.agility.description")}
                </p>
              </div>
            </div>

            {/* NOVELTY */}
            <div className="flex items-center">
              <div className="w-14 h-14 flex-shrink-0 rounded-full border-2 bg-[#254CD5] text-white text-xl flex items-center justify-center font-bold mr-4">
                N
              </div>
              <div>
                <h3 className="font-bold text-[#254CD5] text-xl uppercase">
                  {t("values.items.novelty.title")}
                </h3>
                <p className="text-gray-700 text-lg">
                  {t("values.items.novelty.description")}
                </p>
              </div>
            </div>

            {/* EXCELLENCE */}
            <div className="flex items-center">
              <div className="w-14 h-14 flex-shrink-0 rounded-full border-2 bg-[#254CD5] text-white text-xl flex items-center justify-center font-bold mr-4">
                E
              </div>
              <div>
                <h3 className="font-bold text-[#254CD5] text-xl uppercase">
                  {t("values.items.excellence.title")}
                </h3>
                <p className="text-gray-700 text-lg">
                  {t("values.items.excellence.description")}
                </p>
              </div>
            </div>

            {/* LOYALTY */}
            <div className="flex items-center">
              <div className="w-14 h-14 flex-shrink-0 rounded-full border-2 bg-[#254CD5] text-white text-xl flex items-center justify-center font-bold mr-4">
                L
              </div>
              <div>
                <h3 className="font-bold text-[#254CD5] text-xl uppercase">
                  {t("values.items.loyalty.title")}
                </h3>
                <p className="text-gray-700 text-lg">
                  {t("values.items.loyalty.description")}
                </p>
              </div>
            </div>
          </div>
          {/* End Daftar Values */}
        </div>
      </div>
    </section>
  );
}
