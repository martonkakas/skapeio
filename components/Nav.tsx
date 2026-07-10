'use client';
import { ReactNode, useState } from 'react';

import i18n from '@/app/i18n';
import NavItem from '@/components/NavItem';

const { nav } = i18n.hu;

const Nav = (): ReactNode => {
  const [mouseY, setMouseY] = useState<number | null>(null);
  
  return (
    <nav 
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end"
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
