import { ReactNode, useEffect,useRef, useState } from 'react';
import Link from 'next/link';

import styles from '@/components/NavItem.module.css';

type NavItemProps = {
  item: any,
  mouseY: number | null
};

const NavItem = ({ 
  item, 
  mouseY 
}: NavItemProps): ReactNode => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(0.3);

  useEffect(() => {
    if (mouseY === null || !ref.current) {
      setScale(1);
      setOpacity(0.3);
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    const center = rect.top + rect.height / 2;
    const distance = Math.abs(mouseY - center);
    const maxDistance = 150;
    
    if (distance < maxDistance) {
      const scaleValue = 1 + (1 - distance / maxDistance) * 2;
      setScale(scaleValue);
      setOpacity(0.3 + (1 - distance / maxDistance) * 0.7);
    } else {
      setScale(1);
      setOpacity(0.3);
    }
  }, [mouseY]);

  return (
    <Link
      ref={ref}
      href={`#${item.id}`}
      className={styles.NavItem}
    >
      <span className={styles.NavItem__Label}>
        {item.label}
      </span>
      <div 
        className={styles.NavItem__Indicator}
        style={{ 
          transform: `scaleX(${scale})`,
          opacity 
        }}
      />
    </Link>
  );
};

export default NavItem;