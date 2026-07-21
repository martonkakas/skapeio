import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import styles from '@/components/Background.module.css';

type BackgroundProps = {
  className?: string;
}

const Background = ({
  className
}: BackgroundProps): ReactNode => (
  <div className={cn(styles.Background, className)}>
    <div className={styles.Color} />
    <div className={cn(styles.Pattern, 'bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]')} />
  </div>
);

export default Background;