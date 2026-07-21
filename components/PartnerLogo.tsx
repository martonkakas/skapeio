import { ReactNode } from 'react';

import i18n from '@/app/i18n';

import styles from '@/components/PartnerLogo.module.css';

const _partners = i18n.en.partners;

type PartnerProps = typeof _partners[number];

const PartnerLogo = ({ 
  data, 
  label 
}: PartnerProps): ReactNode => (
  <div
    aria-label={label}
    className={styles.PartnerLogo}
    dangerouslySetInnerHTML={{ __html: data }}
    role="img"
    title={label}
  />
);

export default PartnerLogo;