'use client';

import { motion } from 'framer-motion';
import { Sun, Wind, PlugZap, Cone, Settings, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { fadeUp, stagger } from '@/lib/animations';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Solar EPC Solutions',
      icon: <Sun className="w-8 h-8" />,
      desc: 'Complete engineering, procurement, and construction for utility-scale solar PV plants. From site assessment through commissioning.',
      image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Site Assessment & Feasibility', 'PV System Engineering', 'Grid Interconnection', 'Final Commissioning'],
      color: 'from-amber-400 to-orange-500',
      bg: 'bg-amber-50 dark:bg-amber-900/10',
    },
    {
      id: 2,
      title: 'Wind Energy Projects',
      icon: <Wind className="w-8 h-8" />,
      desc: 'Balance of Plant (BoP) services for wind farms including foundations, access roads, and electrical infrastructure.',
      image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['WTG Foundation Work', 'Access Road Construction', 'Cable Laying & Ducting', 'Substation Connection'],
      color: 'from-sky-400 to-blue-600',
      bg: 'bg-sky-50 dark:bg-sky-900/10',
    },
    {
      id: 3,
      title: 'Substation & Power Infrastructure',
      icon: <PlugZap className="w-8 h-8" />,
      desc: 'Design and construction of high-voltage substations, switchyards, and transmission lines.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['HV Substation Design', 'Switchyard Construction', 'Transformer Installation', 'Grid Compliance'],
      color: 'from-indigo-400 to-purple-600',
      bg: 'bg-indigo-50 dark:bg-indigo-900/10',
    },
    {
      id: 4,
      title: 'Civil Construction & Roads',
      icon: <Cone className="w-8 h-8" />,
      desc: 'Heavy civil works including bulk earthworks, drainage, access roads, and structural concrete for energy facilities.',
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['RCC & CC Road Work', 'Crane Pad Construction', 'Drainage Systems', 'Earthworks & Grading'],
      color: 'from-emerald-400 to-green-600',
      bg: 'bg-emerald-50 dark:bg-emerald-900/10',
    },
    {
      id: 5,
      title: 'Pipeline & Utility Works',
      icon: <Settings className="w-8 h-8" />,
      desc: 'Underground infrastructure, trenching, cable laying, and fluid transport pipelines for complex industrial sites.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Underground Trenching', 'Cable & Duct Installation', 'Fluid Pipeline Networks', 'Hydro Testing'],
      color: 'from-teal-400 to-cyan-600',
      bg: 'bg-teal-50 dark:bg-teal-900/10',
    },
    {
      id: 6,
      title: 'Operation & Maintenance (O&M)',
      icon: <Wrench className="w-8 h-8" />,
      desc: 'Lifecycle asset management ensuring optimal performance and longevity of your renewable assets post-construction.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Preventive Maintenance', 'Performance Monitoring', 'Emergency Response', 'Asset Life Extension'],
      color: 'from-rose-400 to-red-600',
      bg: 'bg-rose-50 dark:bg-rose-900/10',
    }
  ];

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-24 pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-blue-900 z-0" />
        <div className="absolute inset-0 bg-grid opacity-20 z-0" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[130px] z-0" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} custom={0} className="mb-5">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-5 py-2 rounded-full">
                What We Offer
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp} custom={1}
              className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
            >
              Our <span className="text-secondary-light">Services</span>
            </motion.h1>
            <motion.p
              variants={fadeUp} custom={2}
              className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Comprehensive EPC solutions delivering excellence across the entire spectrum
              of renewable energy and civil infrastructure.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES GRID ────────────────────────────────── */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 flex flex-col card-lift"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Icon badge */}
                  <div className={`absolute bottom-4 left-4 z-20 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                    {service.desc}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-secondary group-hover:gap-3 transition-all duration-300"
                  >
                    Enquire Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────── */}
      <section className="py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="section-label">Why BlueNeck Energy & Infra Pvt. Ltd.</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-4 mb-6 leading-tight">
                Your Trusted{' '}
                <span className="text-gradient">EPC Partner</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                With over a decade of experience and more than 15 successful projects across India,
                we bring unmatched expertise, reliability, and commitment to every engagement.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'End-to-End Delivery', desc: 'From engineering to commissioning — one partner, zero gaps.' },
                  { title: 'Pan-India Footprint', desc: 'Operational across Gujarat, Rajasthan, Maharashtra, and beyond.' },
                  { title: 'Safety-First Culture', desc: '100% compliance across all projects, zero safety incidents.' },
                  { title: 'Transparent Reporting', desc: 'Real-time project tracking and detailed progress reports.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-0.5">{item.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary inline-flex">
                  Start Your Project <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
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
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[480px]">
                  <Image
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Engineering team at work"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-blue-900 rounded-3xl p-12 md:p-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-secondary/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                Get in touch today for a free consultation and project estimate.
              </p>
              <Link href="/contact" className="btn-primary inline-flex text-base">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
