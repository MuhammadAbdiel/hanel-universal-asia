import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About Us",
        vision: "Vision & Mission",
        values: "Values",
        services: "Services",
        why: "Why",
        clients: "Clients",
      },
      hero: {
        title: "Hanel Universal Asia",
        subtitle: "IT Services for Website and Application Development",
      },
      aboutUs: {
        title: "About Us",
        paragraph1:
          "<0>Hanel Universal Asia</0> is a company engaged in integrated website, application development, and comprehensive IT services.",
        paragraph2:
          "As a trusted technology partner, <0>Hanel Universal Asia</0> understands that the digital world is continuously evolving. Therefore, we are committed to continually innovate and provide high-quality services by adopting the latest technologies.",
        paragraph3:
          "<0>Hanel Universal Asia</0> is not only a service provider, but also your strategic partner in digital transformation. We are ready to support you in facing the challenges of the digital era with innovative, secure, and reliable solutions.",
      },
      vision: {
        title: "VISION",
        description:
          "To be the leading technology company providing innovative and reliable digital solutions, and contributing to accelerate digital transformation for various business sectors in Indonesia and around the world.",
        mission: {
          title: "MISSION",
          item1:
            "Develop innovative, efficient websites, applications, and IT services tailored to clients' needs.",
          item2:
            "Provide professional, high-quality services with a focus on client success and business growth.",
          item3:
            "Help businesses in various sectors leverage digital technology to enhance competitiveness in the modern era.",
          item4:
            "Continuously adopt the latest technologies to create solutions that are relevant to current trends.",
        },
      },
      values: {
        header: {
          title: "Our Values",
          subtitle: "HANEL UNIVERSAL ASIA",
        },
        items: {
          honesty: {
            title: "Honesty",
            description:
              "We are committed to providing transparent information and reliable technology solutions.",
          },
          agility: {
            title: "Agility",
            description:
              "We move quickly to adapt to clients' needs and the latest technology trends.",
          },
          novelty: {
            title: "Novelty",
            description:
              "We prioritize creative thinking to create fresh, unique, and impactful digital solutions.",
          },
          excellence: {
            title: "Excellence",
            description:
              "We are committed to delivering services of the highest quality that meet clients' expectations.",
          },
          loyalty: {
            title: "Loyalty",
            description:
              "We build long-term relationships with clients and partners, dedicated to achieving goals through technology.",
          },
        },
      },
      services: {
        header: {
          title: "Our Services",
          subtitle: "HANEL UNIVERSAL ASIA",
        },
        cards: {
          website: {
            title: "Website Development",
            items: [
              "Corporate Website",
              "E-Commerce",
              "Portfolio Website",
              "Landing Page",
              "Content Management System (CMS)",
            ],
          },
          app: {
            title: "Application Development",
            items: [
              "Mobile Applications (Android & iOS)",
              "Desktop Applications",
              "Web-based Applications",
              "API and System Integration",
            ],
          },
          itSupport: {
            title: "IT Support",
            items: [
              "IT System Maintenance",
              "IT Consultation",
              "Digital Marketing",
            ],
          },
        },
      },
      whySection: {
        header: {
          line1: "WHY SHOULD",
          line2: "CHOOSE US",
          subtitle: "HANEL UNIVERSAL ASIA",
        },
        items: {
          clientOriented: {
            title: "Client Oriented",
            description:
              "Every solution we offer is tailored to your business goals.",
          },
          innovative: {
            title: "Innovative",
            description:
              "We always adopt the latest technology to deliver optimal results.",
          },
          professionalTeam: {
            title: "Professional Team",
            description:
              "With experienced experts, we ensure the highest quality service.",
          },
          integratedService: {
            title: "Integrated Service",
            description:
              "From planning to implementation, we provide comprehensive support.",
          },
        },
      },
      clientSection: {
        header: {
          title: "OUR CLIENTS",
          subtitle: "HANEL UNIVERSAL ASIA",
        },
      },
      whatsappButton: {
        contact: "Contact Us",
      },
    },
  },
  id: {
    translation: {
      navbar: {
        home: "Beranda",
        about: "Tentang Kami",
        vision: "Visi & Misi",
        values: "Layanan",
        services: "Layanan",
        why: "Mengapa",
        clients: "Klien",
      },
      hero: {
        title: "Hanel Universal Asia",
        subtitle: "Jasa IT Pembuatan Website dan Aplikasi",
      },
      aboutUs: {
        title: "Tentang Kami",
        paragraph1:
          "<0>Hanel Universal Asia</0> adalah perusahaan yang bergerak di bidang pembuatan website, aplikasi, dan layanan teknologi informasi (IT) secara terpadu.",
        paragraph2:
          "Sebagai mitra teknologi yang terpercaya, <0>Hanel Universal Asia</0> memahami bahwa dunia digital terus berkembang. Oleh karena itu, kami berkomitmen untuk selalu berinovasi dan memberikan layanan berkualitas tinggi dengan mengadopsi teknologi terkini.",
        paragraph3:
          "<0>Hanel Universal Asia</0> tidak hanya menjadi penyedia jasa, tetapi juga menjadi mitra strategis Anda dalam perjalanan transformasi digital. Kami siap mendukung Anda menghadapi tantangan era digital dengan solusi yang inovatif, aman, dan terpercaya.",
      },
      vision: {
        title: "VISI",
        description:
          "Menjadi perusahaan teknologi terdepan yang memberikan solusi digital inovatif dan terpercaya, serta berkontribusi dalam mempercepat transformasi digital untuk berbagai sektor bisnis di Indonesia dan dunia.",
        mission: {
          title: "MISI",
          item1:
            "Mengembangkan website, aplikasi, dan layanan IT yang inovatif, efisien, dan sesuai dengan kebutuhan klien.",
          item2:
            "Memberikan layanan yang profesional dan berkualitas tinggi, dengan fokus pada keberhasilan dan pertumbuhan bisnis klien.",
          item3:
            "Membantu bisnis dari berbagai sektor untuk memanfaatkan teknologi digital dalam meningkatkan daya saing di era modern.",
          item4:
            "Selalu mengadopsi teknologi terkini untuk menciptakan solusi yang relevan dengan perkembangan zaman.",
        },
      },
      values: {
        header: {
          title: "VALUES KAMI",
          subtitle: "HANEL UNIVERSAL ASIA",
        },
        items: {
          honesty: {
            title: "Honesty",
            description:
              "Kami berkomitmen untuk selalu memberikan informasi yang transparan dan solusi teknologi yang dapat dipercaya.",
          },
          agility: {
            title: "Agility",
            description:
              "Kami bergerak cepat untuk beradaptasi dengan kebutuhan klien dan tren teknologi terbaru.",
          },
          novelty: {
            title: "Novelty",
            description:
              "Kami mengedepankan pemikiran kreatif untuk menciptakan solusi digital yang segar, unik, dan berdampak positif.",
          },
          excellence: {
            title: "Excellence",
            description:
              "Kami berkomitmen untuk memberikan layanan dengan kualitas terbaik sesuai ekspektasi klien.",
          },
          loyalty: {
            title: "Loyalty",
            description:
              "Kami membangun hubungan jangka panjang dengan klien dan mitra demi dedikasi untuk mencapai tujuan melalui teknologi.",
          },
        },
      },
      services: {
        header: {
          title: "LAYANAN KAMI",
          subtitle: "HANEL UNIVERSAL ASIA",
        },
        cards: {
          website: {
            title: "Pembuatan Website",
            items: [
              "Website Perusahaan",
              "E-Commerce",
              "Website Portofolio",
              "Landing Page",
              "Sistem Manajemen Konten (CMS)",
            ],
          },
          app: {
            title: "Pengembangan Aplikasi",
            items: [
              "Aplikasi Mobile (Android & iOS)",
              "Aplikasi Desktop",
              "Aplikasi Berbasis Web",
              "Integrasi API dan Sistem",
            ],
          },
          itSupport: {
            title: "Dukungan IT",
            items: [
              "Pemeliharaan Sistem IT",
              "Konsultasi IT",
              "Digital Marketing",
            ],
          },
        },
      },
      whySection: {
        header: {
          line1: "MENGAPA HARUS",
          line2: "MEMILIH KAMI",
          subtitle: "HANEL UNIVERSAL ASIA",
        },
        items: {
          clientOriented: {
            title: "Berorientasi Pada Klien",
            description:
              "Setiap solusi yang kami tawarkan selalu disesuaikan dengan tujuan bisnis Anda.",
          },
          innovative: {
            title: "Inovatif",
            description:
              "Kami selalu mengadopsi teknologi terkini untuk memberikan hasil yang maksimal.",
          },
          professionalTeam: {
            title: "Tim Profesional",
            description:
              "Dengan tenaga ahli yang berpengalaman, kami menjamin kualitas layanan terbaik.",
          },
          integratedService: {
            title: "Pelayanan Terintegrasi",
            description:
              "Dari perencanaan hingga implementasi, kami memberikan dukungan penuh dalam setiap tahap.",
          },
        },
      },
      clientSection: {
        header: {
          title: "KLIEN KAMI",
          subtitle: "HANEL UNIVERSAL ASIA",
        },
      },
      whatsappButton: {
        contact: "Hubungi Kami",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "id", // Bahasa default
  fallbackLng: "id",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
