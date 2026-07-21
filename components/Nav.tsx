'use client';
import { ReactNode, useState } from 'react';

import i18n from '@/app/i18n';
import NavItem from '@/components/NavItem';

import styles from '@/components/Nav.module.css';

const { nav } = i18n.en;

const Nav = (): ReactNode => {
  const [mouseY, setMouseY] = useState<number | null>(null);
  
  return (
    <nav 
      className={styles.Nav}
      onMouseMove={(e) => setMouseY(e.clientY)}
      onMouseLeave={() => setMouseY(null)}
    >
      {nav.map((item) => (
        <NavItem 
          key={item.id} 
          item={item} 
          mouseY={mouseY} 
        />
      ))}
    </nav>
  );
};

export default Nav;
