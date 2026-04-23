"use client";
import React, { useState } from 'react';
import { Shield, Phone, Mail, MapPin, Send, Clock, CheckCircle, Leaf, Award, Briefcase, Activity, Users, FileText, Search } from 'lucide-react';
import { sendInquiry } from './actions';

export default function AlsafetyFinal() {
  const [status, setStatus] = useState("");

  const serviceCategories = [
    { title: "ISO & Management Systems", icon: <Award />, items: ["ISO 45001 (OH&S) Systems", "ISO 9001 (Quality) Systems", "ISO 14001 (Environmental)", "IMS Integrated Systems", "Standards Updates"] },
    { title: "Safety & Compliance Audit", icon: <Search />, items: ["Safety Audits Conducted", "Regulatory Preparedness", "HSE Record Reviews"] },
    { title: "Training & Development", icon: <Users />, items: ["Training Need Analysis", "COSHH Instruction", "Manual Handling", "Risk Assessment Training", "Life Saving Training"] },
    { title: "Risk Management", icon: <Shield />, items: ["Workplace JSA", "Site Safety Inspections", "Fire & Ergonomic Risk Analysis"] },
    { title: "System Development", icon: <FileText />, items: ["HSE Policies & Manuals", "Emergency Response Plans", "Project-Specific HSE Plans"] },
    { title: "Specialized HSE Support", icon: <Briefcase />, items: ["Outsourced HSE Depts", "On-Demand HSE Officers", "Incident Investigation"] },
    { title: "Environmental Management", icon: <Leaf />, items: ["Environmental Audits", "Waste & Pollution Control"] },
    { title: "Safety Culture", icon: <Activity />, items: ["Leadership Enhancement", "Management Training"] },
    { title: "Contractor Safety", icon: <Users />, items: ["Prequalification", "Performance Monitoring"] },
    { title: "Occupational Health", icon: <Activity />, items: ["Health Risk Assessments", "Medical Check Planning", "First Aid Programs"] }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <nav className="h-24 border-b flex items-center justify-between px-10 sticky top-0 bg-white z-50">
        <div className="flex flex-col">
          <span className="font-black text-3xl text-blue-900 tracking-tighter">ALSAFETY</span>
          <span className="text-[10px] font-bold text-blue-600 tracking-[0.3em]">CONSULTANCY SERVICES</span>
        </div>
        <a href="#contact" className="bg-blue-900 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest">Inquiry</a>
      </nav>

      <section className="py-20 bg-slate-50 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">Safe Systems. <span className="text-blue-600">Global Standards.</span></h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">Comprehensive HSE & ISO consultancy for Bahrain's leading enterprises.</p>
      </section>

      <section id="services" className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceCategories.map((cat, i) => (
          <div key={i} className="p-8 border rounded-3xl hover:shadow-xl transition-all group bg-white">
            <div className="mb-4 text-blue-600 group-hover:scale-110 transition-transform w-fit">{cat.icon}</div>
            <h3 className="font-black text-xl mb-4 text-slate-800 uppercase tracking-tight">{cat.title}</h3>
            <ul className="space-y-2">
              {cat.items.map((item, idx) => (
                <li key={idx} className="text-sm text-slate-500 flex items-start gap-2">
                  <CheckCircle size={14} className="text-blue-500 mt-1 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section id="contact" className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
          <div className="p-12 flex-1">
            <h2 className="text-3xl font-black mb-8">Send an Inquiry</h2>
            <form action={async (f) => { const r = await sendInquiry(f); setStatus(r.success ? "Success! Check inquiry@alsafety.info" : "Error: Check DNS SPF records."); }} className="space-y-4">
              <input name="name" placeholder="Contact Name" required className="w-full p-4 bg-slate-50 rounded-xl outline-none border focus:border-blue-600" />
              <input name="email" type="email" placeholder="Your Email" required className="w-full p-4 bg-slate-50 rounded-xl outline-none border focus:border-blue-600" />
              <textarea name="message" placeholder="Which services do you require?" className="w-full p-4 bg-slate-50 rounded-xl h-32 outline-none border focus:border-blue-600"></textarea>
              <button className="w-full bg-blue-600 text-white font-black py-5 rounded-xl hover:bg-blue-700">SUBMIT REQUEST</button>
              {status && <p className="text-center font-bold text-blue-600 mt-4">{status}</p>}
            </form>
          </div>
          <div className="bg-blue-600 p-12 text-white w-full md:w-[400px]">
            <h3 className="text-xl font-bold mb-10">Direct Contact</h3>
            <div className="space-y-8">
              <div className="flex gap-4"><Phone /> <div><p className="text-xs opacity-70">WhatsApp</p><p className="text-xl font-bold">+973 33133032</p></div></div>
              <div className="flex gap-4"><Mail /> <div><p className="text-xs opacity-70">Email</p><p className="text-lg font-bold">inquiry@alsafety.info</p></div></div>
              <div className="flex gap-4"><MapPin /> <div><p className="text-xs opacity-70">Address</p><p className="font-bold text-sm">Manama, Bahrain</p></div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}