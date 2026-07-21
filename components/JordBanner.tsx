'use client';
import { ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';

import i18n from '@/app/i18n';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Planet from '@/components/Planet';
import Section from '@/components/Section';

import styles from '@/components/JordBanner.module.css';

const { jord } = i18n.en;

const JordBanner = (): ReactNode => (
  <Section 
    id="jord" 
    decorate={true}
  >
    <div className={styles.JordBanner__PlanetWrapper}>
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 30], fov: 45 }}>
        <Planet />
      </Canvas>
    </div>
    
    <Container gap={6}>
      <h2 className={styles.JordBanner__Title}>{jord.title}</h2>
      {jord.text.map((p, i) => (
        <p key={i} className={styles.JordBanner__Text}>{p}</p>
      ))}
      {jord.cta.map(({ label, href }, i) => (
        <Button
          key={i}
          label={label}
          href={href}
        />
      ))}
    </Container>
  </Section>
);

export default JordBanner;
