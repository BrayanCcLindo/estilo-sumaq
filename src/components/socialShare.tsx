import { Facebook, Instagram } from "lucide-react";

function SocialShare() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-4 w-4" />,
      url: "https://www.facebook.com/profile.php?id=61571306134739",
      hoverColor: "hover:text-blue-600",
      hoverScale: "hover:scale-125",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-4 w-4" />,
      url: "https://www.instagram.com/estilosumaq/",
      hoverColor: "hover:text-pink-600",
      hoverScale: "hover:scale-125",
    },
    {
      name: "TikTok",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      url: "https://www.tiktok.com/@estilo_sumaq?_t=ZM-8tz9XWlArrj&_r=1",
      hoverColor: "hover:text-black",
      hoverScale: "hover:scale-125",
    },
  ];
  return (
    <div className="flex items-center justify-center space-x-3">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-600 transition-all duration-300 ease-in-out ${social.hoverColor} ${social.hoverScale} hover:rotate-6`}
          aria-label={`Síguenos en ${social.name}`}
        >
          <div className="rounded-full p-2 hover:bg-gray-100">
            {social.icon}
          </div>
        </a>
      ))}
    </div>
  );
}

export default SocialShare;
