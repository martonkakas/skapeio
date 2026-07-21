import { ReactNode } from 'react';

import styles from '@/components/Heading.module.css';

type HeadingProps = {
  index: string,
  title: string,
};

const Heading = ({ 
  index, 
  title 
}: HeadingProps): ReactNode => (
  <header className={styles.Heading}>
    <span className={styles.Heading__Index}>{index}</span>
    <h2 className={styles.Heading__Title}>{title}</h2>
  </header>
);

export default Heading;
