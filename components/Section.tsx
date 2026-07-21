'use client';
import { ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';

import Background from '@/components/Background';
import Corners from '@/components/Corners';
import Sculpture from '@/components/Sculpture';
import { cn } from '@/lib/utils';

import styles from '@/components/Section.module.css';

type SectionProps = {
  id?: string,
  className?: string,
  contentClassName?: string,
  children: ReactNode,
  decorate?: boolean,
  sculpture?: boolean
}
  
const Section = ({
  id,
  className,
  contentClassName,
  children,
  decorate,
  sculpture
}: SectionProps) => (
  <section 
    id={id} 
    className={cn(styles.Section, className)}
  >
    {decorate && 
      <>
        <Background />
        <Corners />
      </>
    }
    {sculpture && 
      <div className={styles.Sculpture}>
        <Canvas 
          dpr={[1, 1.5]} 
          camera={{ position: [0, 0, 40], fov: 45 }}
        >
          <Sculpture />
        </Canvas>
      </div>
    }
    <div className={cn(styles.Section__Content, contentClassName)}>
      {children}
    </div>
  </section>
);

export default Section;
