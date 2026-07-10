import { ReactNode } from 'react';
import Link from 'next/link';

import i18n from '@/app/i18n';
import Container from '@/components/Container';
import Logo from '@/components/Logo';

const { items } = i18n.hu.footer;
const currentYear = new Date().getFullYear();

const Footer = (): ReactNode => (
  <footer className="px-6 md:px-12 lg:px-24 bg-black">
    <Container className="py-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full text-[10px] font-mono uppercase tracking-widest">
        <Logo className="opacity-50 h-6 w-[120px]" />
        
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="opacity-50">&copy; {currentYear} skape.io</span>
          <div className="flex gap-4">
            {items.map(({ href, label }, i) => (
              <Link 
                key={i}
                href={href}
                className="opacity-50 hover:opacity-100 transition-opacity duration-300"
              >{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;