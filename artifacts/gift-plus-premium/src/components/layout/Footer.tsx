import React from "react";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiFacebook, SiZalo, SiInstagram } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group inline-flex" data-testid="link-footer-logo">
              <div className="w-12 h-12 border border-primary flex items-center justify-center rounded-sm">
                <span className="font-serif text-primary text-2xl font-bold">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-primary text-2xl font-bold leading-none tracking-wide">Gift Plus</span>
                <span className="text-primary/80 text-xs uppercase tracking-[0.2em] font-medium">Premium</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Nhà cung cấp giải pháp quà tặng cao cấp hàng đầu Việt Nam. Tôn vinh đẳng cấp, gắn kết thâm giao qua từng kiệt tác quà tặng.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all" data-testid="link-social-fb">
                <SiFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all" data-testid="link-social-zalo">
                <SiZalo size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all" data-testid="link-social-ig">
                <SiInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-primary mb-6">Liên Kết Nhanh</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Trang Chủ</Link></li>
              <li><Link href="/gioi-thieu" className="text-muted-foreground hover:text-primary transition-colors">Giới Thiệu</Link></li>
              <li><Link href="/danh-muc" className="text-muted-foreground hover:text-primary transition-colors">Danh Mục Quà Tặng</Link></li>
              <li><Link href="/lien-he" className="text-muted-foreground hover:text-primary transition-colors">Liên Hệ & Báo Giá</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Chính Sách Bảo Hành</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif text-lg text-primary mb-6">Danh Mục</h3>
            <ul className="space-y-4">
              <li><Link href="/danh-muc" className="text-muted-foreground hover:text-primary transition-colors">Quà Tặng Doanh Nghiệp</Link></li>
              <li><Link href="/danh-muc" className="text-muted-foreground hover:text-primary transition-colors">Quà Tặng Cá Nhân Hóa</Link></li>
              <li><Link href="/danh-muc" className="text-muted-foreground hover:text-primary transition-colors">Quà Sự Kiện & Hội Nghị</Link></li>
              <li><Link href="/danh-muc" className="text-muted-foreground hover:text-primary transition-colors">Quà Tết Cao Cấp</Link></li>
              <li><Link href="/danh-muc" className="text-muted-foreground hover:text-primary transition-colors">Quà Bespoke Độc Bản</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg text-primary mb-6">Liên Hệ</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-muted-foreground">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span className="text-sm">Tầng 15, Vincom Center, 72 Lê Thánh Tôn, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Phone className="text-primary shrink-0 mt-1" size={18} />
                <span className="text-sm">Hotline: 0909 123 456<br />CSKH: 0909 654 321</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Mail className="text-primary shrink-0 mt-1" size={18} />
                <span className="text-sm">hello@giftpluspremium.vn</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Clock className="text-primary shrink-0 mt-1" size={18} />
                <span className="text-sm">T2 - T6: 08:30 - 18:00<br />Thứ 7: 08:30 - 12:00</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Gift Plus Premium. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Điều khoản dịch vụ</a>
            <a href="#" className="hover:text-primary transition-colors">Chính sách bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
