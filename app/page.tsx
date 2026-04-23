"use client";
import React, { useState, useEffect } from 'react';
import { Shield, Phone, Mail, MapPin, Send, CheckCircle, Award, Briefcase, Activity, Users, FileText, Search, Globe } from 'lucide-react';
import { sendInquiry } from './actions';

export default function AlsafetyFinal() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Auto-hide success message after 5 seconds to keep it tidy
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => setIsSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const serviceCategories = [
    { title: "ISO Systems", icon: <Award className="w-5 h-5"/>, items: ["ISO 45001 (OH&S)", "ISO 9001 (Quality)", "ISO 14001 (Env)", "Integrated Systems (IMS)"] },
    { title: "Audits & Compliance", icon: <Search className="w-5 h-5"/>, items: ["Safety Audits", "Regulatory Readiness", "Documentation Review"] },
    { title: "Risk Management", icon: <Shield className="w-5 h-5"/>, items: ["Workplace JSA", "Fire & Ergonomics", "Site Inspections"] },
    { title: "Specialized HSE", icon: <Briefcase className="w-5 h-5"/>, items: ["Outsourced HSE Dept", "Incident Investigation", "On-Demand Officers"] },
    { title: "Training", icon: <Users className="w-5 h-5"/>, items: ["Need Analysis", "COSHH & Manual Handling", "Life Saving Training"] },
    { title: "Health & Env", icon: <Activity className="w-5 h-5"/>, items: ["Occupational Health", "Waste Management", "Medical Check Planning"] }
  ];

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    const result = await sendInquiry(formData);
    setIsSubmitting(false);
    if (result.success) {
      setIsSuccess(true);
    } else {
      alert("Submission failed. Please check your connection.");
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      {/* Tidy Header */}
      <nav className="h-20 border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <div className="bg-blue-900 p-1.5 rounded-lg">
            <Shield className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tight text-slate-900 leading-none">ALSAFETY</span>
            <span className="text-[8px] font-bold text-blue-600 tracking-[0.2em] uppercase">Consultancy</span>
          </div>
        </div>
        <a href="#contact" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Get in touch →</a>
      </nav>

      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest mb-4">Bahrain's Leading HSE Partner</span>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          Reliable Safety <br/><span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Standardized.</span>
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
          Expert-led ISO implementation and occupational health solutions for industrial excellence.
        </p>
      </section>

      {/* Tidy Services Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceCategories.map((cat, i) => (
          <div key={i} className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
            <div className="mb-6 text-blue-600 bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
              {cat.icon}
            </div>
            <h3 className="font-bold text-lg mb-4 text-slate-900 tracking-tight">{cat.title}</h3>
            <ul className="space-y-3">
              {cat.items.map((item, idx) => (
                <li key={idx} className="text-sm text-slate-500 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Contact Section - "Tidied" with state management */}
      <section id="contact" className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 overflow-hidden flex flex-col md:flex-row">
          <div className="p-12 flex-1 relative">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-2">Message Sent</h2>
                <p className="text-slate-500">We'll get back to you shortly.</p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-black mb-8 tracking-tight italic">Work with us.</h2>
                <form action={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input name="name" placeholder="Name" required className="w-full p-4 bg-slate-50 border-transparent border focus:border-blue-600 rounded-xl outline-none transition-all" />
                    <input name="email" type="email" placeholder="Business Email" required className="w-full p-4 bg-slate-50 border-transparent border focus:border-blue-600 rounded-xl outline-none transition-all" />
                  </div>
                  <textarea name="message" placeholder="How can we help?" required className="w-full p-4 bg-slate-50 border-transparent border focus:border-blue-600 rounded-xl h-32 outline-none transition-all resize-none"></textarea>
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 text-white font-bold py-5 rounded-xl hover:bg-blue-600 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Processing..." : "Submit Inquiry"} <Send size={16}/>
                  </button>
                </form>
              </>
            )}
          </div>
          
          <div className="bg-blue-600 p-12 text-white md:w-80 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-xl mb-8">Contact</h3>
              <div className="space-y-6">
                <div className="flex gap-4"><Phone size={18} className="opacity-60"/><p className="text-sm font-semibold">+973 33133032</p></div>
                <div className="flex gap-4"><Mail size={18} className="opacity-60"/><p className="text-sm font-semibold truncate italic">inquiry@alsafety.info</p></div>
                <div className="flex gap-4"><MapPin size={18} className="opacity-60"/><p className="text-sm font-semibold italic text-[11px]">Manama, Bahrain</p></div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-[10px] font-bold opacity-50 tracking-widest uppercase italic">24/7 Support Available</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-100 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 opacity-20 grayscale">
          <Shield className="w-5 h-5" />
          <span className="font-black text-sm">ALSAFETY</span>
        </div>
        <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase italic">© 2026 Bahrain • All Rights Reserved</p>
      </footer>
    </div>
  );
}