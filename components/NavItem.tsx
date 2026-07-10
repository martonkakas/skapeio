import { ReactNode, useEffect,useRef, useState } from 'react';
import Link from 'next/link';

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
      className="group flex items-center justify-end h-6 w-20 relative"
    >
      <span className="text-xs font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute right-full whitespace-nowrap">
        {item.label}
      </span>
      <div 
        className="bg-white transition-transform duration-75 ease-out origin-right"
        style={{ 
          width: '24px', 
          height: '3px', 
          transform: `scaleX(${scale})`,
          opacity 
        }}
      />
    </Link>
  );
};

export default NavItem;