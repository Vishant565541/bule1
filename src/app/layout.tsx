import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'BlueNeck Energy | Trusted EPC Solutions Across India',
    template: '%s | BlueNeck Energy'
  },
  description: 'BlueNeck Energy — India\'s trusted EPC company delivering power substations, WTG infrastructure, civil construction, and pipeline networks. Pan-India execution, 100% safety compliance.',
  keywords: ['EPC', 'power substation', 'WTG infrastructure', 'civil construction', 'Rajkot', 'Gujarat', 'India', 'BlueNeck Energy'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'BlueNeck Energy',
    title: 'BlueNeck Energy | Trusted EPC Solutions Across India',
    description: 'Comprehensive EPC infrastructure solutions across India.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`} suppressHydrationWarning>
        <Providers>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
