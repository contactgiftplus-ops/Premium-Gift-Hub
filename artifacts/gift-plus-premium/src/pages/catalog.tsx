import React, { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function Catalog() {
  const corporateGifts = [
    { id: "c1", name: "Set Quà Khai Trương Phú Quý", desc: "Kết hợp vang Pháp và hạt dinh dưỡng cao cấp", img: "/images/corp-gift-1.png", sub: "Khai Trương" },
    { id: "c2", name: "Hộp Quà Sự Kiện VIP", desc: "Pha lê cao cấp và trà thượng hạng", img: "/images/corp-gift-2.png", sub: "Sự Kiện" },
    { id: "c3", name: "Bộ Quà Tặng Đối Tác Chiến Lược", desc: "Rượu mạch nha đơn cất và huy hiệu vàng", img: "/images/corp-gift-3.png", sub: "Đối Tác" },
    { id: "c4", name: "Set Quà Tết An Khang", desc: "Đặc sản truyền thống bao bì cao cấp", img: "/images/corp-gift-1.png", sub: "Tết/Năm Mới" },
    { id: "c5", name: "Bộ Sổ Bút Hội Nghị", desc: "Sổ da thật và bút ký nạm vàng", img: "/images/corp-gift-2.png", sub: "Hội Nghị" },
    { id: "c6", name: "Vali Rượu Premium", desc: "Tuyển tập 3 chai vang thượng hạng", img: "/images/corp-gift-3.png", sub: "Đối Tác" },
  ];

  const personalGifts = [
    { id: "p1", name: "Bút Ký Montblanc Khắc Tên", desc: "Khắc tên laser tinh xảo mạ vàng", img: "/images/personal-gift-1.png", sub: "Khắc Tên" },
    { id: "p2", name: "Ví Da Nappa In Tên", desc: "Chế tác thủ công từ da bò Italy", img: "/images/personal-gift-2.png", sub: "In Tên" },
    { id: "p3", name: "Đồng Hồ Bạc Kỷ Niệm", desc: "Phiên bản giới hạn khắc mặt sau", img: "/images/personal-gift-3.png", sub: "Kỷ Niệm" },
    { id: "p4", name: "Hộp Cigar Bespoke", desc: "Tủ cigar gỗ tuyết tùng thiết kế riêng", img: "/images/personal-gift-1.png", sub: "Quà Bespoke" },
    { id: "p5", name: "Set Phụ Kiện Nam Giới", desc: "Cavat, khuy măng sét và kẹp tiền", img: "/images/personal-gift-2.png", sub: "Sinh Nhật" },
    { id: "p6", name: "Bộ Nữ Trang Chế Tác", desc: "Thiết kế độc quyền theo yêu cầu", img: "/images/personal-gift-3.png", sub: "Quà Bespoke" },
  ];

  const ProductCard = ({ product }: { product: any }) => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="group bg-card border border-border overflow-hidden"
      data-testid={`product-card-${product.id}`}
    >
      <div className="aspect-square overflow-hidden relative">
        <img 
          src={product.img} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-primary text-xs font-semibold px-3 py-1 border border-primary/20">
          {product.sub}
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="font-serif text-xl text-foreground mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-2">{product.desc}</p>
        <Button asChild variant="outline" className="w-full rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link href={`/lien-he?product=${encodeURIComponent(product.name)}`} data-testid={`btn-quote-${product.id}`}>
            Yêu Cầu Báo Giá
          </Link>
        </Button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <section className="bg-card py-20 border-b border-border">
        <div className="container px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Danh Mục Sản Phẩm</h1>
          <div className="w-24 h-px bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Khám phá những bộ sưu tập quà tặng đẳng cấp, được tuyển chọn và chế tác để mang lại trải nghiệm hoàn mỹ nhất.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4">
          <Tabs defaultValue="corporate" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-card border border-border p-1 rounded-none">
                <TabsTrigger 
                  value="corporate" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-none px-8 py-3 text-base"
                  data-testid="tab-corporate"
                >
                  Quà Tặng Doanh Nghiệp
                </TabsTrigger>
                <TabsTrigger 
                  value="personal" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-none px-8 py-3 text-base"
                  data-testid="tab-personal"
                >
                  Quà Tặng Cá Nhân Hóa
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="corporate" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {corporateGifts.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </TabsContent>

            <TabsContent value="personal" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {personalGifts.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
