'use client';
import { useState } from 'react';
import { sendInquiry } from './actions'; // Ensure this matches your file path

export default function LandingPage() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const toggleService = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const scrollToContact = () => {
    document.getElementById('inquiry-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setStatus('idle');
    try {
      const result = await sendInquiry(formData);
      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (e) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  const content = {
    en: {
      navServices: "Services",
      navAbout: "About",
      navContact: "Contact Us",
      heroTitle: "Your Trusted Partner for Safer, Greener, and More Resilient Workplaces",
      heroDesc: "Expert health, safety, environment, and sustainable development consultancy. We protect your people, preserve the environment, and secure business continuity.",
      ctaButton: "Get an Inquiry",
      whoWeAreTitle: "Who We Are",
      whoWeAreDesc: "We are a team of highly qualified, licensed, and experienced HSE and sustainability consultants. We bring together deep technical knowledge in safety, health, environment, and sustainable business practices.",
      visionTitle: "Our Vision",
      vision: "To be the most trusted and recognized trademark in safety, health, environment and sustainable development consultancy.",
      missionTitle: "Our Mission",
      mission: "To empower organizations with expert HSE solutions and integrated management systems.",
      servicesTitle: "Our Specialized Services",
      inquiryTitle: "Professional Inquiry",
      inquirySub: "Submit your details and our consultants will reach out to you.",
      nameLabel: "Full Name",
      emailLabel: "Business Email",
      phoneLabel: "Contact Number",
      messageLabel: "Project Details / Inquiry",
      sendButton: "Submit Inquiry",
      sending: "Processing...",
      successTitle: "Thank You!",
      successBody: "Your inquiry has been received. One of our HSE consultants will review your details and contact you shortly.",
      errorMsg: "Something went wrong. Please try again or email us directly.",
      backBtn: "Send another message",
      services: [
        { title: "1. International Certification & Management Systems", items: ["ISO 45001 (Occupational Health & Safety)", "ISO 9001 (Quality Management)", "ISO 14001 (Environmental Management)", "Integrated Management Systems (IMS)"] },
        { title: "2. Safety & Compliance Audits", items: ["Comprehensive safety and compliance audits", "Regulatory inspection preparedness", "HSE documentation reviews"] },
        { title: "3. Training Supports", items: ["HSE training needs analysis", "Lifesaving training", "Tailored on-the-job trainings"] },
        { title: "4. Risk Management & Assessments", items: ["Workplace risk and Job Safety Analysis (JSA)", "Site safety inspections", "Specialized assessments (Fire, COSHH, etc.)"] },
        { title: "5. Procedure & System Development", items: ["HSE policies and manuals", "Emergency response plans", "Project specific HSE plans"] },
        { title: "6. Specialized HSE Support", items: ["Fully outsourced HSE department", "On-demand HSE Officer services"] },
        { title: "7. Environmental Management", items: ["Environmental compliance audits", "Waste & pollution control plans", "Sustainable practice integration"] },
        { title: "8. Safety Culture & Leadership", items: ["Safety leadership programs", "Management training", "Culture alignment"] },
        { title: "9. Contractor Safety Management", items: ["Contractor HSE pre-qualification", "Performance monitoring"] },
        { title: "10. Occupational Health", items: ["Health risk assessments", "Medical check programs", "First aid procedures"] },
        { title: "11. Digital HSE Solutions", items: ["Digitization of SMS", "Custom real-time dashboards", "Digital audit & training tools"] },
        { title: "12. OHS Incident Analysis & Trend Intelligence", items: ["Comprehensive investigations", "Incident trend analysis", "Data-driven risk prevention"] }
      ]
    },
    ar: {
      navServices: "خدماتنا",
      navAbout: "من نحن",
      navContact: "اتصل بنا",
      heroTitle: "شريككم الموثوق لأماكن عمل أكثر أماناً واستدامة ومرونة",
      heroDesc: "استشارات متخصصة في الصحة والسلامة والبيئة والتنمية المستدامة. نحمي أفرادكم، نحافظ على البيئة، ونضمن استمرارية أعمالكم.",
      ctaButton: "إرسال استفسار",
      whoWeAreTitle: "من نحن",
      whoWeAreDesc: "نحن فريق من استشاريي الصحة والسلامة والبيئة والاستدامة المؤهلين تأهيلاً عالياً. نجمع بين المعرفة التقنية العميقة في السلامة والصحة والبيئة وممارسات الأعمال المستدامة.",
      visionTitle: "رؤيتنا",
      vision: "أن نكون العلامة التجارية الأكثر ثقة واعترافاً في مجال استشارات السلامة والصحة والبيئة والتنمية المستدامة.",
      missionTitle: "مهمتنا",
      mission: "تمكين المؤسسات بحلول خبيرة في الصحة والسلامة والبيئة وأنظمة إدارة متكاملة.",
      servicesTitle: "خدماتنا المتخصصة",
      inquiryTitle: "طلب استشارة مهنية",
      inquirySub: "أدخل بياناتك وسيقوم مستشارونا بالتواصل معك.",
      nameLabel: "الاسم الكامل",
      emailLabel: "البريد الإلكتروني للعمل",
      phoneLabel: "رقم التواصل",
      messageLabel: "تفاصيل المشروع / الاستفسار",
      sendButton: "إرسال الطلب",
      sending: "جاري المعالجة...",
      successTitle: "شكراً لتواصلكم!",
      successBody: "لقد تم استلام طلبكم بنجاح. سيقوم أحد مستشارينا بمراجعة التفاصيل والتواصل معكم في أقرب وقت ممكن.",
      errorMsg: "حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة.",
      backBtn: "إرسال رسالة أخرى",
      services: [
        { title: "1. الشهادات الدولية وأنظمة الإدارة", items: ["ISO 45001 (الصحة والسلامة المهنية)", "ISO 9001 (إدارة الجودة)", "ISO 14001 (الإدارة البيئية)", "أنظمة إدارة متكاملة (IMS)"] },
        { title: "2. تدقيق السلامة والامتثال", items: ["تدقيق شامل للسلامة والامتثال", "مراجعات الاستعداد للتفتيش الرقابي", "مراجعة وثائق الصحة والسلامة"] },
        { title: "3. دعم التدريب", items: ["تحليل الاحتياجات التدريبية", "تدريبات إنقاذ الحياة", "تدريبات مهنية متخصصة"] },
        { title: "4. إدارة وتقييم المخاطر", items: ["تحليل مخاطر مكان العمل (JSA)", "تفتيش مواقع العمل", "تقييمات المخاطر المتخصصة"] },
        { title: "5. تطوير الإجراءات والأنظمة", items: ["سياسات وإجراءات الصحة والسلامة", "خطط الاستجابة للطوارئ", "خطط الصحة والسلامة للمشاريع"] },
        { title: "6. الدعم المتخصص في الصحة والسلامة والبيئة", items: ["إدارة خارجية كاملة للصحة والسلامة", "خدمات مستشار عند الطلب"] },
        { title: "7. الإدارة البيئية", items: ["تدقيق الامتثال البيئي", "خطط مكافحة التلوث", "دمج الممارسات المستدامة"] },
        { title: "8. ثقافة السلامة والقيادة", items: ["برامج القيادة في السلامة", "تدريب الإدارة", "تحسين ثقافة السلامة"] },
        { title: "9. إدارة سلامة المقاولين", items: ["تأهيل المقاولين مسبقاً", "مراقبة الأداء المستمرة"] },
        { title: "10. الصحة المهنية", items: ["تقييمات مخاطر الصحة المهنية", "برامج الفحوصات الطبية", "إجراءات الإسعافات الأولية"] },
        { title: "11. الحلول الرقمية للصحة والسلامة والبيئة", items: ["رقمنة نظام إدارة السلامة (SMS)", "لوحات مؤشرات رقمية آنية", "أدوات رقمية للتدقيق والتدريب"] },
        { title: "12. التحقيق في حوادث الصحة و السلامة المهنية", items: ["تحقيقات شاملة في الحوادث", "تحليل أنماط واتجاهات الحوادث", "رؤى لمنع التكرار"] }
      ]
    }
  };

  const current = content[lang];

  return (
    <main className={`min-h-screen bg-white font-sans ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* Navigation */}
      <nav className="p-4 border-b flex justify-between items-center bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm px-6 md:px-12 text-blue-900">
        <div className="font-black text-2xl tracking-tighter">AL SAFETY</div>
        <div className="hidden md:flex gap-8 items-center font-medium">
          <a href="#services" className="hover:text-blue-600 transition">{current.navServices}</a>
          <a href="#about" className="hover:text-blue-600 transition">{current.navAbout}</a>
          <button onClick={scrollToContact} className="bg-blue-900 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-800 transition">
            {current.navContact}
          </button>
        </div>
        <div className="flex gap-2 border-l pl-4 ml-4">
          <button onClick={() => setLang('en')} className={`w-8 h-8 flex items-center justify-center text-xs font-bold rounded-full transition ${lang === 'en' ? 'bg-blue-900 text-white' : 'hover:bg-slate-100 text-slate-400'}`}>EN</button>
          <button onClick={() => setLang('ar')} className={`w-8 h-8 flex items-center justify-center text-xs font-bold rounded-full transition ${lang === 'ar' ? 'bg-blue-900 text-white' : 'hover:bg-slate-100 text-slate-400'}`}>AR</button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto z-10 relative">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight">
            {current.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mb-10">
            {current.heroDesc}
          </p>
          <button onClick={scrollToContact} className="bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-800 transition shadow-xl shadow-blue-900/20">
            {current.ctaButton}
          </button>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-900 text-white border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-blue-400 font-bold mb-4">{current.whoWeAreTitle}</h2>
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-slate-200">{current.whoWeAreDesc}</p>
            </div>
            <div className="grid gap-6">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold mb-3 text-blue-400">{current.visionTitle}</h3>
                <p className="text-slate-400">{current.vision}</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold mb-3 text-blue-400">{current.missionTitle}</h3>
                <p className="text-slate-400">{current.mission}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-16 text-center text-slate-900">{current.servicesTitle}</h2>
        <div className="grid gap-3 max-w-4xl mx-auto">
          {current.services.map((service, idx) => (
            <div 
              key={idx} 
              className={`group border-2 rounded-2xl transition-all cursor-pointer ${expandedIndex === idx ? 'border-blue-600 bg-blue-50/30' : 'border-slate-100 bg-white hover:border-slate-300 shadow-sm'}`}
              onClick={() => toggleService(idx)}
            >
              <div className="p-6 flex justify-between items-center text-lg md:text-xl font-bold text-slate-800">
                {service.title}
                <span className={`transition-transform ${expandedIndex === idx ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}>▼</span>
              </div>
              {expandedIndex === idx && (
                <div className="px-6 pb-8 animate-in fade-in slide-in-from-top-2">
                  <div className="h-px bg-blue-200/50 mb-6" />
                  <ul className="space-y-4">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-slate-700 flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <span className="text-lg font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry-section" className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">{current.inquiryTitle}</h2>
            <p className="text-lg text-slate-600 mb-8">{current.inquirySub}</p>
            <div className="flex items-center gap-4 text-slate-800 font-bold">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-mono">@</div>
              inquiry@alsafety.info
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl shadow-blue-900/5 border border-slate-200">
            {status === 'success' ? (
              <div className="text-center py-8 animate-in zoom-in-95">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{current.successTitle}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{current.successBody}</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-blue-900 font-bold border-b-2 border-blue-900 hover:text-blue-700 transition"
                >
                  {current.backBtn}
                </button>
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-black text-black mb-2 uppercase tracking-wider">{current.nameLabel}</label>
                  <input name="name" required type="text" className="w-full p-4 rounded-xl border border-slate-300 bg-white text-black font-medium focus:ring-2 focus:ring-blue-900 outline-none transition" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-black text-black mb-2 uppercase tracking-wider">{current.emailLabel}</label>
                    <input name="email" required type="email" className="w-full p-4 rounded-xl border border-slate-300 bg-white text-black font-medium focus:ring-2 focus:ring-blue-900 outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-black mb-2 uppercase tracking-wider">{current.phoneLabel}</label>
                    <input name="phone" required type="tel" className={`w-full p-4 rounded-xl border border-slate-300 bg-white text-black font-medium focus:ring-2 focus:ring-blue-900 outline-none transition ${lang === 'ar' ? 'text-right' : 'text-left'}`} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-black text-black mb-2 uppercase tracking-wider">{current.messageLabel}</label>
                  <textarea name="message" required rows={4} className="w-full p-4 rounded-xl border border-slate-300 bg-white text-black font-medium focus:ring-2 focus:ring-blue-900 outline-none transition"></textarea>
                </div>
                
                {status === 'error' && <p className="text-red-600 font-bold mb-4">{current.errorMsg}</p>}

                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="w-full bg-blue-900 text-white font-black py-5 rounded-xl hover:bg-blue-800 transition transform hover:scale-[1.02] active:scale-[0.98] disabled:bg-slate-400 shadow-lg"
                >
                  {isSubmitting ? current.sending : current.sendButton}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-blue-900">
          <div className="text-2xl font-black tracking-tighter">AL SAFETY</div>
          <div className="text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} Alsafety Consultancy Bahrain.
          </div>
        </div>
      </footer>
    </main>
  );
}