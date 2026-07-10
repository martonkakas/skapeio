import { ReactNode } from 'react';

import i18n from '@/app/i18n';
import Section from '@/components/Section';

const { partners } = i18n.hu;
const marqueePartners = [...partners, ...partners];

type Partner = typeof partners[number];

const PartnerLogo = ({ data, label }: Partner): ReactNode => (
  <div
    aria-label={label}
    className="flex h-20 w-36 shrink-0 items-center justify-center opacity-20 transition-opacity hover:opacity-50 md:h-24 md:w-44 [&_svg]:h-full [&_svg]:max-h-full [&_svg]:w-full [&_svg]:max-w-full"
    dangerouslySetInnerHTML={{ __html: data }}
    role="img"
    title={label}
  />
);

const PartnerLogoSet = ({ prefix }: { prefix: string }): ReactNode => (
  <div className="flex shrink-0 items-center gap-20 pr-20 md:gap-28 md:pr-28">
    {marqueePartners.map((partner, i) => (
      <PartnerLogo key={`${prefix}-${partner.label}-${i}`} {...partner} />
    ))}
  </div>
);

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
