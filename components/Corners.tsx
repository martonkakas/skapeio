import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import styles from '@/components/Corners.module.css';

const cornerClassName = 'w-8 h-8 border-white/30';
const topClassName = 'border-t';
const rightClassName = 'border-r';
const bottomClassName = 'border-b';
const leftClassName = 'border-l';

const Corners = (): ReactNode => (
  <div className={styles.corners}>
    <div className={cn(styles.topLeft, cornerClassName, topClassName, leftClassName)} />
    <div className={cn(styles.topRight, cornerClassName, topClassName, rightClassName)} />
    <div className={cn(styles.bottomLeft, cornerClassName, bottomClassName, leftClassName)} />
    <div className={cn(styles.bottomRight, cornerClassName, bottomClassName, rightClassName)} />
  </div>
);

export default Corners;