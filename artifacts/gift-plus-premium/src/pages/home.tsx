import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Gem, Briefcase, Sparkles } from "lucide-react";

export default function Home() {
  const collections = [
    {
      title: "Hộp Quà Sự Kiện",
      desc: "Đẳng cấp và chuyên nghiệp",
      img: "/images/corp-gift-2.png",
      link: "/danh-muc"
    },
    {
      title: "Quà Tặng Đối Tác",
      desc: "Gắn kết thâm giao bền chặt",
      img: "/images/corp-gift-3.png",
      link: "/danh-muc"
    },
    {
      title: "Set Quà Cao Cấp",
      desc: "Tuyển tập thượng hạng",
      img: "/images/corp-gift-1.png",
      link: "/danh-muc"
    },
    {
      title: "Bút Ký Khắc Tên",
      desc: "Dấu ấn cá nhân độc bản",
      img: "/images/personal-gift-1.png",
      link: "/danh-muc"
    },
    {
      title: "Phụ Kiện Da",
      desc: "Chế tác thủ công tinh xảo",
      img: "/images/personal-gift-2.png",
      link: "/danh-muc"
    },
    {
      title: "Kỷ Vật Thời Gian",
      desc: "Lưu giữ khoảnh khắc vô giá",
      img: "/images/personal-gift-3.png",
      link: "/danh-muc"
    }
  ];

  const features = [
    {
      icon: <Gem className="w-8 h-8 text-primary" />,
      title: "Chất Lượng Thượng Hạng",
      desc: "Tuyển chọn khắt khe những sản phẩm tinh hoa nhất từ các thương hiệu danh tiếng toàn cầu."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Thiết Kế Độc Bản",
      desc: "Dịch vụ bespoke cá nhân hóa từng chi tiết, tạo nên dấu ấn riêng biệt không thể sao chép."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Thấu Hiểu Doanh Nghiệp",
      desc: "Kinh nghiệm phục vụ các tập đoàn lớn, am hiểu sâu sắc văn hóa và nghi thức tặng quà."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Dịch Vụ Trọn Gói",
      desc: "Từ tư vấn, thiết kế, đóng gói đến giao hàng bảo mật, đảm bảo trải nghiệm hoàn hảo tuyệt đối."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.png" 
            alt="Premium corporate gift background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        </div>

        <div className="container relative z-10 px-4 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-primary tracking-[0.3em] uppercase text-sm font-semibold mb-6 block">
              Đẳng Cấp Thượng Lưu
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
              Gift Plus <span className="text-primary italic">Premium</span>
            </h1>
            <p className="font-serif text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto tracking-wide">
              "GIÁ TRỊ GỬI TRAO - NIỀM TIN LÂU BỀN"
            </p>
            <div className="w-24 h-px bg-primary mx-auto mb-10" />
            <p className="text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Chúng tôi kiến tạo những kiệt tác quà tặng, nơi sự tinh tế giao thoa cùng đẳng cấp. 
              Mỗi món quà là một câu chuyện, một lời tri ân sâu sắc, khẳng định vị thế và thắt chặt những mối thâm giao.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild size="lg" className="rounded-none px-8 py-6 text-base w-full sm:w-auto">
                <Link href="/danh-muc" data-testid="hero-btn-catalog">Khám Phá Bộ Sưu Tập</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-none px-8 py-6 text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto">
                <Link href="/lien-he" data-testid="hero-btn-quote">Yêu Cầu Báo Giá</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-card">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">Bộ Sưu Tập Nổi Bật</h2>
            <div className="w-16 h-px bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Những tuyệt tác quà tặng được tuyển chọn kỹ lưỡng, phù hợp cho mọi dịp trọng đại của doanh nghiệp và cá nhân.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden bg-background border border-border"
                data-testid={`card-collection-${i}`}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-2xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-primary text-sm mb-6">{item.desc}</p>
                  <Button asChild variant="link" className="text-foreground hover:text-primary p-0 h-auto font-medium group/btn">
                    <Link href={item.link}>
                      Xem chi tiết <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-card opacity-50 skew-x-[-15deg] translate-x-32" />
        
        <div className="container relative z-10 px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <span className="text-primary tracking-widest uppercase text-sm font-semibold mb-4 block">
                Triết Lý Kinh Doanh
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                Tại Sao Chọn Chúng Tôi?
              </h2>
              <div className="w-16 h-px bg-primary mb-8" />
              <p className="text-muted-foreground leading-relaxed mb-8">
                Hơn cả một nhà cung cấp, Gift Plus Premium là đối tác chiến lược đồng hành cùng thương hiệu của bạn. 
                Chúng tôi hiểu rằng mỗi món quà trao đi là một lời cam kết về uy tín và danh dự.
              </p>
              <Button asChild className="rounded-none px-8 py-6 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/gioi-thieu" data-testid="home-btn-about">Tìm Hiểu Thêm</Link>
              </Button>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-8 border border-border bg-card hover:border-primary/50 transition-colors"
                  data-testid={`card-feature-${i}`}
                >
                  <div className="mb-6 bg-background w-16 h-16 flex items-center justify-center rounded-full border border-border">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] opacity-10 object-cover mix-blend-overlay" />
        <div className="container relative z-10 px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-6">
            Sẵn Sàng Nâng Tầm Quà Tặng?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg">
            Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng tư vấn và thiết kế giải pháp quà tặng hoàn hảo nhất cho riêng bạn.
          </p>
          <Button asChild size="lg" className="rounded-none px-10 py-7 text-lg bg-background text-foreground hover:bg-background/90">
            <Link href="/lien-he" data-testid="home-btn-cta-quote">Liên Hệ Ngay Hôm Nay</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
