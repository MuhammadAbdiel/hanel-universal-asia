export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/background.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[#254bd5] opacity-50"></div>

      <div
        data-aos="fade-down"
        className="relative z-10 flex flex-col justify-center items-start h-full px-8 sm:px-16 lg:px-32 text-white"
      >
        <h1 className="text-4xl sm:text-7xl font-bold mt-2">
          Hanel Universal Asia
        </h1>
        <p className="mt-4 text-lg sm:text-2xl max-w-2xl">
          Jasa IT Pembuatan Website dan Aplikasi
        </p>
      </div>
    </section>
  );
}
