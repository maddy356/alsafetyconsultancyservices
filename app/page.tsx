"use client";
import React, { useState } from 'react';
import { Shield, Phone, Mail, MapPin, Send, Clock, HardHat, CheckCircle, Leaf, Award, Briefcase, Activity, Users, FileText, Search } from 'lucide-react';
import { sendInquiry } from './actions';

export default function AlsafetyFinalBuild() {
  const [status, setStatus] = useState("");

  const serviceCategories = [
    {
      title: "ISO & Management Systems",
      icon: <Award className="text-blue-600" />,
      items: ["ISO 45001 (OH&S) Implementation", "ISO 9001 (Quality) Development", "ISO 14001 (Environmental) Systems", "Standards Updates (Single/Multi)", "Integrated Management Systems (IMS)"]
    },
    {
      title: "Safety & Compliance Audit",
      icon: <Search className="text-blue-600" />,
      items: ["Safety & Compliance Audits", "Regulatory Inspection Preparedness", "HSE Documentation Reviews"]
    },
    {
      title: "Training & Development",
      icon: <Users className="text-blue-600" />,
      items: ["HSE Training Need Analysis", "COSHH Instructions", "Manual Handling Training", "Risk Assessment Training", "Life Saving & On-Job Training"]
    },
    {
      title: "Risk Management",
      icon: <Shield className="text-blue-600" />,
      items: ["Workplace Risk & JSA", "Site Safety Inspections", "Fire & Ergonomic Assessments"]
    },
    {
      title: "System Development",
      icon: <FileText className="text-blue-600" />,
      items: ["HSE Policies & Manuals", "Emergency Response Plans", "Project-Specific HSE Plans"]
    },
    {
      title: "Specialized HSE Support",
      icon: <Briefcase className="text-blue-600" />,
      items: ["Outsourced HSE Departments", "On-Demand HSE Advisors", "Incident & Root Cause Analysis"]
    },
    {
      title: "Environmental & Health",
      icon: <Leaf className="text-green-600" />,
      items: ["Environmental Compliance Audits", "Waste & Pollution Control", "Occupational Health Risk Assessment", "Medical Check Planning", "First Aid Programs"]
    },
    {
      title: "Culture & Contractors",
      icon: <Activity className="text-orange-600" />,
      items: ["Safety Leadership Programs", "Management Culture Training", "Contractor Prequalification", "Ongoing Performance Monitoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="h-24 bg-white border-b flex items-center justify-between px-10 sticky top-0 z-50">
        <div className="flex flex-col">
          <span className="font-black text-3xl tracking-tighter text-blue-900 leading-none">ALSAFETY</span>
          <span className="text-[10px] font-bold text-blue-600 tracking-[0.3em]">CONSULTANCY SERVICES</span>
        </div>
        <div className="hidden lg:flex space-x-8 font-bold text-xs text-slate-600 uppercase tracking-widest">
          <a href="#services" className="hover:text-blue-600 transition">Our Services</a>
          <a href="#contact" className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">Contact sales</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20 px-10 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
            Excellence in <span className="text-blue-600">Safety Compliance.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mb-10">
            Comprehensive HSE consultancy, ISO certification support, and risk management solutions tailored for the Bahraini industrial landscape.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition">Book a Consultation</a>
          </div>
        </div>
      </header>

      {/* Expanded Services Grid */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((cat, i) => (
            <div key={i} className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition">
              <div className="mb-4 p-3 bg-blue-50 w-fit rounded-2xl">{cat.icon}</div>
              <h3 className="font-black text-lg mb-4 text-slate-800 border-b pb-2">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-slate-500 flex items-start gap-2">
                    <CheckCircle size={14} className="text-blue-500 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-10 bg-slate-900">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] overflow-hidden flex flex-col md:flex-row">
          <div className="p-12 flex-1 border-r border-slate-50">
            <h2 className="text-3xl font-black mb-8">Service Inquiry</h2>
            <form action={async (formData) => {
              const res = await sendInquiry(formData);
              setStatus(res.success ? "Thank you! Inquiry received." : "Error: Ensure your domain DNS is verified in Resend.");
            }} className="space-y-4">
              <input name="name" placeholder="Contact Person" required className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-600" />
              <input name="email" type="email" placeholder="Business Email" required className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-600" />
              <textarea name="message" placeholder="Please list the specific ISO or HSE services you require..." className="w-full p-4 bg-slate-50 rounded-xl h-32 outline-none focus:ring-2 focus:ring-blue-600"></textarea>
              <button className="w-full bg-blue-600 text-white font-black py-5 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                SUBMIT REQUEST <Send size={18}/>
              </button>
              {status && <p className="text-center font-bold text-blue-600 pt-4">{status}</p>}
            </form>
          </div>

          <div className="bg-blue-600 p-12 text-white w-full md:w-[400px] flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-8">Head Office</h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <Phone size={24} className="text-blue-200" />
                <div><p className="text-xs opacity-70 uppercase font-bold">WhatsApp/Call</p><p className="text-xl font-bold">+973 33133032</p></div>
              </div>
              <div className="flex gap-4">
                <Mail size={24} className="text-blue-200" />
                <div><p className="text-xs opacity-70 uppercase font-bold">Email</p><p className="text-lg font-bold underline">sales@alsafety.info</p></div>
              </div>
              <div className="flex gap-4">
                <MapPin size={24} className="text-blue-200" />
                <div><p className="text-xs opacity-70 uppercase font-bold">Address</p><p className="font-bold">Manama, Kingdom of Bahrain</p></div>
              </div>
              <div className="flex gap-4">
                <Clock size={24} className="text-blue-200" />
                <div><p className="text-xs opacity-70 uppercase font-bold">Office Hours</p><p className="font-bold text-sm">Sun - Thu: 08:00 - 17:00</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase">
        © {new Date().getFullYear()} Alsafety Consultancy Services • Bahrain
      </footer>
    </div>
  );
}