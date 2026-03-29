'use client';

import { motion } from 'framer-motion';
import { Target, Lightbulb, ShieldCheck, Award, Users, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { fadeUp, stagger } from '@/lib/animations';

export default function About() {
  const values = [
    { icon: <ShieldCheck className="w-7 h-7" />, title: 'Integrity', desc: 'Honesty and transparency in every project we undertake.' },
    { icon: <Target className="w-7 h-7" />, title: 'Excellence', desc: 'Precision engineering and continuous innovation.' },
    { icon: <Award className="w-7 h-7" />, title: 'Timeliness', desc: 'On-schedule delivery without quality compromise.' },
    { icon: <ShieldCheck className="w-7 h-7" />, title: 'Safety First', desc: 'Highest safety standards for all stakeholders.' },
    { icon: <Lightbulb className="w-7 h-7" />, title: 'Client Focus', desc: "Tailored solutions for every client's unique goals." },
    { icon: <Users className="w-7 h-7" />, title: 'Teamwork', desc: 'Collaborative culture driving exceptional outcomes.' },
  ];

  const milestones = [
    { year: '2014', event: 'Company founded in Rajkot, Gujarat' },
    { year: '2016', event: 'First major power substation delivered' },
    { year: '2018', event: 'Expanded to WTG infrastructure across India' },
    { year: '2020', event: 'Achieved 100% safety compliance record' },
    { year: '2023', event: '15+ landmark projects delivered pan-India' },
    { year: '2025', event: 'Expansion into new renewable energy segments' },
  ];

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-blue-900 z-0" />
        <div className="absolute inset-0 bg-grid opacity-20 z-0" />
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Solar panels aerial view"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-900 to-transparent z-10" />

        {/* Orbs */}
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] z-0" />
        <div className="absolute bottom-20 left-1/4 w-60 h-60 bg-blue-400/15 rounded-full blur-[80px] z-0" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} custom={0} className="mb-5">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-5 py-2 rounded-full">
                Our Story
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp} custom={1}
              className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
            >
              About{' '}
              <span className="text-secondary-light">BlueNeck Energy</span>
              <br />
              <span className="text-white/80 text-4xl md:text-5xl">Enterprises</span>
            </motion.h1>
            <motion.p
              variants={fadeUp} custom={2}
              className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Driving India's infrastructure development with world-class Engineering,
              Procurement, and Construction (EPC) solutions since 2014.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── VISION & MISSION ─────────────────────────────── */}
      <section className="py-28 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative p-10 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden group card-lift"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target className="w-48 h-48 text-primary" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/30 flex items-center justify-center text-primary dark:text-blue-400 mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Our Vision</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  To become a nationally recognized EPC partner known for delivering innovative,
                  reliable, and sustainable infrastructure solutions that drive India's energy
                  and economic growth.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative p-10 rounded-3xl bg-gradient-to-br from-primary to-blue-900 text-white overflow-hidden group card-lift"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -right-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Lightbulb className="w-48 h-48 text-white" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center text-secondary-light mb-6">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-black mb-4">Our Mission</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  To deliver comprehensive EPC solutions tailored to client needs, upholding
                  the highest standards of quality, safety, and sustainability — while building
                  lasting partnerships founded on transparency and trust.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── DIRECTOR DETAILS ────────────────────────────── */}
      <section className="py-28 bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-100 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-900 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="section-label">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-3">
              Meet Our <span className="text-gradient">Director</span>
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto">
              Visionary leadership driving excellence across every project we deliver.
            </p>
          </motion.div>

          {/* Director Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative p-1 rounded-3xl bg-gradient-to-br from-secondary/60 via-blue-500/40 to-primary/60">
              <div className="relative rounded-[22px] bg-white dark:bg-slate-900 overflow-hidden">
                {/* Inner decorative glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

                <div className="relative flex flex-col md:flex-row items-center md:items-start gap-10 p-10 md:p-14">
                  {/* Photo */}
                  <div className="flex-shrink-0 flex flex-col items-center gap-4">
                    <div className="relative">
                      {/* Glow ring */}
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-secondary via-blue-500 to-primary blur-md opacity-60" />
                      <div className="relative w-52 h-52 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                        <Image
                          src="/images/director.jpeg"
                          alt="Er. Harshdeep Singh – Managing Director & Co-Founder"
                          fill
                          className="object-cover object-top"
                          sizes="208px"
                          priority
                        />
                      </div>
                    </div>
                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-blue-600 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg tracking-wide uppercase">
                      <Award className="w-3.5 h-3.5" /> Co-Founder
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight mb-1">
                      Er. Harshdeep Singh
                    </h3>
                    <p className="text-secondary font-semibold text-lg mb-6 tracking-wide">
                      Managing Director &amp; Co-Founder
                    </p>

                    {/* Divider */}
                    <div className="w-16 h-1 rounded-full bg-gradient-to-r from-secondary to-blue-500 mb-6 mx-auto md:mx-0" />

                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                      A Civil Engineer with core expertise in Substation and Wind Energy projects, leading
                      the organization with a vision for excellence, strong execution, and sustainable growth.
                      He plays a key role in driving strategic direction and delivering high-quality
                      infrastructure solutions.
                    </p>

                    {/* Expertise pills */}
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      {['Substation Projects', 'Wind Energy', 'Civil Engineering', 'Strategic Leadership', 'Infrastructure'].map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 rounded-full text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-secondary/50 hover:text-secondary transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT DETAIL ────────────────────────────────── */}
      <section className="py-0 pb-28 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full order-2 lg:order-1"
            >
              <span className="section-label">Who We Are</span>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mt-4 mb-6 leading-tight">
                A Decade of Building{' '}
                <span className="text-gradient">India's Backbone</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Founded in 2014 in Rajkot, Gujarat, BlueNeck Energy has grown from a local
                civil contractor to a pan-India EPC company trusted by leading energy developers.
              </p>
              <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Our multidisciplinary team of engineers, safety officers, and project managers brings
                domain expertise across power, wind, civil, and pipeline segments, ensuring every
                project meets the highest benchmark for quality and compliance.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Zap className="w-5 h-5" />, label: '15+ Projects' },
                  { icon: <Users className="w-5 h-5" />, label: '200+ Workforce' },
                  { icon: <CheckCircle2 className="w-5 h-5" />, label: '100% Safety' },
                  { icon: <Award className="w-5 h-5" />, label: 'ISO Certified' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <span className="text-secondary">{item.icon}</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex">
                Work With Us <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-secondary/25 to-blue-500/15 rounded-3xl blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=75"
                    alt="Construction site - team at work"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                    quality={75}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ──────────────────────────────────── */}
      <section className="py-28 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="section-label">What We Stand For</span>
            </motion.div>
            <motion.h2
              variants={fadeUp} custom={1}
              className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-3"
            >
              Our Core <span className="text-gradient">Values</span>
            </motion.h2>
            <motion.p
              variants={fadeUp} custom={2}
              className="mt-4 text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto"
            >
              The principles that guide every decision and project we undertake.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                custom={idx}
                className="group p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 card-lift gradient-border text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-5 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{value.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TIMELINE ─────────────────────────────────────── */}
      <section className="py-28 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="section-label">Our Journey</span>
            </motion.div>
            <motion.h2
              variants={fadeUp} custom={1}
              className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-3"
            >
              Key <span className="text-gradient">Milestones</span>
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-blue-500 to-transparent hidden md:block" />

            <div className="space-y-8 md:pl-20">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6 group"
                >
                  {/* Dot */}
                  <div className="hidden md:flex absolute left-0 w-16 h-16 -translate-x-0 items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-secondary border-4 border-white dark:border-slate-900 shadow-md group-hover:scale-125 transition-transform duration-300" />
                  </div>

                  <div className="flex-1 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-secondary/40 transition-colors duration-300">
                    <span className="text-xs font-black tracking-widest uppercase text-secondary mb-2 block">{m.year}</span>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
