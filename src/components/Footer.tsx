import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#254CD5] text-white py-12 px-6 sm:px-12 lg:px-32">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
        {/* Alamat */}
        <div className="flex items-start gap-3 max-w-lg">
          <MapPin className="flex-shrink-0" size={20} />
          <p className="text-sm sm:text-base leading-relaxed">
            Ruko Canadian Broadway, Jl. Canadian Broadway Blok CBB No.19,
            Desa/Kelurahan Limusnunggal, Kec. Cileungsi, Kab. Bogor, Provinsi
            Jawa Barat, 16820
          </p>
        </div>

        {/* Garis Pemisah */}
        <div className="hidden sm:block w-[1px] bg-white h-16"></div>

        {/* Kontak */}
        <div className="flex flex-col gap-3 max-md:w-full">
          <div className="flex items-center gap-3">
            <Phone size={20} />
            <a
              href="https://wa.me/+6289515499962"
              target="_blank"
              className="text-sm sm:text-base"
            >
              +62 895 1549 9962
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={20} />
            <a
              href="mailto:sales@haneluniversalasia.com"
              target="_blank"
              className="text-sm sm:text-base"
            >
              sales@haneluniversalasia.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
