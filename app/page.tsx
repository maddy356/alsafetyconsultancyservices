'use client';
import { useState } from 'react';

export default function LandingPage() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  const content = {
    en: {
      heroTitle: "AL Safety",
      heroSubtitle: "Your Trusted Partner for Safer, Greener, and More Resilient Workplaces",
      heroDesc: "A dedicated health, safety, environment, and sustainable development consultancy. We believe every organization deserves a workplace where people are protected and operations are sustainable.",
      ctaBtn: "Get Started",
      whoWeAreTitle: "Who We Are",
      whoWeAreDesc: "We are a team of highly qualified, licensed, and experienced HSE and sustainability consultants. We bring together deep technical knowledge in safety, health, environment, and sustainable business practices.",
      visionTitle: "Our Vision",
      vision: "To be the most trusted trademark in safety, health, and environment consultancy – shaping a world where every workplace is inherently safe and green.",
      missionTitle: "Our Mission",
      mission: "To empower organizations with expert HSE solutions that protect people, preserve the environment, and secure business continuity.",
      servicesTitle: "Our Expertise",
      contactTitle: "Contact Our Consultants",
      contactDesc: "Submit your details below and our team in Manama will reach out to you shortly.",
      formName: "Full Name",
      formEmail: "Email Address",
      formPhone: "Phone Number",
      formMsg: "How can we help?",
      formBtn: "Send Inquiry",
      location: "Manama, Kingdom of Bahrain",
      services: [
        { title: "International Certification", items: ["ISO 45001 (Safety)", "ISO 9001 (Quality)", "ISO 14001 (Environment)"] },
        { title: "Safety & Compliance", items: ["Comprehensive Audits", "Regulatory Preparedness", "HSE Documentation"] },
        { title: "Risk Management", items: ["Workplace Risk & JSA", "Site Safety Inspections", "Fire Assessments"] },
        { title: "Digital HSE Solutions", items: ["Digitization of SMS", "Real-time Dashboards", "Digital Audit Tools"] }
      ]
    },
    ar: {
      heroTitle: "السفتي للاستشارات",
      heroSubtitle: "شريككم الموثوق لأماكن عمل أكثر أماناً واستدامة ومرونة",
      heroDesc: "شركة استشارية متخصصة في الصحة والسلامة والبيئة والتنمية المستدامة. نؤمن بأن كل مؤسسة تستحق مكان عمل يتم فيه حماية الأفراد واستدامة العمليات.",
      ctaBtn: "ابدأ الآن",
      whoWeAreTitle: "من نحن",
      whoWeAreDesc: "نحن فريق من استشاريي الصحة والسلامة والبيئة والاستدامة المؤهلين تأهيلاً عالياً. نجمع بين المعرفة التقنية العميقة وممارسات الأعمال المستدامة.",
      visionTitle: "رؤيتنا",
      vision: "أن نكون العلامة التجارية الأكثر ثقة في مجال استشارات السلامة والصحة والبيئة - نحو عالم آمن ومستدام.",
      missionTitle: "مهمتنا",
      mission: "تمكين المؤسسات بحلول خبيرة في الصحة والسلامة والبيئة تحمي الأفراد وتحافظ على البيئة.",
      servicesTitle: "خبراتنا",
      contactTitle: "تواصل مع مستشارينا",
      contactDesc: "أدخل بياناتك أدناه وسيتواصل معك فريقنا في المنامة قريباً.",
      formName: "الاسم الكامل",
      formEmail: "البريد الإلكتروني",
      formPhone: "رقم الهاتف",
      formMsg: "كيف يمكننا مساعدتك؟",
      formBtn: "إرسال الطلب",
      location: "المنامة، مملكة البحرين",
      services: [
        { title: "الشهادات الدولية", items: ["ISO 45001 السلامة", "ISO 9001 الجودة", "ISO 14001 البيئة"] },
        { title: "تدقيق السلامة", items: ["تدقيق شامل للسلامة", "مراجعات الاستعداد للتفتيش", "مراجعة التوثيق"] },
        { title: "إدارة المخاطر", items: ["تحليل مخاطر مكان العمل", "تفتيش مواقع العمل", "تقييم مخاطر الحريق"] },
        { title: "الحلول الرقمية", items: ["رقمنة نظام إدارة السلامة", "لوحات مؤشرات رقمية", "أدوات تدقيق رقمية"] }
      ]
    }
  };

  const cur = content[lang];

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className={`min-h-screen bg-white text-slate-900 ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* Navbar with Slider Toggle */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-blue-900">AL SAFETY</div>
          
          {/* Slider Switch */}
          <div className="relative w-32 h-10 bg-slate-100 rounded-full p-1 flex items-center cursor-pointer border border-slate-200" 
               onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}>
            <div className={`absolute w-[60px] h-8 bg-blue-900 rounded-full transition-all duration-300 shadow-lg ${lang === 'ar' ? 'translate-x-0' : 'translate-x-[64px]'}`} />
            <span className={`z-10 flex-1 text-center text-xs font-bold transition-colors ${lang === 'ar' ? 'text-white' : 'text-slate-500'}`}>AR</span>
            <span className={`z-10 flex-1 text-center text-xs font-bold transition-colors ${lang === 'en' ? 'text-white' : 'text-slate-500'}`}>EN</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-24 px-6 max-w-7xl mx-auto text-center md:text-inherit">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-700 bg-blue-50 rounded-full uppercase">
          Expert HSE Consultancy
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight">
          {cur.heroTitle} <span className="text-blue-700 block text-2xl md:text-5xl mt-2 font-medium">{cur.heroSubtitle}</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed mx-auto md:mx-0">
          {cur.heroDesc}
        </p>
        <button 
          onClick={scrollToContact}
          className="bg-blue-900 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-800 hover:scale-105 transition-all shadow-xl shadow-blue-900/20"
        >
          {cur.ctaBtn}
        </button>
      </header>

      {/* About Section */}
      <section className="py-20 bg-slate-900 text-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">{cur.whoWeAreTitle}</h2>
            <p className="text-lg text-slate-300 leading-relaxed">{cur.whoWeAreDesc}</p>
          </div>
          <div className="grid gap-4">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-blue-400 font-bold mb-2">{cur.visionTitle}</h3>
              <p className="text-sm text-slate-400">{cur.vision}</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-blue-400 font-bold mb-2">{cur.missionTitle}</h3>
              <p className="text-sm text-slate-400">{cur.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">{cur.servicesTitle}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cur.services.map((s, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <h3 className="text-lg font-bold mb-4 text-blue-900">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-24 px-6 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">{cur.contactTitle}</h2>
          <p className="text-slate-600 mb-12">{cur.contactDesc}</p>
          
          <form className="grid gap-4 text-left" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <input type="text" placeholder={cur.formName} className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-900" />
            <div className="grid md:grid-cols-2 gap-4">
              <input type="email" placeholder={cur.formEmail} className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-900" />
              <input type="tel" placeholder={cur.formPhone} className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-900" />
            </div>
            <textarea rows={4} placeholder={cur.formMsg} className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-900"></textarea>
            <button className="bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-all uppercase tracking-widest text-sm shadow-lg shadow-blue-900/20">
              {cur.formBtn}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <div className="text-2xl font-black text-blue-900 mb-4">AL SAFETY</div>
            <p className="text-sm text-slate-500 uppercase tracking-widest">{cur.location}</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Digital HSE</span>
            <span className="text-blue-900 font-bold text-lg">inquiry@alsafety.info</span>
          </div>
          <div className="text-slate-400 text-xs flex items-end justify-center md:justify-end">
            © {new Date().getFullYear()} ALSAFETY Consultancy Bahrain.
          </div>
        </div>
      </footer>
    </main>
  );
}