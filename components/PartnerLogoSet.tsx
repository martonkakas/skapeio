import { ReactNode } from 'react';

import i18n from '@/app/i18n';
import PartnerLogo from '@/components/PartnerLogo';
import { cn } from '@/lib/utils';

import styles from '@/components/PartnerLogoSet.module.css'

const { partners } = i18n.en;

type PartnerLogoSetProps = {
  prefix?: string;
  className?: string;
}

const PartnerLogoSet = ({ 
  prefix,
  className
}: PartnerLogoSetProps): ReactNode => (
  <div className={cn(styles.PartnerLogoSet, className)}>
    {partners.map((partner, i) => (
      <PartnerLogo 
        key={`${prefix}-${partner.label}-${i}`} 
        {...partner} 
      />
    ))}
  </div>
);

export default PartnerLogoSet;