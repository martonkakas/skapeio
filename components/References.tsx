import { ReactNode } from 'react';

import i18n from '@/app/i18n';
import PartnerLogo from '@/components/PartnerLogo';
import PartnerLogoSet from '@/components/PartnerLogoSet';
import Section from '@/components/Section';

const { partners } = i18n.en;

const References = (): ReactNode => (
  <Section 
    id="references"
    className="py-16"
  >
    <div className="absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-black to-transparent z-10 lg:block" />
    <div className="absolute inset-y-0 right-0 hidden w-32 bg-gradient-to-l from-black to-transparent z-10 lg:block" />
    
    <div className="grid w-full grid-cols-1 justify-items-center gap-y-10 md:grid-cols-2 lg:hidden">
      {partners.map((partner) => (
        <PartnerLogo key={partner.label} {...partner} />
      ))}
    </div>

    <div className="hidden w-full lg:flex">
      {/* We use two sets of elements to create the infinite scroll effect */}
      <div className="flex items-center whitespace-nowrap animate-marquee">
        <PartnerLogoSet prefix="p1" />
        <PartnerLogoSet prefix="p2" />
      </div>
    </div>
  </Section>
);

export default References;
