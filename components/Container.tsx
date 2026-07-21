import { ReactNode } from 'react';

import styles from '@/components/Container.module.css';

type ContainerProps = {
  children: ReactNode,
  isFooter?: boolean,
  gap?: number,
};

const Container = ({
  children,
  isFooter = false,
  gap = 8
}: ContainerProps): ReactNode => (
  <div 
    className={isFooter ? styles.ContainerFooter : styles.Container}
    style={{ '--gap': gap } as React.CSSProperties}
  >
    {children}
  </div>
);

export default Container;