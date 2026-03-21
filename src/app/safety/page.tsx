'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, HeartPulse, Leaf, HardHat, CheckCircle2, AlertTriangle, BookOpen, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { fadeUp, stagger } from '@/lib/animations';

export default function Safety() {
  const policies = [
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: 'Zero Harm Policy',
      desc: 'Our fundamental belief is that all incidents are preventable. We engineer safety into every phase of every project.',
      color: 'from-red-500 to-rose-600',
      bg: 'bg-red-50 dark:bg-red-900/10',
      border: 'border-red-100 dark:border-red-900/30',
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Environmental Protection',
      desc: 'Strict compliance with environmental regulations and proactive mitigation of ecological impact on every site.',
      color: 'from-emerald-500 to-green-600',
      bg: 'bg-emerald-50 dark:bg-emerald-900/10',
      border: 'border-emerald-100 dark:border-emerald-900/30',
    },
    {
      icon: <HardHat className="w-8 h-8" />,
      title: 'Worker Safety Standards',
      desc: 'Mandatory PPE, comprehensive site inductions, toolbox talks, and continuous safety training for all personnel.',
      color: 'from-amber-500 to-orange-600',
      bg: 'bg-amber-50 dark:bg-amber-900/10',
      border: 'border-amber-100 dark:border-amber-900/30',
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: 'Health & Wellbeing',
      desc: 'Supporting the physical and mental health of our workforce through dedicated programs and regular health checks.',
      color: 'from-pink-500 to-rose-500',
      bg: 'bg-pink-50 dark:bg-pink-900/10',
      border: 'border-pink-100 dark:border-pink-900/30',
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Risk Management',
      desc: 'Systematic hazard identification, risk assessment, and proactive mitigation strategies before every project phase.',
      color: 'from-violet-500 to-purple-600',
      bg: 'bg-violet-50 dark:bg-violet-900/10',
      border: 'border-violet-100 dark:border-violet-900/30',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Continuous Training',
      desc: 'Regular upskilling of our workforce in the latest safety protocols, emergency response, and regulatory compliance.',
      color: 'from-sky-500 to-blue-600',
      bg: 'bg-sky-50 dark:bg-sky-900/10',
      border: 'border-sky-100 dark:border-sky-900/30',
    },
  ];

  const safetyStats = [
    { value: '0', label: 'Lost Time Incidents (LTI)', icon: <ShieldAlert className="w-5 h-5" /> },
    { value: '100%', label: 'PPE Compliance Rate', icon: <HardHat className="w-5 h-5" /> },
    { value: '500+', label: 'Safety Training Hours / Year', icon: <BookOpen className="w-5 h-5" /> },
    { value: '15+', label: 'Projects — Zero Harm Record', icon: <CheckCircle2 className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-24 pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-slate-900 z-0" />
        <div className="absolute inset-0 bg-grid opacity-20 z-0" />
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Safety equipment on construction site"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-primary/50 z-0" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-900 to-transparent z-10" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-[130px] z-0" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} custom={0} className="mb-5">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-5 py-2 rounded-full">
                EHS Policy
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp} custom={1}
              className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight max-w-4xl"
            >
              Environment, Health &{' '}
              <span className="text-secondary-light">Safety</span>
            </motion.h1>
            <motion.p
              variants={fadeUp} custom={2}
              className="text-xl text-slate-300 max-w-2xl leading-relaxed"
            >
              Safety isn't just a priority — it's a precondition for everything we do.
              Returning home safely is our highest measure of success on every project.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── SAFETY STATS ─────────────────────────────────── */}
      <section className="py-0 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 -translate-y-10 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl shadow-black/10 border border-slate-100 dark:border-slate-700 overflow-hidden"
          >
            {safetyStats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="text-center py-10 px-6 border-b md:border-b-0 border-r border-slate-100 dark:border-slate-700 last:border-r-0 hover:bg-secondary/5 transition-colors duration-300"
              >
                <div className="flex items-center justify-center gap-2 text-secondary mb-2">
                  {stat.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── OUR COMMITMENT ───────────────────────────────── */}
      <section className="pb-16 pt-4 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="section-label">Our Commitment</span>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mt-4 mb-6 leading-tight">
                A Culture of{' '}
                <span className="text-gradient">Safety First</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                At BlueNeck Energy, our EHS framework isn't a compliance checkbox — it's
                deeply embedded in our company DNA. Every project begins with a comprehensive
                safety plan before a single piece of equipment moves.
              </p>
              <ul className="space-y-3">
                {[
                  'Pre-task Hazard & Risk Analysis (HIRA)',
                  'Mandatory Site Safety Inductions for all workers',
                  'Daily Toolbox Talks and Safety Observations',
                  'Third-party Safety Audits on every major project',
                  'Emergency Response Plans and Mock Drills',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-secondary/20 to-blue-500/15 rounded-3xl blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[440px]">
                  <Image
                    src="https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Safety team on site"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/90 flex items-center justify-center text-white">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">200+ Trained Personnel</p>
                        <p className="text-white/70 text-xs">All certified in site safety protocols</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── EHS POLICIES ─────────────────────────────────── */}
      <section className="py-28 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="section-label">EHS Framework</span>
            </motion.div>
            <motion.h2
              variants={fadeUp} custom={1}
              className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-3"
            >
              Our Safety <span className="text-gradient">Pillars</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {policies.map((policy, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                custom={idx}
                className={`group p-8 rounded-3xl ${policy.bg} border ${policy.border} card-lift transition-all duration-300`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${policy.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {policy.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">{policy.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{policy.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-blue-900 rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-secondary/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Want to Know More About Our EHS Standards?
              </h2>
              <p className="text-slate-300 mb-8">
                Contact us to learn how our safety culture protects people and projects.
              </p>
              <Link href="/contact" className="btn-primary inline-flex">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
