import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Geist,JetBrains_Mono } from 'next/font/google';

import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

export const metadata: Metadata = {
  title: 'Skape | Cloud CMS & IT Solutions',
  description: 'Military-industrial website for Skape.io.',
};

type RootLayoutProps = {
  children: React.ReactNode
};

const RootLayout = ({ 
  children 
}: RootLayoutProps): ReactNode => (
  <html lang="en" className={`${jetbrainsMono.variable} ${geist.variable} dark`}>
    <body suppressHydrationWarning className="bg-black text-[#e0e0e0] font-geist font-medium leading-normal selection:bg-white selection:text-black">
      {children}
    </body>
  </html>
);

export default RootLayout;