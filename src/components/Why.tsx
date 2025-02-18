export default function Why() {
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
          {/* Header Values */}
          <div className="mb-12" data-aos="fade-down">
            <h2 className="text-2xl sm:text-5xl font-bold text-black uppercase mb-4">
              MENGAPA HARUS
            </h2>
            <h2 className="text-2xl sm:text-5xl font-bold text-[#254CD5] uppercase mb-4">
              MEMILIH KAMI
            </h2>
            <p className="text-[#254CD5] text-sm sm:text-lg uppercase">
              HANEL UNIVERSAL ASIA
            </p>
          </div>

          {/* Daftar Values (H, A, N, E, L) */}
          <div className="space-y-10">
            {/* HONESTY */}
            <div className="flex items-center" data-aos="fade-down">
              <div className="w-14 h-14 flex-shrink-0 rounded-full border-2 bg-[#254CD5] text-white text-xl flex items-center justify-center font-bold mr-4"></div>
              <div>
                <h3 className="font-bold text-black text-xl uppercase">
                  Berorientasi Pada Klien
                </h3>
                <p className="text-gray-700 text-lg">
                  Setiap solusi yang kami tawarkan selalu disesuaikan dengan dan
                  tujuan bisnis kebutuhan Anda.
                </p>
              </div>
            </div>

            {/* AGILITY */}
            <div className="flex items-center" data-aos="fade-down">
              <div className="w-14 h-14 flex-shrink-0 rounded-full border-2 bg-[#254CD5] text-white text-xl flex items-center justify-center font-bold mr-4"></div>
              <div>
                <h3 className="font-bold text-black text-xl uppercase">
                  Inovatif
                </h3>
                <p className="text-gray-700 text-lg">
                  Kami selalu mengadopsi teknologi terkini untuk memberikan
                  hasil yang maksimal
                </p>
              </div>
            </div>

            {/* NOVELTY */}
            <div className="flex items-center" data-aos="fade-down">
              <div className="w-14 h-14 flex-shrink-0 rounded-full border-2 bg-[#254CD5] text-white text-xl flex items-center justify-center font-bold mr-4"></div>
              <div>
                <h3 className="font-bold text-black text-xl uppercase">
                  Tim Profesional
                </h3>
                <p className="text-gray-700 text-lg">
                  Dengan tenaga ahli yang berpengalaman, kami menjamin kualitas
                  terbaik. layanan
                </p>
              </div>
            </div>

            {/* EXCELLENCE */}
            <div className="flex items-center" data-aos="fade-down">
              <div className="w-14 h-14 flex-shrink-0 rounded-full border-2 bg-[#254CD5] text-white text-xl flex items-center justify-center font-bold mr-4"></div>
              <div>
                <h3 className="font-bold text-black text-xl uppercase">
                  Pelayanan Terintegrasi
                </h3>
                <p className="text-gray-700 text-lg">
                  Dari perencanaan hingga implementasi, kami memberikan dukungan
                  penuh dalam setiap
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
