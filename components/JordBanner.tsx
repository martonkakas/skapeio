'use client';
import { ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';

import i18n from '@/app/i18n';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Planet from '@/components/Planet';
import Section from '@/components/Section';

const { jord } = i18n.hu;

const JordBanner = (): ReactNode => (
  <Section 
    id="jord" 
    decorate={true}
  >
    <div className="absolute right-[-20%] md:right-[-10%] top-[-20%] bottom-[-20%] w-[80%] md:w-[60%] z-0 pointer-events-none opacity-60 md:opacity-100">
      <Canvas camera={{ position: [0, 0, 30], fov: 45 }}>
        <Planet />
      </Canvas>
    </div>
    
    <Container>
      <div className="flex flex-col gap-6 items-start">
        <h2 
          className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter" 
          style={{ textBox: 'trim-both cap alphabetic' }}
        >{jord.title}</h2>
        
        {jord.text.map((p, i) => (
          <p 
            key={i} 
            className="opacity-75 text-sm md:text-lg max-w-2xl"
          >{p}</p>
        ))}
        
        {jord.cta.map(({ label, href }, i) => (
          <Button
            key={i}
            label={label}
            href={href}
          />
        ))}
      </div>
    </Container>
  </Section>
);

export default JordBanner;