export default function Values() {
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
              VALUES KAMI
            </h2>
            <p className="text-white text-sm sm:text-lg uppercase">
              HANEL UNIVERSAL ASIA
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
                  Honesty
                </h3>
                <p className="text-gray-700 text-lg">
                  Kami berkomitmen untuk selalu memberikan informasi yang
                  transparan dan solusi teknologi yang dapat dipercaya.
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
                  Agility
                </h3>
                <p className="text-gray-700 text-lg">
                  Kami bergerak cepat untuk beradaptasi dengan kebutuhan klien
                  dan tren teknologi terbaru.
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
                  Novelty
                </h3>
                <p className="text-gray-700 text-lg">
                  Kami mengedepankan pemikiran kreatif untuk menciptakan solusi
                  digital yang segar, unik, dan berdampak positif.
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
                  Excellence
                </h3>
                <p className="text-gray-700 text-lg">
                  Kami berkomitmen untuk memberikan layanan dengan kualitas
                  terbaik sesuai ekspektasi klien.
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
                  Loyalty
                </h3>
                <p className="text-gray-700 text-lg">
                  Kami membangun hubungan jangka panjang dengan klien dan mitra
                  demi dedikasi untuk mencapai tujuan melalui teknologi.
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
