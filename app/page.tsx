"use client";
import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { sendInquiry } from './actions'; // Importing your original logic

export default function LandingPage() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Content Dictionary
  const content = {
    en: {
      heroTitle: "AL Safety",
      heroSubtitle: "Your Trusted Partner for Safer Workplaces",
      heroDesc: "A dedicated health, safety, and environment consultancy. We empower organizations with solutions that protect people and secure business continuity.",
      ctaBtn: "Get Started",
      servicesTitle: "Our Expertise",
      contactTitle: "Business Inquiry",
      contactDesc: "Based in Manama, our team is ready to support your business.",
      formName: "Full Name",
      formEmail: "Business Email",
      formPhone: "Phone Number",
      formMsg: "How can we help?",
      formBtn: "Send Request",
      successMsg: "Inquiry Sent Successfully!",
      location: "Manama, Kingdom of Bahrain",
      services: [
        { title: "ISO Certification", items: ["ISO 45001", "ISO 9001", "ISO 14001"] },
        { title: "Safety Audits", items: ["Compliance Reviews", "Site Inspections"] },
        { title: "Risk Management", items: ["JSA Analysis", "Fire Assessments"] },
        { title: "Digital HSE", items: ["Digitization", "Dashboards"] }
      ]
    },
    ar: {
      heroTitle: "السفتي للاستشارات",
      heroSubtitle: "شريككم الموثوق لبيئة عمل آمنة",
      heroDesc: "استشارات متخصصة في الصحة والسلامة والبيئة. نؤمن بأن كل مؤسسة تستحق مكان عمل يتم فيه حماية الأفراد واستدامة العمليات.",
      ctaBtn: "ابدأ الآن",
      servicesTitle: "خبراتنا",
      contactTitle: "طلب استشارة",
      contactDesc: "فريقنا في المنامة جاهز لدعم أعمالكم. أدخل بياناتك أدناه.",
      formName: "الاسم الكامل",
      formEmail: "البريد الإلكتروني",
      formPhone: "رقم الهاتف",
      formMsg: "كيف يمكننا مساعدتك؟",
      formBtn: "إرسال الطلب",
      successMsg: "تم إرسال الطلب بنجاح!",
      location: "المنامة، مملكة البحرين",
      services: [
        { title: "الشهادات الدولية", items: ["ISO 45001", "ISO 9001", "ISO 14001"] },
        { title: "تدقيق السلامة", items: ["التدقيق الشامل", "تفتيش الموقع"] },
        { title: "إدارة المخاطر", items: ["تحليل المخاطر", "سلامة الحريق"] },
        { title: "الحلول الرقمية", items: ["التحول الرقمي", "لوحات البيانات"] }
      ]
    }
  };

  const cur = content[lang];

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    const result = await sendInquiry(formData);
    setIsSubmitting(false);
    
    if (result.success) {
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      alert("Error sending inquiry. Please try again.");
    }
  }

  return (
    <main className={`min-h-screen bg-white text-slate-900 ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* Navbar with Slider Toggle */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-blue-900 uppercase">AL SAFETY</div>
          <div className="relative w-32 h-10 bg-slate-100 rounded-full p-1 flex items-center cursor-pointer border border-slate-200" onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}>
            <div className={`absolute w-[60px] h-8 bg-blue-900 rounded-full transition-all duration-300 shadow-lg ${lang === 'ar' ? 'translate-x-0' : 'translate-x-[64px]'}`} />
            <span className={`z-10 flex-1 text-center text-xs font-bold transition-colors ${lang === 'ar' ? 'text-white' : 'text-slate-500'}`}>AR</span>
            <span className={`z-10 flex-1 text-center text-xs font-bold transition-colors ${lang === 'en' ? 'text-white' : 'text-slate-500'}`}>EN</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="py-24 px-6 max-w-7xl mx-auto text-center md:text-inherit">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight">
          {cur.heroTitle} <span className="text-blue-700 block text-2xl md:text-5xl mt-2 font-medium">{cur.heroSubtitle}</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed mx-auto md:mx-0">{cur.heroDesc}</p>
        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-blue-900 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl">
          {cur.ctaBtn}
        </button>
      </header>

      {/* Services Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black mb-16 text-center uppercase tracking-widest">{cur.servicesTitle}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cur.services.map((s, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-300 transition-all">
              <h3 className="font-bold mb-4 text-blue-900 uppercase text-sm italic">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item, i) => (
                  <li key={i} className="text-sm text-slate-500 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-blue-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section - RESTORED ORIGINAL LOGIC */}
      <section id="contact" className="py-24 px-6 bg-slate-100">
        <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="p-12 flex-1">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">✓</div>
                <h2 className="text-2xl font-bold text-slate-900">{cur.successMsg}</h2>
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-black mb-6 italic underline decoration-blue-500 underline-offset-4">{cur.contactTitle}</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <input name="name" placeholder={cur.formName} required className="p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 border border-transparent" />
                  <input name="email" type="email" placeholder={cur.formEmail} required className="p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 border border-transparent" />
                  <input name="phone" type="tel" placeholder={cur.formPhone} required className="p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 border border-transparent" />
                </div>
                <textarea name="message" required placeholder={cur.formMsg} className="w-full p-4 bg-slate-50 rounded-xl h-32 outline-none focus:ring-2 focus:ring-blue-600 border border-transparent resize-none"></textarea>
                <button disabled={isSubmitting} className="w-full bg-blue-600 text-white font-bold py-5 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
                  {isSubmitting ? "..." : cur.formBtn} <Send size={16}/>
                </button>
              </form>
            )}
          </div>
          <div className="bg-slate-900 p-12 text-white md:w-80 flex flex-col justify-center">
            <h3 className="font-bold text-lg mb-8 text-blue-400 uppercase">Details</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-center"><Phone size={18} className="text-blue-500"/><p className="text-sm font-bold">+973 33133032</p></div>
              <div className="flex gap-4 items-center"><Mail size={18} className="text-blue-500"/><p className="text-sm font-bold break-all">inquiry@alsafety.info</p></div>
              <div className="flex gap-4 items-center"><MapPin size={18} className="text-blue-500"/><p className="text-sm font-bold">{cur.location}</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-400 text-[10px] font-bold tracking-widest uppercase italic">
        © {new Date().getFullYear()} ALSAFETY Consultancy Services • Excellence in Compliance
      </footer>
    </main>
  );
}