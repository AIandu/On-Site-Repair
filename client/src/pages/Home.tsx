import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Battery, 
  Zap, 
  Cpu, 
  Stethoscope, 
  Phone, 
  MessageCircle, 
  MapPin, 
  CheckCircle2, 
  HeartHandshake 
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden" dir="auto">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10 rounded-l-[100px]" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-primary font-semibold text-sm tracking-wide">
                  Mobile Repair – Erbil | تصليح سفري – أربيل
                </span>
                <h1 className="text-4xl lg:text-6xl font-display font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]">
                  We come to you. <br />
                  <span className="text-primary">Fast. Honest. Free.</span>
                  <div className="mt-2 text-3xl lg:text-5xl font-arabic">
                    نصل إليك. <span className="text-primary">سريع. أمين. مجاني.</span>
                  </div>
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Repair To Go provides mobile phone repair services across Erbil. 
                  We travel directly to you to repair your phone quickly and honestly.
                </p>
                <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed" dir="rtl">
                  تقدم خدمة تصليح متنقّل – أربيل تصليح الموبايلات في جميع مناطق أربيل.
                  نصل إليك مباشرة لإصلاح هاتفك بسرعة وأمان، خصوصًا لمن لا يستطيع الوصول إلى محل تصليح.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button 
                    size="lg" 
                    className="rounded-full px-8 h-12 text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1"
                    onClick={() => window.location.href = "tel:962785437235"}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now | اتصل الآن
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="rounded-full px-8 h-12 text-lg border-2 hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition-all"
                    onClick={() => window.location.href = "https://wa.me/962785437235"}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp | واتساب
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-1 relative"
            >
              {/* Image Container with decoration */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Hero repair image */}
                <img 
                  src="https://pixabay.com/get/g2b73cca50e9618d4f6d5b022ffc77aa7d5e2e893459ce7ed4d9f82f288a792cd1d73e6b04fb4ea80e4e0e8e76e822de40e2e46e985d628581ddce0baf5b65de4_1280.jpg" 
                  alt="Mobile phone repair technician working"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute inset-0 border-4 border-primary/20 rounded-3xl -rotate-2 scale-105 -z-10 translate-y-4 translate-x-4" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Services | خدماتنا</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive repair solutions delivered to your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Smartphone} 
              title="Screen Replacement" 
              description="Screen replacement | تبديل شاشة"
              delay={0}
            />
            <ServiceCard 
              icon={Battery} 
              title="Battery Problems" 
              description="Battery problems | مشاكل البطارية"
              delay={1}
            />
            <ServiceCard 
              icon={Zap} 
              title="Charging Port Repair" 
              description="Charging port repair | تصليح مدخل الشحن"
              delay={2}
            />
            <ServiceCard 
              icon={Cpu} 
              title="Software Issues" 
              description="Software issues | مشاكل البرامج"
              delay={3}
            />
            <ServiceCard 
              icon={Stethoscope} 
              title="Phone Diagnostics" 
              description="Phone diagnostics | فحص الهاتف"
              delay={4}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                How It Works <span className="text-primary font-sans text-2xl font-normal ml-2">| كيف نعمل</span>
              </h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Call or Message | اتصال أو رسالة", desc: "Contact us via Phone or WhatsApp. اتصل بنا عبر الهاتف أو الواتساب." },
                  { step: "02", title: "We Come to You | نصل إليك", desc: "I travel to your location in Erbil. أصل إلى مكانك في أربيل." },
                  { step: "03", title: "Repaired On-Site | تصليح في الموقع", desc: "Repairs are done on-site if possible. يتم التصليح في نفس المكان إن أمكن." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-6 items-start group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl blur-2xl -z-10" />
              {/* Technician repairing phone closeup */}
              <img 
                src="https://pixabay.com/get/gaacf183a12e100ca844bdf8f6044bf90d09e7a21dd73da06fa0a02b01b642acc1958df190593036fdba21b3586c74db8ccde6bd0c8d825c5fedd48c305b753c4_1280.jpg" 
                alt="Phone repair process closeup" 
                className="rounded-2xl shadow-2xl border border-white/50 w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-8">
            <HeartHandshake className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Our Mission | مهمتنا</h2>
          <p className="text-xl md:text-2xl leading-relaxed font-light mb-8 text-blue-50">
            "This service is provided free to support the community. Helping people stay connected is more important than profit."
          </p>
          <p className="text-xl md:text-2xl leading-relaxed font-light mb-8 text-blue-50" dir="rtl">
            "هذه الخدمة مقدمة مجانًا لدعم المجتمع. مساعدة الناس على البقاء متصلين أهم من الربح."
          </p>
          <div className="h-1 w-24 bg-white/30 mx-auto rounded-full" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Contact Us | تواصل معنا</h2>
              <p className="text-muted-foreground text-lg mb-10">
                Ready to get your phone fixed? Fill out the form or contact us directly.
              </p>

              <div className="space-y-6">
                <a href="tel:962785437235" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors group border border-transparent hover:border-blue-100">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Call Us | اتصل بنا</p>
                    <p className="text-lg font-bold text-foreground">962-785-437-235</p>
                  </div>
                </a>

                <a href="https://wa.me/962785437235" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-green-50 transition-colors group border border-transparent hover:border-green-100">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">WhatsApp | واتساب</p>
                    <p className="text-lg font-bold text-foreground">Chat on WhatsApp</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-transparent">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Service Area | منطقة الخدمة</p>
                    <p className="text-lg font-bold text-foreground">Erbil & Surroundings | أربيل والمناطق المحيطة</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground">Why choose us?</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      We prioritize honesty and speed. No hidden fees, no unnecessary repairs. Just getting you back online.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-white/10 p-2 rounded-lg">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-2xl text-white">
              Repair To Go
            </span>
          </div>
          
          <p className="mb-8 opacity-70">
            Repair To Go – Erbil • Community First • Honest Service
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>

          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Repair To Go. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
