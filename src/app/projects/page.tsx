'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowUpRight, X, Building2, Wind, Sun, Droplets } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { fadeUp, stagger } from '@/lib/animations';

type Project = {
  id: number;
  title: string;
  category: string;
  location: string;
  summary: string;
  desc: string;
  status: string;
  image: string;
};

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const categories = ['All', 'Infrastructure', 'Pipeline'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'ACME Solar Holding Ltd.',
      category: 'Infrastructure',
      location: 'India',
      summary: '400 kV GIS Substation & 50MW/100MW WTG civil and road works — fully operational.',
      desc: '1. The civil works for the 400 kV GIS substation shall include all necessary construction, materials, equipment, labor, and supervision required for the complete civil, structural, and architectural works associated with the substation, as per approved drawings, technical specifications, and relevant standards. The scope covers site development, foundations, buildings, cable trenches, drainage, roads, fencing, and all associated civil infrastructure for a fully operational GIS substation.\n\n2. 50MW and 100MW Wind Turbine Generator (WTG) Projects, covering complete civil and Road, Platform works. The scope included foundation construction, with ROW (Right of Way) road development for site access and turbine connectivity. Both projects are fully operational and supplying clean, reliable power to the grid as per industry and safety standards.',
      status: 'Completed',
      image: '/images/projects/substation-400kv.png',
    },
    {
      id: 2,
      title: 'Onix Renewable Limited',
      category: 'Infrastructure',
      location: 'India',
      summary: 'Full civil and structural works for a 220 kV Substation — successfully energized.',
      desc: 'The civil works for the 220 kV Substation shall include all labor, materials, equipment, tools, supervision, and services necessary for the complete execution of civil, structural, and architectural works.\n\nThe scope covers site development, foundations, buildings, cable trenches, drainage, roads, water supply, sewage, boundary wall, fencing, and all associated infrastructure for a fully operational 220 kV substation.\n\nAll equipment and systems were tested and commissioned in accordance with IS/IEC standards and quality assurance protocols. The substation was successfully energized.',
      status: 'Completed',
      image: '/images/projects/substation-220kv.png',
    },
    {
      id: 3,
      title: 'Hi Tech Power Pvt. Ltd.',
      category: 'Infrastructure',
      location: 'India',
      summary: 'Complete civil, structural, and architectural works for a 220 kV Substation.',
      desc: '1. The civil works for the 220 kV Substation include all labor, materials, equipment, tools, supervision, and services necessary for the complete execution of civil, structural, and architectural works.\n\nThe scope covers site development, foundations, buildings, cable trenches, drainage, roads, water supply, sewage, boundary wall, fencing, and all associated infrastructure for a fully operational 220 kV substation.',
      status: 'Completed',
      image: '/images/projects/wind-turbine.png',
    },
    {
      id: 4,
      title: 'Rajesh Power Services Ltd.',
      category: 'Infrastructure',
      location: 'India',
      summary: 'SETC of 66 KV switchyard including Transformer cum Line Bay and GSS Bay — energized.',
      desc: '1. The work of Supply, Erection, Testing and Commissioning (SETC) of the 66 KV switchyard, the Transformer cum Line Bay and GSS Bay.\n\nThe scope of work included all civil foundation works, cable tranche. All equipment including isolators, circuit breakers, CTs, PTs, LA, Gantry And all Switchyard Foundation as per approved drawings and specifications. The work was carried out adhering to relevant IS standards and safety norms. The system has been energized successfully.\n\n2. The 66KV substation switchyard work has been successfully completed with all civil, structural, and MCR executed as per approved drawings and safety standards. Major activities include Gantry Foundation, equipment foundations, transformer and breaker, Isolator control cable Tranche and all Civil Activity.',
      status: 'Completed',
      image: '/images/projects/switchyard-66kv.png',
    },
    {
      id: 6,
      title: 'Laxmi Construction Company',
      category: 'Infrastructure',
      location: 'India',
      summary: '3KM tunnel construction with excavation, lining, and drainage — now fully operational.',
      desc: 'Tunnel construction work has been successfully completed for 3KM, including excavation, lining, drainage, and finishing activities. All structural, civil, and safety standards were strictly followed to ensure durability and reliable performance. The completed tunnel is now fully operational and ready for service.',
      status: 'Completed',
      image: '/images/projects/tunnel-construction.png',
    },
    {
      id: 7,
      title: 'Rapar Nagarpalika',
      category: 'Pipeline',
      location: 'Rapar, Gujarat',
      summary: '18.4 km DI Pipeline (600mm, 300mm, 200mm) under Gujarat Government project.',
      desc: 'Execution of DI (Ductile Iron) Pipeline Work of various diameters including 600mm, 300mm, and 200mm, with a total pipeline length of 18.4 kilometers.\n\nThe work is being carried out under the Gujarat Government project for Rapar Nagarpalika, which includes supply, laying, jointing, and testing of DI pipes along with all related civil works.',
      status: 'Completed',
      image: '/images/projects/pipeline-di.png',
    },
    {
      id: 8,
      title: 'Kintech Synergy Pvt. Ltd.',
      category: 'Infrastructure',
      location: 'India',
      summary: 'Complete civil works for 220KV substation — equipment foundations, control room, and roads.',
      desc: 'The civil works for the 220KV substation have been successfully completed as per design and quality standards. The scope included construction of equipment foundations, control room building, cable trenches, transformer foundations, boundary wall, drainage system, internal roads, and other associated civil structures.\n\nAll works were executed with strict adherence to safety, quality, and timeline requirements, ensuring readiness for electrical installation and commissioning.',
      status: 'Completed',
      image: '/images/projects/substation-220kv-kintech.png',
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const categoryIcon = (cat: string) => {
    if (cat === 'Pipeline') return <Droplets className="w-3.5 h-3.5" />;
    if (cat === 'Wind') return <Wind className="w-3.5 h-3.5" />;
    if (cat === 'Solar') return <Sun className="w-3.5 h-3.5" />;
    return <Building2 className="w-3.5 h-3.5" />;
  };

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-24 pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-blue-900 z-0" />
        <div className="absolute inset-0 bg-grid opacity-20 z-0" />
        <div className="absolute top-20 left-1/3 w-80 h-80 bg-secondary/20 rounded-full blur-[130px] z-0" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} custom={0} className="mb-5">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-5 py-2 rounded-full">
                Our Portfolio
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp} custom={1}
              className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
            >
              Our <span className="text-secondary-light">Completed Projects</span>
            </motion.h1>
            <motion.p
              variants={fadeUp} custom={2}
              className="text-xl text-slate-300 max-w-2xl mx-auto"
            >
              A portfolio of landmark infrastructure projects delivered across India
              — each a testament to our engineering expertise.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── FILTER + GRID ────────────────────────────────── */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-14"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === cat
                    ? 'bg-secondary text-white shadow-lg shadow-secondary/30 scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-secondary/50 hover:text-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 20 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number,number,number,number], delay: idx * 0.06 }}
                  className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 shadow-md hover:shadow-2xl hover:shadow-black/15 border border-slate-100 dark:border-slate-800 transition-all duration-500 flex flex-col card-lift"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

                    {/* Status badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-secondary/90 text-white">
                        {project.status}
                      </span>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 right-4">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 backdrop-blur-md text-white border border-white/20">
                        {categoryIcon(project.category)}
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content — only title, location, and View Details button */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs mb-4 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                      {project.location}
                    </p>

                    {/* Spacer to push button to bottom */}
                    <div className="flex-1" />

                    {/* View Details button */}
                    <button
                      onClick={() => setSelected(project)}
                      className="w-full mt-4 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white text-sm font-bold hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      View Details <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      {/* ─── DETAIL MODAL ─────────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
              className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal image */}
              <div className="relative h-64 flex-shrink-0">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-secondary/90 text-white">
                    {selected.status}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 backdrop-blur-md text-white border border-white/20">
                    {categoryIcon(selected.category)}
                    {selected.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <h2 className="text-2xl font-black text-white">{selected.title}</h2>
                  <p className="flex items-center gap-1.5 text-white/70 text-xs mt-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    {selected.location}
                  </p>
                </div>
              </div>

              {/* Modal content */}
              <div className="p-6 overflow-y-auto flex-1">
                {/* Summary highlight */}
                <div className="mb-5 p-4 rounded-xl bg-secondary/5 border border-secondary/15">
                  <p className="text-sm font-semibold text-secondary">
                    {selected.summary}
                  </p>
                </div>

                {/* Full description */}
                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">Project Details</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                  {selected.desc}
                </p>
              </div>

              {/* Modal footer */}
              <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelected(null)}
                  className="px-6 py-2.5 rounded-full bg-secondary text-white text-sm font-bold hover:bg-secondary/90 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
              Let&apos;s discuss how we can bring your infrastructure vision to life.
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              Start a Conversation <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
