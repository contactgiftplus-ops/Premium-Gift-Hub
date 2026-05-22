import React, { useEffect } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, "Vui lòng nhập họ và tên"),
  company: z.string().optional(),
  phone: z.string().min(10, "Số điện thoại không hợp lệ"),
  email: z.string().email("Email không hợp lệ"),
  budget: z.string().min(1, "Vui lòng chọn hoặc nhập ngân sách dự kiến"),
  quantity: z.string().min(1, "Vui lòng nhập số lượng"),
  message: z.string().min(10, "Tin nhắn quá ngắn"),
});

export default function Contact() {
  const { toast } = useToast();
  const [location] = useLocation();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      company: "",
      phone: "",
      email: "",
      budget: "",
      quantity: "",
      message: "",
    },
  });

  // Prefill message if coming from a product quote button
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");
    if (product) {
      form.setValue("message", `Tôi muốn nhận báo giá cho sản phẩm: ${product}\n\nYêu cầu chi tiết:\n`);
    }
  }, [form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Gửi yêu cầu thành công!",
      description: "Chuyên viên của chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
      variant: "default",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <section className="bg-card py-20 border-b border-border">
        <div className="container px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Liên Hệ & Báo Giá</h1>
          <div className="w-24 h-px bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Đội ngũ chuyên gia thiết kế quà tặng của chúng tôi luôn sẵn lòng lắng nghe và biến ý tưởng của bạn thành hiện thực.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-10">
              <div>
                <h2 className="font-serif text-3xl text-primary mb-6">Thông Tin Liên Hệ</h2>
                <p className="text-muted-foreground mb-8">
                  Gift Plus Premium trân trọng từng cơ hội được phục vụ quý khách. Đừng ngần ngại liên hệ với chúng tôi.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-card border border-border flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-foreground mb-1">Văn Phòng</h4>
                    <p className="text-muted-foreground">Tầng 15, Vincom Center<br/>72 Lê Thánh Tôn, Quận 1<br/>TP. Hồ Chí Minh</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-card border border-border flex items-center justify-center shrink-0">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-foreground mb-1">Điện Thoại</h4>
                    <p className="text-muted-foreground">Hotline: 0909 123 456<br/>CSKH: 0909 654 321</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-card border border-border flex items-center justify-center shrink-0">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@giftpluspremium.vn<br/>sales@giftpluspremium.vn</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-card border border-border flex items-center justify-center shrink-0">
                    <Clock className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-foreground mb-1">Giờ Làm Việc</h4>
                    <p className="text-muted-foreground">Thứ 2 - Thứ 6: 08:30 - 18:00<br/>Thứ 7: 08:30 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-card p-8 md:p-12 border border-border">
                <h3 className="font-serif text-2xl text-foreground mb-8">Gửi Yêu Cầu Tư Vấn</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Họ và Tên *</FormLabel>
                            <FormControl>
                              <Input placeholder="Nhập họ tên của bạn" className="bg-background rounded-none border-border focus-visible:ring-primary" {...field} data-testid="input-fullname" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Tên Công Ty (nếu có)</FormLabel>
                            <FormControl>
                              <Input placeholder="Nhập tên công ty" className="bg-background rounded-none border-border focus-visible:ring-primary" {...field} data-testid="input-company" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Số Điện Thoại *</FormLabel>
                            <FormControl>
                              <Input placeholder="090..." className="bg-background rounded-none border-border focus-visible:ring-primary" {...field} data-testid="input-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Email *</FormLabel>
                            <FormControl>
                              <Input placeholder="email@domain.com" type="email" className="bg-background rounded-none border-border focus-visible:ring-primary" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Ngân Sách Dự Kiến / Phần Quà *</FormLabel>
                            <FormControl>
                              <Input placeholder="VD: 1.000.000 VNĐ" className="bg-background rounded-none border-border focus-visible:ring-primary" {...field} data-testid="input-budget" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Số Lượng Dự Kiến *</FormLabel>
                            <FormControl>
                              <Input placeholder="VD: 100 hộp" className="bg-background rounded-none border-border focus-visible:ring-primary" {...field} data-testid="input-quantity" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Tin Nhắn / Yêu Cầu Chi Tiết *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Mô tả ý tưởng hoặc yêu cầu đặc biệt của bạn..." 
                              className="bg-background rounded-none border-border focus-visible:ring-primary min-h-[150px]" 
                              {...field} 
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full rounded-none h-14 text-base" data-testid="button-submit-quote">
                      Gửi Yêu Cầu
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
