'use client';
import { ReactNode, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import i18n from '@/app/i18n';
import Container from '@/components/Container';
import Section from '@/components/Section';


const { things } = i18n.en.hero;

const Hero = (): ReactNode => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % things.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section 
      id="home" 
      sculpture={true}
      className="min-h-screen w-full"
    >
      <Container>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-[-0.05em] leading-[0.9] mix-blend-difference max-w-5xl">
          hello, we are skape.io and we do{' '}
          <span className="relative inline-flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: 'blur(10px)', letterSpacing: '-0.05em' }}
                animate={{ opacity: 1, filter: 'blur(0px)', letterSpacing: '-0.05em' }}
                exit={{ opacity: 0, filter: 'blur(10px)', letterSpacing: '0.05em' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 whitespace-nowrap"
              >
                {things[index]}
              </motion.span>
            </AnimatePresence>
            <span className="opacity-0 pointer-events-none whitespace-nowrap">
              {things.reduce((a, b) => a.length > b.length ? a : b)}
            </span>
          </span>
        </h1>
      </Container>
    </Section>
  );
};

export default Hero;
