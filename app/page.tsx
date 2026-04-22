"use client";
import React, { useState } from 'react';
import { Shield, Phone, Mail, MapPin, Send, Clock, HardHat, CheckCircle, Leaf, Award, Briefcase, BarChart } from 'lucide-react';
import { sendInquiry } from './actions';

export default function AlsafetyFinalDemo() {
  const [status, setStatus] = useState("");

  const isoStandards = [
    { 
      code: "ISO 9001:2015", 
      title: "Quality Management", 
      desc: "The gold standard for ensuring consistent quality, customer satisfaction, and operational efficiency.",
      icon: <Award className="text-blue-600" size={32} />
    },
    { 
      code: "ISO 14001:2015", 
      title: "Environmental Management", 
      desc: "Framework for reducing environmental footprint, waste management, and sustainable business growth.",
      icon: <Leaf className="text-green-600" size={32} />
    },
    { 
      code: "ISO 45001:2018", 
      title: "Health & Safety", 
      desc: "International standard for occupational health and safety, protecting your most valuable asset: your employees.",
      icon: <Shield className="text-red-600" size={32} />
    }
  ];

  const coreServices = [
    { title: "Internal & Gap Audits", desc: "Thorough assessment of your current systems against international benchmarks." },
    { title: "Risk Assessment", desc: "Identifying operational and environmental hazards before they become liabilities." },
    { title: "Management Training", desc: "Specialized HR and leadership training to maintain certification standards." },
    { title: "Documentation Support", desc: "Full assistance in preparing manuals, SOPs, and compliance records." }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navbar with BIGGER LOGO */}
      <nav className="h-24 bg-white border-b flex items-center justify-between px-10 sticky top-0 z-50 shadow-sm">
        <div className="flex flex-col">
          <span className="font-black text-3xl tracking-tighter text-blue-900 leading-none">ALSAFETY</span>
          <span className="text-xs font-bold text-blue-600 tracking-[0.2em]">CONSULTANCY SERVICES</span>
        </div>
        <div className="hidden md:flex space-x-10 font-bold text-sm text-slate-600">
          <a href="#iso" className="hover:text-blue-600 transition">ISO STANDARDS</a>
          <a href="#services" className="hover:text-blue-600 transition">SERVICES</a>
          <a href="#contact" className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">GET IN TOUCH</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-24 px-10 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-xs font-bold mb-6">
              <CheckCircle size={14} /> <span>PREMIUM CONSULTANCY IN BAHRAIN</span>
            </div>
            <h1 className="text-6xl font-black text-slate-900 mb-6 leading-tight">
              Leading the Way in <br/><span className="text-blue-600 text-7xl italic">Global Standards.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed border-l-4 border-blue-600 pl-6">
              Alsafety Consultancy Services provides end-to-end certification support for ISO 9001, 14001, and 45001. We transform your operations into world-class systems.
            </p>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800" alt="Consultancy" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* ISO Section */}
      <section id="iso" className="py-24 px-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Core ISO Certifications</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Expert implementation and gap analysis for international management standards.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {isoStandards.map((iso, i) => (
            <div key={i} className="p-10 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
              <div className="mb-6">{iso.icon}</div>
              <h3 className="text-xs font-bold text-blue-600 mb-2">{iso.code}</h3>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{iso.title}</h4>
              <p className="text-slate-600 leading-relaxed">{iso.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Services Section */}
      <section id="services" className="py-24 bg-slate-900 text-white px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center">Comprehensive Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, i) => (
              <div key={i} className="border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition">
                <Briefcase className="text-blue-400 mb-4" />
                <h4 className="text-lg font-bold mb-2">{service.title}</h4>
                <p className="text-slate-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Contact Section */}
      <section id="contact" className="py-24 px-10 bg-white">
        <div className="max-w-6xl mx-auto bg-slate-50 rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-sm border border-slate-100">
          
          <div className="p-16 flex-1">
            <h2 className="text-4xl font-black mb-4">Request a Demo</h2>
            <p className="text-slate-500 mb-10">Fill the form below and our lead consultant will contact you.</p>
            <form action={async (formData) => {
              const res = await sendInquiry(formData);
              setStatus(res.success ? "Success! We'll call you shortly." : "Error. Please try again.");
            }} className="space-y-4">
              <input name="name" placeholder="Contact Person Name" required className="w-full p-4 bg-white rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600" />
              <input name="email" type="email" placeholder="Business Email" required className="w-full p-4 bg-white rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600" />
              <textarea name="message" placeholder="Describe your project requirements..." className="w-full p-4 bg-white rounded-xl h-32 border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600"></textarea>
              <button className="w-full bg-blue-600 text-white font-black py-5 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                SEND REQUEST <Send size={18}/>
              </button>
              {status && <p className="text-center font-bold text-blue-600">{status}</p>}
            </form>
          </div>

          <div className="bg-blue-600 p-16 text-white w-full md:w-[450px] flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-10">Direct Contact</h3>
            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <Phone size={24} className="text-blue-200 mt-1"/> 
                <div><p className="text-xs font-bold uppercase opacity-60">Call Us Today</p><p className="text-2xl font-black">+973 33133032</p></div>
              </div>
              <div className="flex gap-6 items-start">
                <Mail size={24} className="text-blue-200 mt-1"/> 
                <div><p className="text-xs font-bold uppercase opacity-60">Email Address</p><p className="text-xl font-bold">sales@alsafety.info</p></div>
              </div>
              <div className="flex gap-6 items-start">
                <MapPin size={24} className="text-blue-200 mt-1"/> 
                <div><p className="text-xs font-bold uppercase opacity-60">Location</p><p className="font-bold">Manama, Kingdom of Bahrain</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 text-xs tracking-widest font-bold uppercase">
        © {new Date().getFullYear()} Alsafety Consultancy Services • Excellence In Safety
      </footer>
    </div>
  );
}