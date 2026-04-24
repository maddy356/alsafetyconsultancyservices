"use client";
import React, { useState, useEffect } from 'react';
import { Shield, Phone, Mail, MapPin, Send, CheckCircle, Award, Briefcase, Activity, Users, Search } from 'lucide-react';
import { sendInquiry } from './actions';

export default function AlsafetyFinal() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => setIsSuccess(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  async function handleSubmit(formData: FormData) {
    // Double-check the email exists in the client-side logic before sending
    const email = formData.get("email");
    if (!email || email.toString().trim() === "") {
      alert("A valid business email is strictly required.");
      return;
    }

    setIsSubmitting(true);
    const result = await sendInquiry(formData);
    setIsSubmitting(false);
    if (result.success) setIsSuccess(true);
    else alert("Connection error. Please check your internet or GoDaddy settings.");
  }

  const services = [
    { title: "ISO Systems", icon: <Award className="w-5 h-5"/>, items: ["ISO 45001", "ISO 9001", "ISO 14001", "IMS"] },
    { title: "Audits", icon: <Search className="w-5 h-5"/>, items: ["Safety Audits", "Regulatory Readiness", "HSE Reviews"] },
    { title: "Risk Mgmt", icon: <Shield className="w-5 h-5"/>, items: ["JSA Analysis", "Fire & Ergonomics", "Inspections"] },
    { title: "Support", icon: <Briefcase className="w-5 h-5"/>, items: ["Outsourced HSE", "Incident Analysis", "On-Demand Officers"] },
    { title: "Training", icon: <Users className="w-5 h-5"/>, items: ["COSHH Instruction", "Manual Handling", "Life Saving"] },
    { title: "Environment", icon: <Activity className="w-5 h-5"/>, items: ["Waste Plans", "Occupational Health", "Compliance"] }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="h-20 border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <div className="bg-blue-900 p-2 rounded-lg"><Shield className="text-white w-5 h-5" /></div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tighter text-slate-900 leading-none">ALSAFETY</span>
            <span className="text-[8px] font-bold text-blue-600 tracking-[0.2em] uppercase">Bahrain</span>
          </div>
        </div>
        <a href="#contact" className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-blue-600 transition-all">Contact Us</a>
      </nav>

      {/* Hero - Updated with H1 for SEO */}
      <section className="py-24 px-6 text-center bg-slate-50">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
          Expert HSE & <br/><span className="text-blue-600">ISO Consultancy in Bahrain.</span>
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed italic">
          Professional consultancy services for ISO standards, safety training, and workplace excellence.
        </p>
      </section>

      {/* Services Grid - Updated with H3 for SEO hierarchy */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="p-8 border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-xl transition-all group">
            <div className="mb-4 text-blue-600 bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">{s.icon}</div>
            <h3 className="font-bold text-lg mb-4 italic uppercase tracking-tight">{s.title}</h3>
            <ul className="space-y-2">
              {s.items.map((item, idx) => (
                <li key={idx} className="text-sm text-slate-500 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-400" /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Tidy Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-100">
        <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row items-stretch">
          <div className="p-12 flex-1">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4"><CheckCircle size={32} /></div>
                <h2 className="text-2xl font-black mb-2">Message Received</h2>
                <p className="text-slate-500">We will contact you via email shortly.</p>
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-5">
                <h2 className="text-2xl font-black mb-6 italic underline decoration-blue-500 underline-offset-4">Business Inquiry</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <input name="name" placeholder="Contact Name" required className="p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 transition-all border border-transparent" />
                  
                  {/* Email field with extra validation */}
                  <input 
                    name="email" 
                    type="email" 
                    placeholder="Business Email" 
                    required 
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    title="Please enter a valid business email address"
                    className="p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 transition-all border border-transparent" 
                  />
                  
                  <input name="phone" type="tel" placeholder="Phone Number" required className="p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 transition-all border border-transparent" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest px-1">How can we help?</label>
                  <textarea name="message" required className="w-full p-4 bg-slate-50 rounded-xl h-32 outline-none focus:ring-2 focus:ring-blue-600 transition-all border border-transparent resize-none"></textarea>
                </div>
                <button 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white font-bold py-5 rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg shadow-blue-900/20"
                >
                  {isSubmitting ? "Sending..." : "Send Request"} <Send size={16}/>
                </button>
              </form>
            )}
          </div>
          
          <div className="bg-slate-900 p-12 text-white md:w-80 flex flex-col justify-center">
            <h3 className="font-bold text-lg mb-8 text-blue-400 uppercase">Contact Details</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-center"><Phone size={18} className="text-blue-500"/><p className="text-sm font-bold">+973 33133032</p></div>
              <div className="flex gap-4 items-center"><Mail size={18} className="text-blue-500"/><p className="text-sm font-bold break-all">inquiry@alsafety.info</p></div>
              <div className="flex gap-4 items-center"><MapPin size={18} className="text-blue-500"/><p className="text-sm font-bold">Manama, Bahrain</p></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 text-[9px] font-bold tracking-[0.3em] uppercase italic opacity-60">
        © 2026 Alsafety Consultancy Services • Excellence in Compliance
      </footer>
    </div>
  );
}