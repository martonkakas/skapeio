import { ReactNode } from 'react';

import i18n from '@/app/i18n';
import PartnerLogo from '@/components/PartnerLogo';

import styles from '@/components/PartnerLogoSet.module.css'

const { partners } = i18n.en;

const marqueePartners = [
  ...partners, 
  ...partners
];

type PartnerLogoSetProps = {
  prefix?: string;
}

const PartnerLogoSet = ({ 
  prefix 
}: PartnerLogoSetProps): ReactNode => (
  <div className={styles.PartnerLogoSet}>
    {marqueePartners.map((partner, i) => (
      <PartnerLogo 
        key={`${prefix}-${partner.label}-${i}`} 
        {...partner} 
      />
    ))}
  </div>
);

export default PartnerLogoSet;