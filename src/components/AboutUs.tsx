export default function AboutUs() {
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
        <h2 className="text-2xl sm:text-5xl font-bold mb-10">Tentang Kami</h2>
        <p className="text-base sm:text-xl mb-4">
          <span className="text-white font-bold">Hanel Universal Asia</span>{" "}
          adalah perusahaan yang bergerak di bidang pembuatan website, aplikasi,
          dan layanan teknologi informasi (IT) secara terpadu.
        </p>
        <p className="text-base sm:text-xl mb-4">
          Sebagai mitra teknologi yang terpercaya,{" "}
          <span className="font-bold">Hanel Universal Asia</span> memahami bahwa
          dunia digital terus berkembang. Oleh karena itu, kami berkomitmen
          untuk selalu berinovasi dan memberikan layanan berkualitas tinggi
          dengan mengadopsi teknologi terkini.
        </p>
        <p className="text-base sm:text-xl">
          <span className="font-bold">Hanel Universal Asia</span> tidak hanya
          menjadi penyedia jasa, tetapi juga menjadi mitra strategis Anda dalam
          perjalanan transformasi digital. Kami siap mendukung Anda menghadapi
          tantangan era digital dengan solusi yang inovatif, aman, dan
          terpercaya.
        </p>
      </div>
    </section>
  );
}
