"use client";
import React, { useState } from 'react';
import { Send, Mail, MapPin, ChevronDown, ChevronUp, CheckCircle2, Users, Target, Rocket } from 'lucide-react';
import { sendInquiry } from './actions';

export default function LandingPage() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const content = {
    en: {
      heroTitle: "AL Safety",
      heroSubtitle: "Your Trusted Partner for Safer, Greener, and More Resilient Workplaces",
      heroDesc: "A dedicated health, safety, environment, and sustainable development consultancy built on the belief that every organization deserves a workplace where people are protected and operations are sustainable.",
      ctaBtn: "Get Started",
      aboutTitle: "Who We Are",
      aboutDesc: "We are a team of highly qualified, licensed, and experienced HSE and sustainability consultants. We bring together deep technical knowledge with real-world practicality gained across multiple sectors. Our experts don’t just observe from the outside; we become an extension of your team.",
      visionTitle: "Our Vision",
      vision: "To be the most trusted and recognized trademark in HSE and sustainable development consultancy – helping shape a world where every workplace is inherently safe, green, and resilient.",
      missionTitle: "Our Mission",
      mission: "To empower organizations with expert HSE solutions and integrated management systems that protect people, preserve the environment, and secure business continuity.",
      servicesTitle: "Our Specialized Services",
      clickPrompt: "Click a service to view complete details",
      contactTitle: "Contact Our Consultants",
      location: "Manama, Kingdom of Bahrain",
      services: [
        { 
          title: "Certification & Systems", 
          short: "ISO 45001, 9001, 14001 and IMS design.",
          details: ["ISO 45001 (Occupational Health & Safety) development", "ISO 9001 (Quality Management) implementation", "ISO 14001 (Environmental Management) systems", "Design and build of Integrated Management Systems (IMS)"]
        },
        { 
          title: "Safety & Compliance Audits", 
          short: "Comprehensive audits and regulatory readiness.",
          details: ["Comprehensive safety and compliance audits", "Regulatory inspection preparedness reviews", "HSE documentation and record-keeping reviews"]
        },
        { 
          title: "Risk Management", 
          short: "Workplace risk, JSA, and site inspections.",
          details: ["Workplace risk and Job Safety Analysis (JSA)", "Site safety inspections and walkthroughs", "Fire, ergonomics, and specialized risk assessments"]
        },
        { 
          title: "Digital HSE Solutions", 
          short: "Moving from paper to efficient digital platforms.",
          details: ["Digitization of your Safety Management System (SMS)", "Custom digital dashboards for real-time monitoring", "Digital tools for audits, inspections, and training"]
        },
        { 
          title: "Specialized HSE Support", 
          short: "Fully outsourced or on-demand expert advisors.",
          details: ["Fully outsourced HSE department: managing your HSE end-to-end", "On-demand HSE Officer/Advisor services", "Environmental compliance audits and waste management"]
        },
        { 
          title: "Incident Intelligence", 
          short: "Investigations beyond root cause analysis.",
          details: ["Investigations of organizational and systemic factors", "Analysis of incident trends and patterns across projects", "Data-driven insights to proactively manage emerging risks"]
        }
      ],
      form: { name: "Name", email: "Email", phone: "Phone", msg: "How can we help?", btn: "Send Inquiry" }
    },
    ar: {
      heroTitle: "السفتي للاستشارات",
      heroSubtitle: "شريككم الموثوق لأماكن عمل أكثر أماناً واستدامة ومرونة",
      heroDesc: "شركة استشارية متخصصة في الصحة والسلامة والبيئة والتنمية المستدامة، قائمة على إيمان راسخ بأن كل مؤسسة تستحق مكان عمل يكون فيه الأفراد محميين.",
      ctaBtn: "ابدأ الآن",
      aboutTitle: "من نحن",
      aboutDesc: "نحن فريق من استشاريي الصحة والسلامة والبيئة والاستدامة المؤهلين تأهيلاً عالياً والمرخصين. نجمع بين المعرفة التقنية العميقة والتطبيق العملي الواقعي المكتسب عبر قطاعات متعددة. خبراؤنا لا يكتفون بالمراقبة؛ بل يصبحون امتداداً حقيقياً لفريقكم.",
      visionTitle: "رؤيتنا",
      vision: "أن نكون العلامة التجارية الأكثر ثقة واعترافاً في مجال استشارات السلامة والصحة والبيئة والتنمية المستدامة والإسهام في تشكيل عالم آمن ومستدام.",
      missionTitle: "مهمتنا",
      mission: "تمكين المؤسسات بحلول خبيرة في الصحة والسلامة والبيئة وأنظمة إدارة متكاملة تحمي الأفراد وتحافظ على البيئة وتضمن استمرارية الأعمال.",
      servicesTitle: "قائمة خدماتنا",
      clickPrompt: "اضغط على الخدمة لعرض التفاصيل الكاملة",
      contactTitle: "تواصل مع مستشارينا",
      location: "المنامة، مملكة البحرين",
      services: [
        { 
          title: "الشهادات الدولية", 
          short: "ISO 45001 و 9001 و 14001 وتصميم IMS.",
          details: ["تطوير وتنفيذ أنظمة ISO 45001", "تطوير وتنفيذ أنظمة ISO 9001", "تطوير وتنفيذ أنظمة ISO 14001", "تصميم وبناء أنظمة إدارة متكاملة (IMS)"]
        },
        { 
          title: "تدقيق السلامة والامتثال", 
          short: "تدقيق شامل وجاهزية للتفتيش الرقابي.",
          details: ["تدقيق شامل للسلامة والامتثال", "مراجعات الاستعداد للتفتيش الرقابي", "مراجعة أنظمة توثيق وحفظ سجلات الصحة والسلامة"]
        },
        { 
          title: "إدارة وتقييم المخاطر", 
          short: "تحليل مخاطر العمل وتفتيش المواقع.",
          details: ["تحليل مخاطر مكان العمل وتحليل سلامة المهام (JSA)", "تفتيش مواقع العمل والجولات التفقدية", "تقييم المخاطر المتخصصة: الحرائق و COSHH"]
        },
        { 
          title: "الحلول الرقمية", 
          short: "التحول من العمليات الورقية إلى المنصات الرقمية.",
          details: ["رقمنة نظام إدارة السلامة (SMS)", "تخصيص لوحات مؤشرات رقمية للمراقبة اللحظية", "دمج الأدوات الرقمية للتدقيق وسجلات التدريب"]
        },
        { 
          title: "الدعم المتخصص", 
          short: "إدارة خارجية كاملة أو مستشارين عند الطلب.",
          details: ["إدارة خارجية كاملة: ندير وظيفة السلامة لديكم من الألف إلى الياء", "خدمات مستشار صحة وسلامة وبيئة عند الطلب", "تدقيق الامتثال البيئي وخطط إدارة النفايات"]
        },
        { 
          title: "التحقيق في الحوادث", 
          short: "تحقيقات شاملة تتجاوز الأسباب الجذرية.",
          details: ["تحقيقات تتجاوز الأسباب الجذرية للعوامل التنظيمية", "تحليل اتجاهات وأنماط الحوادث عبر المشاريع", "توصيات عملية قائمة على البيانات لمنع التكرار"]
        }
      ],
      form: { name: "الاسم", email: "البريد", phone: "الهاتف", msg: "كيف نساعدك؟", btn: "إرسال الطلب" }
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
    }
  }

  return (
    <main className={`min-h-screen bg-white text-slate-900 ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
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
      <header className="py-24 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight">
          {cur.heroTitle} <span className="text-blue-700 block text-2xl md:text-5xl mt-2 font-medium">{cur.heroSubtitle}</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">{cur.heroDesc}</p>
        <div className="flex gap-4">
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-blue-900 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-800 transition-all shadow-xl">
            {cur.ctaBtn}
          </button>
          <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white border border-slate-200 text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all">
            {cur.aboutTitle}
          </button>
        </div>
      </header>

      {/* About Us Section */}
      <section id="about" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl font-black mb-8 italic flex items-center gap-3">
                <Users className="text-blue-600" /> {cur.aboutTitle}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {cur.aboutDesc}
              </p>
            </div>
            <div className="grid gap-6">
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-blue-600 font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-xs">
                  <Target size={18} /> {cur.visionTitle}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{cur.vision}</p>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-blue-600 font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-xs">
                  <Rocket size={18} /> {cur.missionTitle}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{cur.mission}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expandable Services */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black mb-4 text-center uppercase tracking-tighter">{cur.servicesTitle}</h2>
        <p className="text-center text-slate-400 text-sm mb-16">{cur.clickPrompt}</p>
        <div className="grid md:grid-cols-2 gap-4">
          {cur.services.map((s, i) => (
            <div 
              key={i} 
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              className={`p-8 rounded-3xl border transition-all cursor-pointer group ${expandedIndex === i ? 'bg-blue-900 text-white border-blue-900 shadow-2xl scale-[1.02]' : 'bg-white border-slate-100 hover:border-blue-300 shadow-sm'}`}
            >
              <div className="flex justify-between items-center">
                <h3 className={`font-bold text-lg ${expandedIndex === i ? 'text-blue-400' : 'text-blue-900'}`}>{s.title}</h3>
                {expandedIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} className="text-slate-300 group-hover:text-blue-500" />}
              </div>
              <div className={`overflow-hidden transition-all duration-500 ${expandedIndex === i ? 'max-h-[500px] mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-4 pt-4 border-t border-white/10">
                  {s.details.map((detail, idx) => (
                    <div key={idx} className="flex gap-3 text-sm leading-relaxed">
                      <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                      <p>{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              {expandedIndex !== i && <p className="text-sm text-slate-500 mt-2 line-clamp-1">{s.short}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="p-12 flex-1">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6 text-3xl">✓</div>
                <h2 className="text-2xl font-bold">Inquiry Sent Successfully!</h2>
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-6">
                <h2 className="text-3xl font-black mb-8 italic">{cur.contactTitle}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input name="name" placeholder={cur.form.name} required className="p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-600" />
                  <input name="phone" type="tel" placeholder={cur.form.phone} required className="p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <input name="email" type="email" placeholder={cur.form.email} required className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-600" />
                <textarea name="message" placeholder={cur.form.msg} required className="w-full p-4 bg-slate-50 rounded-2xl h-32 border-none outline-none focus:ring-2 focus:ring-blue-600 resize-none"></textarea>
                <button disabled={isSubmitting} className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 uppercase tracking-widest">
                  {isSubmitting ? "..." : cur.form.btn} <Send size={18} />
                </button>
              </form>
            )}
          </div>
          <div className="bg-slate-50 p-12 text-slate-900 md:w-80 flex flex-col justify-center border-l border-slate-100">
            <h3 className="font-bold text-xs text-blue-600 uppercase tracking-[0.3em] mb-10">Headquarters</h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <Mail className="text-blue-600 shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Email</p>
                  <p className="font-bold text-sm">inquiry@alsafety.info</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="text-blue-600 shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Location</p>
                  <p className="font-bold text-sm leading-relaxed">{cur.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 text-[10px] font-bold tracking-[0.3em] uppercase opacity-60">
        © {new Date().getFullYear()} ALSAFETY Consultancy Services • Excellence in Compliance
      </footer>
    </main>
  );
}