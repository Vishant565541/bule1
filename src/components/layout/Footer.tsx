import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Safety (EHS)', href: '/safety' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const services = [
    { name: 'Power Substation', href: '/services' },
    { name: 'WTG Infrastructure', href: '/services' },
    { name: 'Civil Construction', href: '/services' },
    { name: 'Pipeline Networks', href: '/services' },
    { name: 'ROW Solutions', href: '/services' },
    { name: 'O&M Services', href: '/services' },
  ];

  const socials = [
    { icon: <Linkedin className="w-4 h-4" />, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: <Twitter className="w-4 h-4" />, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: <Facebook className="w-4 h-4" />, href: '#', label: 'Facebook', color: 'hover:bg-blue-500' },
    { icon: <Instagram className="w-4 h-4" />, href: '#', label: 'Instagram', color: 'hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
      <div className="absolute -top-40 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* CTA Strip */}
      <div className="relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-white mb-1">Ready to Start Your Next Project?</h3>
              <p className="text-slate-400 text-sm">Partner with India's trusted EPC contractor.</p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light text-white px-7 py-3.5 rounded-full font-bold transition-all duration-300 shadow-lg shadow-secondary/20 hover:shadow-secondary/30 hover:-translate-y-0.5"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <Link href="/" className="inline-block group">
              <Image
                src="/main-logo-transparent.png"
                alt="BlueNeck Energy"
                width={320}
                height={90}
                className="h-16 md:h-20 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Trusted EPC partner delivering comprehensive infrastructure solutions
              across India — with a foundation of safety, quality, and integrity.
            </p>
            <div className="flex gap-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className={`w-9 h-9 rounded-lg bg-slate-800 ${s.color} hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-secondary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-secondary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-secondary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-secondary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=Near+old+marketing+yard+gate+no.+2,+Rajkot,+Gujarat,+360003,+India"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <MapPin className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                  <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                    Near old marketing yard gate no. 2<br />Rajkot, Gujarat 360003<br />India
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+917770803338" className="flex items-center gap-3 group">
                  <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span className="text-sm text-slate-400 group-hover:text-secondary transition-colors">+91-7770803338</span>
                </a>
              </li>
              <li>
                <a href="tel:+919099455690" className="flex items-center gap-3 group">
                  <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span className="text-sm text-slate-400 group-hover:text-secondary transition-colors">+91-9099455690</span>
                </a>
              </li>
              <li>
                <a href="mailto:Shivshaktienterorise3316@gmail.com" className="flex items-center gap-3 group">
                  <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span className="text-sm text-slate-400 group-hover:text-secondary transition-colors break-all">
                    Shivshaktienterorise3316@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© {year} BlueNeck Energy. All rights reserved.</p>
          <p className="text-slate-700">Designed with ❤️ for a better India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
