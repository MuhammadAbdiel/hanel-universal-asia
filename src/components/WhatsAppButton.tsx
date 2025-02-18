import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "+6289515499962";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center space-x-2 bg-transparent text-white px-3 py-2 rounded-full shadow-lg hover:scale-105 transition-transform z-50"
    >
      {/* Label "Contact Us" */}
      <span className="bg-white text-gray-700 text-sm px-3 py-1 rounded-full shadow-md">
        Contact Us
      </span>

      {/* Ikon WhatsApp */}
      <div className="w-12 h-12 flex items-center justify-center bg-green-600 rounded-full">
        <MessageCircle size={24} />
      </div>
    </a>
  );
}
