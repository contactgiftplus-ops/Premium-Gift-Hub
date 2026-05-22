import React from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { motion } from "framer-motion";
import { Award, Users, Globe, Clock, CheckCircle } from "lucide-react";

export default function About() {
  const stats = [
    { num: "10+", label: "Năm Kinh Nghiệm" },
    { num: "500+", label: "Đối Tác Doanh Nghiệp" },
    { num: "50k+", label: "Sản Phẩm Đã Giao" },
    { num: "100%", label: "Khách Hàng Hài Lòng" }
  ];

  const values = [
    {
      title: "Tinh Tế",
      desc: "Chăm chút từng chi tiết nhỏ nhất trong thiết kế và đóng gói."
    },
    {
      title: "Độc Bản",
      desc: "Đề cao tính cá nhân hóa, mang dấu ấn riêng của từng khách hàng."
    },
    {
      title: "Tin Cậy",
      desc: "Giữ vững chữ tín trong chất lượng sản phẩm và tiến độ giao hàng."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col pt-20">
      {/* Hero */}
      <section className="bg-card py-20 border-b border-border">
        <div className="container px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">Về Chúng Tôi</h1>
            <div className="w-24 h-px bg-primary mx-auto mb-8" />
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Gift Plus Premium tự hào là nhà cung cấp giải pháp quà tặng cao cấp hàng đầu Việt Nam, 
              nơi hội tụ những kiệt tác xứng tầm thượng lưu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="aspect-[4/5] relative">
                <img 
                  src="/images/corp-gift-3.png" 
                  alt="Our Story" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 -z-10" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Hành Trình Kiến Tạo Đẳng Cấp</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Được thành lập với khát vọng nâng tầm văn hóa tặng quà tại Việt Nam, Gift Plus Premium khởi đầu từ một boutique nhỏ chuyên chế tác quà tặng bespoke. Qua nhiều năm phát triển, chúng tôi đã vươn mình trở thành đối tác tin cậy của hàng trăm tập đoàn lớn.
              </p>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Chúng tôi quan niệm rằng, quà tặng không chỉ là vật chất, mà là ngôn ngữ của sự trân trọng. Mỗi thiết kế tại Gift Plus Premium đều mang trong mình một linh hồn, một câu chuyện và sự tinh tuyển khắt khe nhất từ chất liệu đến hoàn thiện.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="flex gap-4 items-start">
                  <Award className="text-primary mt-1 w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-serif text-xl mb-2 text-foreground">Sứ Mệnh</h4>
                    <p className="text-sm text-muted-foreground">Tôn vinh giá trị và khẳng định đẳng cấp thương hiệu qua từng món quà.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Globe className="text-primary mt-1 w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-serif text-xl mb-2 text-foreground">Tầm Nhìn</h4>
                    <p className="text-sm text-muted-foreground">Trở thành thương hiệu quà tặng cao cấp biểu tượng của khu vực.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary">
        <div className="container px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-primary-foreground"
              >
                <div className="text-5xl md:text-6xl font-serif font-bold mb-4">{stat.num}</div>
                <div className="text-sm uppercase tracking-widest font-medium opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card">
        <div className="container px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-16">Giá Trị Cốt Lõi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 border border-border bg-background"
              >
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="font-serif text-2xl text-foreground mb-4">{val.title}</h3>
                <p className="text-muted-foreground">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
