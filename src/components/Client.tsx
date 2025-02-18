export default function Client() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center px-6"
      style={{
        backgroundImage: "url('/assets/background-2.png')", // Ganti dengan path gambar latar belakangmu
      }}
    >
      <div className="absolute inset-0 bg-[#254CD5] opacity-50"></div>

      {/* Container Putih */}
      <div className="relative bg-white max-w-5xl w-full py-12 px-6 sm:px-12 lg:px-16 rounded-md shadow-md">
        {/* Header Section */}
        <div
          className="bg-[#254CD5] text-white text-center py-4 rounded-md mb-8"
          data-aos="fade-down"
        >
          <h2 className="text-2xl sm:text-5xl font-bold uppercase mb-4">
            KLIEN KAMI
          </h2>
          <p className="text-sm sm:text-lg uppercase">HANEL UNIVERSAL ASIA</p>
        </div>

        {/* Logo Klien (Berjejer Horizontal) */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center"
          data-aos="fade-down"
        >
          <div className="flex justify-center">
            <img
              src="/assets/oe.png"
              alt="Object Expression"
              className="w-32"
            />
          </div>
          <div className="flex justify-center">
            <img src="/assets/ihp.jpg" alt="Partnership" className="w-32" />
          </div>
          <div className="flex justify-center">
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
