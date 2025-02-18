export default function Services() {
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
              LAYANAN KAMI
            </h2>
            <p className="text-sm sm:text-lg uppercase">HANEL UNIVERSAL ASIA</p>
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
              {/* <img
                src="/assets/icon-web.svg"
                alt="Website Icon"
                className="w-12 h-12"
              /> */}
            </div>
            <h3 className="text-2xl font-bold uppercase mb-10">
              Pembuatan Website
            </h3>
            <ul className="text-md space-y-2">
              <li>Website Perusahaan</li>
              <li>E-Commerce</li>
              <li>Website Portofolio</li>
              <li>Landing Page</li>
              <li>Sistem Manajemen Konten (CMS)</li>
            </ul>
          </div>

          {/* Card 2: Pengembangan Aplikasi */}
          <div
            className="bg-[#254CD5] text-white p-6 rounded-md shadow-lg text-center"
            data-aos="fade-down"
          >
            <div className="flex justify-center mb-4">
              {/* <img
                src="/assets/icon-app.svg"
                alt="App Icon"
                className="w-12 h-12"
              /> */}
            </div>
            <h3 className="text-2xl font-bold uppercase mb-10">
              Pengembangan Aplikasi
            </h3>
            <ul className="text-md space-y-2">
              <li>Aplikasi Mobile (Android & iOS)</li>
              <li>Aplikasi Desktop</li>
              <li>Aplikasi Berbasis Web</li>
              <li>Integrasi API dan Sistem</li>
            </ul>
          </div>

          {/* Card 3: Dukungan IT */}
          <div
            className="bg-[#254CD5] text-white p-6 rounded-md shadow-lg text-center"
            data-aos="fade-down"
          >
            <div className="flex justify-center mb-4">
              {/* <img
                src="/assets/icon-it.svg"
                alt="IT Support Icon"
                className="w-12 h-12"
              /> */}
            </div>
            <h3 className="text-2xl font-bold uppercase mb-10">Dukungan IT</h3>
            <ul className="text-md space-y-2">
              <li>Pemeliharaan Sistem IT</li>
              <li>Konsultasi IT</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
