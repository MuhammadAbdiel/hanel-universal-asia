export default function Vision() {
  return (
    <section
      className="relative w-full min-h-screen bg-no-repeat bg-contain bg-left"
      style={{
        backgroundImage: "url('/assets/2.jpg')",
      }}
    >
      <div className="md:absolute top-0 right-0 md:w-[80%] h-full bg-white z-10 flex flex-col justify-center">
        <div className="px-6 sm:px-12 lg:px-16 py-16">
          {/* VISI */}
          <div className="mb-10" data-aos="fade-down">
            <h2 className="text-5xl font-bold text-[#254CD5] uppercase mb-10">
              VISI
            </h2>
            <p className="text-black leading-relaxed text-xl">
              Menjadi perusahaan teknologi terdepan yang memberikan solusi
              digital inovatif dan terpercaya, serta berkontribusi dalam
              mempercepat transformasi digital untuk berbagai sektor bisnis di
              Indonesia dan dunia.
            </p>
          </div>

          <div
            className="bg-[#254CD5] rounded-md shadow-md mx-auto p-6 sm:p-8"
            data-aos="fade-down"
          >
            <h2 className="text-5xl font-bold text-white uppercase mb-10">
              MISI
            </h2>
            <ul className="list-decimal list-inside space-y-3 text-white leading-relaxed text-xl">
              <li>
                Mengembangkan website, aplikasi, dan layanan IT yang inovatif,
                efisien, dan sesuai dengan kebutuhan klien.
              </li>
              <li>
                Memberikan layanan yang profesional dan berkualitas tinggi,
                dengan fokus pada keberhasilan dan pertumbuhan bisnis klien.
              </li>
              <li>
                Membantu bisnis dari berbagai sektor untuk memanfaatkan
                teknologi digital dalam meningkatkan daya saing di era modern.
              </li>
              <li>
                Selalu mengadopsi teknologi terkini untuk menciptakan solusi
                yang relevan dengan perkembangan zaman.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
