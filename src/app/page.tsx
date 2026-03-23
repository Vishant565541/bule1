'use client';

<<<<<<< HEAD
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Building2, ChevronRight, Star, Users, CheckCircle2, TrendingUp } from 'lucide-react';
=======
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Target, Building2, ChevronRight, Star, Users, CheckCircle2, TrendingUp, ChevronLeft } from 'lucide-react';
>>>>>>> 9369efa (feat: implement dynamic gallery with framer-motion and cleanup projects page)
import Link from 'next/link';
import Image from 'next/image';
import { fadeUp, stagger } from '@/lib/animations';

<<<<<<< HEAD
export default function Home() {
  const stats = [
    { value: '15+', label: 'Projects Delivered', icon: <TrendingUp className="w-5 h-5" /> },
    { value: '100%', label: 'Safety Compliance', icon: <CheckCircle2 className="w-5 h-5" /> },
    { value: '10+', label: 'Years Experience', icon: <Star className="w-5 h-5" /> },
    { value: 'Pan', label: 'India Execution', icon: <Users className="w-5 h-5" /> },
  ];

  const services = [
    {
      title: 'Power Substation',
      icon: <Zap className="w-7 h-7" />,
      desc: 'End-to-end power substation development, design, and infrastructure solutions.',
      color: 'from-blue-500/20 to-blue-600/5',
    },
    {
      title: 'WTG Infrastructure',
      icon: <Target className="w-7 h-7" />,
      desc: 'Wind Turbine Generator infrastructure, cabling, and approach road construction.',
      color: 'from-secondary/25 to-secondary/5',
    },
    {
      title: 'Civil Construction',
      icon: <Building2 className="w-7 h-7" />,
      desc: 'RCC & CC road work, crane platform construction, and pipeline networks.',
      color: 'from-orange-500/20 to-orange-600/5',
    },
  ];

  const testimonials = [
    { name: 'Rajesh M.', role: 'Project Director', text: 'BlueNeck Energy delivered our substation on time and within budget. Exceptional quality.', rating: 5 },
    { name: 'Anita S.', role: 'Operations Manager', text: 'Their safety standards and professionalism set them apart in the industry.', rating: 5 },
    { name: 'Vikram P.', role: 'Site Engineer', text: "The team's WTG infrastructure expertise is unmatched across Gujarat.", rating: 5 },
  ];
=======
const stats = [
  { value: '15+', label: 'Projects Delivered', icon: <TrendingUp className="w-5 h-5" /> },
  { value: '100%', label: 'Safety Compliance', icon: <CheckCircle2 className="w-5 h-5" /> },
  { value: '10+', label: 'Years Experience', icon: <Star className="w-5 h-5" /> },
  { value: 'Pan', label: 'India Execution', icon: <Users className="w-5 h-5" /> },
];

const services = [
  {
    title: 'Power Substation',
    icon: <Zap className="w-7 h-7" />,
    desc: 'End-to-end power substation development, design, and infrastructure solutions.',
    color: 'from-blue-500/20 to-blue-600/5',
  },
  {
    title: 'WTG Infrastructure',
    icon: <Target className="w-7 h-7" />,
    desc: 'Wind Turbine Generator infrastructure, cabling, and approach road construction.',
    color: 'from-secondary/25 to-secondary/5',
  },
  {
    title: 'Civil Construction',
    icon: <Building2 className="w-7 h-7" />,
    desc: 'RCC & CC road work, crane platform construction, and pipeline networks.',
    color: 'from-orange-500/20 to-orange-600/5',
  },
];

const testimonials = [
  { name: 'Rajesh M.', role: 'Project Director', text: 'BlueNeck Energy delivered our substation on time and within budget. Exceptional quality.', rating: 5 },
  { name: 'Anita S.', role: 'Operations Manager', text: 'Their safety standards and professionalism set them apart in the industry.', rating: 5 },
  { name: 'Vikram P.', role: 'Site Engineer', text: "The team's WTG infrastructure expertise is unmatched across Gujarat.", rating: 5 },
];

const workGallery = [
  {
    title: 'High-Voltage Substation Grid',
    category: 'Power EPC',
    image: '/images/work/work-1.jpeg',
    description: 'Complete electrical infrastructure and grid connectivity solutions.'
  },
  {
    title: 'Wind Turbine Erection',
    category: 'Renewable Energy',
    image: '/images/work/work-2.jpeg',
    description: 'Precision lifting and assembly of wind turbine components.'
  },
  {
    title: 'WTG Infrastructure Development',
    category: 'Civil Works',
    image: '/images/work/work-3.jpeg',
    description: 'Strategic planning and infrastructure for wind energy farms.'
  },
  {
    title: 'Proactive Safety Culture',
    category: 'HSE Excellence',
    image: '/images/work/work-4.jpeg',
    description: 'Daily safety briefings and rigorous standards for field operations.'
  },
  {
    title: 'Precision Groundwork',
    category: 'Civil Engineering',
    image: '/images/work/work-5.jpeg',
    description: 'Advanced site marking and trenching for robust foundation systems.'
  },
  {
    title: 'Sustainable Energy Grid',
    category: 'Green Energy',
    image: '/images/work/work-6.jpeg',
    description: 'Enabling sustainable power distribution across regional networks.'
  },
  {
    title: 'Large-Scale Utility Pipeline',
    category: 'Pipeline EPC',
    image: '/images/work/work-7.jpeg',
    description: 'Precision pipeline networks for industrial and utility applications.'
  },
  {
    title: 'Infrastructure Maintenance',
    category: 'Services',
    image: '/images/work/work-8.jpeg',
    description: 'Ongoing maintenance and optimization for energy infrastructure.'
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % workGallery.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % workGallery.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + workGallery.length) % workGallery.length);
  };
>>>>>>> 9369efa (feat: implement dynamic gallery with framer-motion and cleanup projects page)

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-overlay z-10" />
          <Image
            src="/images/hero-image.png"
            alt="Wind turbines at golden hour"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            quality={85}
          />
        </div>

        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary/12 rounded-full blur-[100px] z-10 pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-32">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-5 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                India's Trusted EPC Partner Since 2014
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-6 tracking-tight leading-[1.05]">
              Powering India's{' '}
              <br className="hidden sm:block" />
              <span className="text-gradient">Infrastructure</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-200/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Comprehensive EPC solutions in power substations, WTG infrastructure,
              civil construction, and pipeline networks — delivered with precision.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/projects" className="btn-outline text-base">
                View Our Projects <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/50 rounded-full scroll-dot" />
          </div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────── */}
      <section className="bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 md:grid-cols-4 -translate-y-10 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="text-center py-10 px-6 border-b md:border-b-0 border-r border-slate-100 dark:border-slate-700 last:border-r-0 hover:bg-secondary/5 transition-colors duration-300"
              >
                <div className="flex items-center justify-center gap-2 text-secondary mb-1">{stat.icon}</div>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT BRIEF ──────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={stagger}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-secondary/25 to-blue-500/15 rounded-3xl blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
                  <Image
                    src="/images/about-image.png"
                    alt="BlueNeck Energy EPC Project Site"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-black text-xl text-slate-900 dark:text-white">ISO</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Certified</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={stagger}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-5"
            >
              <motion.div variants={fadeUp}>
                <span className="section-label">About BlueNeck Energy</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                EPC Solutions <span className="text-gradient">You Can Trust</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                BlueNeck Energy delivers comprehensive infrastructure solutions across India —
                power substations, WTG, civil construction, and pipeline networks.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-3 pt-1">
                {[
                  'Pan-India Execution Capability',
                  'Uncompromising Safety & Compliance',
                  'On-time, Within-budget Delivery',
                  'Certified Engineers & Skilled Workforce',
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="font-medium text-sm">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp} className="pt-2">
                <Link href="/about" className="inline-flex items-center gap-2 font-bold text-secondary hover:text-secondary-light group transition-colors">
                  Discover Our Story
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────── */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
            <motion.div variants={fadeUp}><span className="section-label">Our Expertise</span></motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-3">
              Comprehensive EPC <span className="text-gradient">Solutions</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-slate-600 dark:text-slate-400">From concept to commissioning — we deliver it all.</motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {services.map((service, i) => (
              <motion.div key={i} variants={fadeUp} className="group p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-secondary/40 hover:shadow-xl transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-secondary mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-secondary transition-colors duration-300">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-5">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary group-hover:gap-2.5 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-primary inline-flex">View All Services <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
      {/* ─── COMPANY WORK GALLERY ─────────────────────────── */}
      <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            variants={stagger} 
            viewport={{ once: true }} 
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <div className="max-w-2xl">
              <motion.div variants={fadeUp}><span className="section-label">On-Site Operations</span></motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-3">
                Company Work <span className="text-gradient">Gallery</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-slate-600 dark:text-slate-400">
                A visual showcase of our technical expertise and commitment to safety across India's most demanding infrastructure environments.
              </motion.p>
            </div>
            <motion.div variants={fadeUp}>
              <Link href="/projects" className="btn-outline">Browse All Projects</Link>
            </motion.div>
          </motion.div>

          {!isMounted ? (
            <div className="rounded-[3rem] bg-slate-100 dark:bg-slate-800 h-[400px] md:h-[600px] animate-pulse" />
          ) : (
            <div className="relative group/slider">
              <div className="overflow-hidden rounded-[3rem] relative bg-slate-100 dark:bg-slate-800 h-[400px] md:h-[600px] shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95, x: -20 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={workGallery[currentSlide].image}
                      alt={workGallery[currentSlide].title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="max-w-2xl"
                      >
                        <span className="text-secondary font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
                          {workGallery[currentSlide].category}
                        </span>
                        <h3 className="text-white font-black text-3xl md:text-5xl mb-4 leading-tight">
                          {workGallery[currentSlide].title}
                        </h3>
                        <p className="text-slate-300 text-lg font-light max-w-xl leading-relaxed">
                          {workGallery[currentSlide].description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 h-1.5 bg-white/20 w-full z-20 overflow-hidden">
                  {isAutoPlaying && (
                    <motion.div 
                      key={currentSlide}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="absolute inset-0 bg-secondary"
                    />
                  )}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 md:-left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300 z-30 shadow-xl opacity-0 group-hover/slider:opacity-100 group-hover/slider:translate-x-0 -translate-x-4 md:group-hover/slider:-translate-x-2"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 md:-right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300 z-30 shadow-xl opacity-0 group-hover/slider:opacity-100 group-hover/slider:translate-x-0 translate-x-4 md:group-hover/slider:translate-x-2"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicators */}
              <div className="flex justify-center gap-3 mt-10">
                {workGallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentSlide(i);
                    }}
                    className={`transition-all duration-500 rounded-full h-1.5 ${
                      currentSlide === i ? 'bg-secondary w-10' : 'bg-slate-300 dark:bg-slate-700 w-2 hover:bg-secondary/40'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

>>>>>>> 9369efa (feat: implement dynamic gallery with framer-motion and cleanup projects page)
      {/* ─── TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={{ once: true }} className="text-center mb-14">
            <motion.div variants={fadeUp}><span className="section-label">Client Testimonials</span></motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-3">
              Trusted by <span className="text-gradient">Industry Leaders</span>
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300 relative">
<<<<<<< HEAD
                <div className="absolute top-5 right-7 text-6xl text-secondary/10 font-serif leading-none select-none">"</div>
=======
                <div className="absolute top-5 right-7 text-6xl text-secondary/10 font-serif leading-none select-none">&ldquo;</div>
>>>>>>> 9369efa (feat: implement dynamic gallery with framer-motion and cleanup projects page)
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
<<<<<<< HEAD
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-sm relative z-10">"{t.text}"</p>
=======
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-sm relative z-10">&ldquo;{t.text}&rdquo;</p>
>>>>>>> 9369efa (feat: implement dynamic gallery with framer-motion and cleanup projects page)
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-blue-900" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/12 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={{ once: true }}>
            <motion.div variants={fadeUp}>
              <span className="inline-block bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-semibold px-5 py-2 rounded-full mb-6">
                🤝 Partner With Us
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight">
<<<<<<< HEAD
              Let's Build India's <span className="text-secondary-light">Future Together</span>
=======
              Let&apos;s Build India&apos;s <span className="text-secondary-light">Future Together</span>
>>>>>>> 9369efa (feat: implement dynamic gallery with framer-motion and cleanup projects page)
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-blue-100/80 mb-10 font-light">
              Partner with India's leading EPC contractor for your next infrastructure project.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base">Contact Our Team <ArrowRight className="w-5 h-5" /></Link>
              <Link href="/projects" className="btn-outline text-base">See Our Work</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
