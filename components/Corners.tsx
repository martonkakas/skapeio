import { ReactNode } from 'react';

import styles from '@/components/Corners.module.css';

const Corners = (): ReactNode => (
  <div className={styles.Corners}>
    <div className={styles.Corners__TopLeft} />
    <div className={styles.Corners__TopRight} />
    <div className={styles.Corners__BottomLeft} />
    <div className={styles.Corners__BottomRight} />
  </div>
);

export default Corners;