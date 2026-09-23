import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function FloatingSocialIcons() {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/maid360employment",
      label: "Facebook",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/maid360_hk",
      label: "Instagram",
      color: "bg-pink-600 hover:bg-pink-700",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/85293914435?text=%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%E5%A4%96%E5%82%AD%E6%9C%8D%E5%8B%99",
      label: "WhatsApp",
      color: "bg-green-600 hover:bg-green-700",
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${social.color} text-white`}
            title={social.label}
          >
            <Icon className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
}
