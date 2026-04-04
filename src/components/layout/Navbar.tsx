'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Safety (EHS)', path: '/safety' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <>

      <nav className={clsx(
        'sticky top-0 z-[100] transition-all duration-500 w-full',
        scrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-slate-200/60 dark:border-slate-800/60 py-1'
          : 'bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/50 py-2'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center group flex-shrink-0">
              <Image
                src="/main-logo-transparent.png"
                alt="BlueNeck Energy & Infra Pvt. Ltd. Logo"
                width={400}
                height={120}
                className="h-12 md:h-14 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={clsx(
                    'nav-link px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    pathname === link.path
                      ? 'text-secondary dark:text-secondary-light font-semibold bg-secondary/8 dark:bg-secondary/10 active'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                  )}
                >
                  {link.name}
                </Link>
              ))}

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 ml-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white"
                aria-label="Toggle Theme"
              >
                {mounted && (
                  theme === 'dark'
                    ? <Sun className="w-4.5 h-4.5" />
                    : <Moon className="w-4.5 h-4.5" />
                )}
              </button>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="ml-2 bg-secondary hover:bg-secondary-light text-white px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-md shadow-secondary/20 hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                Contact
              </Link>
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Theme"
              >
                {mounted && (theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-slate-700" />)}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-white"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={clsx(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        )}>
          <div className="px-4 pb-6 pt-2 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={clsx(
                  'flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                  pathname === link.path
                    ? 'bg-secondary/10 text-secondary dark:text-secondary-light font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full mt-3 bg-secondary text-white px-4 py-3 rounded-xl font-bold transition-all hover:bg-secondary-light"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
