import React from "react";
import { Phone } from "lucide-react";
import { SiZalo, SiMessenger } from "react-icons/si";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Zalo */}
      <a
        href="https://zalo.me"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#00B14F] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative group"
        data-testid="float-zalo"
      >
        <span className="absolute inset-0 rounded-full bg-[#00B14F] animate-ping opacity-75"></span>
        <SiZalo size={30} className="relative z-10" />
        <span className="absolute right-full mr-4 bg-card text-foreground px-3 py-1.5 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border shadow-md">
          Chat Zalo
        </span>
      </a>

      {/* Messenger */}
      <a
        href="https://m.me"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#0084FF] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative group"
        data-testid="float-messenger"
      >
        <SiMessenger size={28} className="relative z-10" />
        <span className="absolute right-full mr-4 bg-card text-foreground px-3 py-1.5 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border shadow-md">
          Chat Messenger
        </span>
      </a>

      {/* Phone */}
      <a
        href="tel:+84909123456"
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative group"
        data-testid="float-phone"
      >
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
        <Phone size={26} className="relative z-10 fill-current" />
        <span className="absolute right-full mr-4 bg-card text-foreground px-3 py-1.5 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border shadow-md">
          Hotline: 0909 123 456
        </span>
      </a>
    </div>
  );
}
