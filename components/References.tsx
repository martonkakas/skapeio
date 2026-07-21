import { ReactNode } from 'react';

import PartnerLogoSet from '@/components/PartnerLogoSet';
import Section from '@/components/Section';

import styles from '@/components/References.module.css';

const References = (): ReactNode => (
  <Section 
    id="references"
    contentClassName={styles.References__Content}
  >
    <div className={styles.References__Gradients}>
      <div className={styles.References__Gradients__Left} />
      <div className={styles.References__Gradients__Right} />
    </div>

    <div className={styles.References__Wrapper}>
      <div className={styles.References__Wrapper__Marquee}>
        <PartnerLogoSet prefix="p1" />
        <PartnerLogoSet prefix="p2" className={styles.PartnerLogoSet} />
        <PartnerLogoSet prefix="p3" className={styles.PartnerLogoSet} />
      </div>
    </div>
  </Section>
);

export default References;
