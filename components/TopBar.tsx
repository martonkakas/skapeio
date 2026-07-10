import { ReactNode } from 'react';
import Link from 'next/link';

import Logo from '@/components/Logo';

const TopBar = (): ReactNode => (
  <header className="fixed top-0 left-0 right-0 z-[100] p-6 flex justify-center mix-blend-difference pointer-events-none">
    <div className="pointer-events-auto text-white">
      <Link href="#home">
        <Logo onlyIcon />
      </Link>
    </div>
  </header>
);

export default TopBar;