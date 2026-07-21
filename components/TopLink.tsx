import { ReactNode } from 'react';
import Link from 'next/link';

import Logo from '@/components/Logo';

import styles from '@/components/TopLink.module.css';

const TopLink = (): ReactNode => (
  <Link href="#home" className={styles.TopLink}>
    <Logo onlyIcon />
  </Link>
);

export default TopLink;