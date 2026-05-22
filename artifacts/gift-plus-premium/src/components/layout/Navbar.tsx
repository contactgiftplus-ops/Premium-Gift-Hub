import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Trang Chủ" },
    { href: "/gioi-thieu", label: "Giới Thiệu" },
    { href: "/danh-muc", label: "Danh Mục Sản Phẩm" },
    { href: "/lien-he", label: "Liên Hệ" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" data-testid="link-home-logo">
          <div className="w-10 h-10 border border-primary flex items-center justify-center rounded-sm group-hover:bg-primary/10 transition-colors">
            <span className="font-serif text-primary text-xl font-bold">G</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-primary text-xl font-bold leading-none tracking-wide">Gift Plus</span>
            <span className="text-primary/80 text-[10px] uppercase tracking-[0.2em] font-medium">Premium</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${
                location === link.href ? "text-primary" : "text-foreground/80"
              }`}
              data-testid={`link-nav-${link.href.replace('/', '') || 'home'}`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="rounded-none border-primary text-primary-foreground hover:bg-accent px-6">
            <Link href="/lien-he" data-testid="button-nav-quote">Yêu Cầu Báo Giá</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-serif border-b border-border/50 pb-2 ${
                    location === link.href ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="rounded-none mt-4 w-full">
                <Link href="/lien-he" onClick={() => setMobileMenuOpen(false)}>
                  Yêu Cầu Báo Giá
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
