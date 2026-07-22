import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Geist, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
  title: 'skape.io',
  description: 'we do things',
};

type RootLayoutProps = {
  children: ReactNode
};

const classNames = {
  html: `${jetbrainsMono.variable} ${geist.variable} dark`,
  body: `bg-black bg-grid-pattern text-[#e0e0e0] font-geist font-medium 
    leading-normal selection:bg-white selection:text-black`
};

const RootLayout = ({ 
  children 
}: RootLayoutProps): ReactNode => (
  <html lang="en" className={classNames.html}>
    <body suppressHydrationWarning className={classNames.body}>
      {children}
      <Analytics />
      <SpeedInsights />
    </body>
  </html>
);

export default RootLayout;