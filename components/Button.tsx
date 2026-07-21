import { ReactNode } from 'react';
import Link from 'next/link';

import styles from '@/components/Button.module.css';

type ButtonProps = {
  label: string,
  href: string
}

const Button = ({
  label,
  href
}: ButtonProps): ReactNode => (
  <Link 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className={styles.Button}
  >
    <span className={styles.Button__Label}>{label}</span>
    <div className={styles.Button__Background}>
      <div className={styles.Button__TopLeft} />
      <div className={styles.Button__TopRight} />
      <div className={styles.Button__BottomLeft} />
      <div className={styles.Button__BottomRight} />
    </div>
  </Link>
);

export default Button;