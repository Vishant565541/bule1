'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Linkedin, Facebook, Instagram } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.1 }
  })
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      color: 'from-blue-400 to-indigo-600',
      lines: ['+91-7770803338', '+91-9099455690', '+91-9099555551'],
      link: 'tel:+917770803338',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      color: 'from-secondary to-green-600',
      lines: ['Shivshaktienterorise3316@gmail.com'],
      link: 'mailto:Shivshaktienterorise3316@gmail.com',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      color: 'from-orange-400 to-rose-600',
      lines: ['Near old marketing yard gate no. 2', 'Rajkot, Gujarat 360003', 'India'],
      link: 'https://maps.google.com/?q=Near+old+marketing+yard+gate+no.+2,+Rajkot,+Gujarat,+360003,+India',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      color: 'from-violet-400 to-purple-600',
      lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: Closed'],
      link: null,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-24 pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-blue-900 z-0" />
        <div className="absolute inset-0 bg-grid opacity-20 z-0" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[130px] z-0" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} custom={0} className="mb-5">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-5 py-2 rounded-full">
                Talk To Us
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp} custom={1}
              className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
            >
              Get in <span className="text-secondary-light">Touch</span>
            </motion.h1>
            <motion.p
              variants={fadeUp} custom={2}
              className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              We're here to help and answer any questions you have. We look forward
              to hearing from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─────────────────────────────────── */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Contact cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="-translate-y-10"
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="block p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-secondary/40 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 group card-lift h-full"
                  >
                    <ContactCardContent item={item} />
                  </a>
                ) : (
                  <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 h-full">
                    <ContactCardContent item={item} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 p-8 md:p-10"
            >
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
                Send Us a Message
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-500 dark:text-slate-400">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      label="Full Name"
                      id="name"
                      type="text"
                      placeholder="Rajesh Mehta"
                      value={formData.name}
                      onChange={(v) => setFormData(p => ({ ...p, name: v }))}
                      required
                    />
                    <FormField
                      label="Email Address"
                      id="email"
                      type="email"
                      placeholder="rajesh@example.com"
                      value={formData.email}
                      onChange={(v) => setFormData(p => ({ ...p, email: v }))}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      label="Phone Number"
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(v) => setFormData(p => ({ ...p, phone: v }))}
                    />
                    <FormField
                      label="Subject"
                      id="subject"
                      type="text"
                      placeholder="Project Enquiry"
                      value={formData.subject}
                      onChange={(v) => setFormData(p => ({ ...p, subject: v }))}
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300 block">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary dark:text-white transition-all resize-none text-sm"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right side - info + social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {/* Quick contact CTA */}
              <div className="bg-gradient-to-br from-primary to-blue-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-3">Prefer to Call?</h3>
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    Our project managers are available Mon–Sat, 9AM to 6PM.
                  </p>
                  <a
                    href="tel:+917770803338"
                    className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur border border-white/20 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    +91-7770803338
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">Follow Us</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Stay connected for project updates and news.</p>
                <div className="flex gap-3">
                  {[
                    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
                    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook', color: 'hover:bg-blue-500' },
                    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram', color: 'hover:bg-pink-500' },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      aria-label={s.label}
                      className={`w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 ${s.color} hover:text-white flex items-center justify-center text-slate-600 dark:text-slate-400 transition-all duration-300`}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 flex-1 min-h-[200px]">
                <iframe
                  src="https://maps.google.com/maps?q=Near+old+marketing+yard+gate+no.+2,+Rajkot,+Gujarat,+360003,+India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 220 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale dark:invert contrast-75 dark:contrast-100"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCardContent({ item }: { item: { icon: React.ReactNode; title: string; color: string; lines: string[] } }) {
  return (
    <>
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
        {item.icon}
      </div>
      <h3 className="font-black text-slate-900 dark:text-white text-base mb-2">{item.title}</h3>
      {item.lines.map((line, i) => (
        <p key={i} className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{line}</p>
      ))}
    </>
  );
}

function FormField({
  label, id, type, placeholder, value, onChange, required
}: {
  label: string; id: string; type: string; placeholder: string;
  value: string; onChange: (v: string) => void; required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-slate-700 dark:text-slate-300 block">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all text-sm"
        required={required}
      />
    </div>
  );
}
