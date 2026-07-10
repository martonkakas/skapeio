import { ReactNode } from 'react';

import i18n from '@/app/i18n';
import Container from '@/components/Container';
import Corners from '@/components/Corners';
import Heading from '@/components/Heading';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import { cn } from '@/lib/utils';

import styles from '@/components/Services.module.css';

const { services } = i18n.hu;

const Services = (): ReactNode => (
  <Section 
    id="services" 
  >
    <Container>
      <Heading
        index="02"
        title="Capabilities"
      />
      <div className={cn(styles.gridWrapper, 'border-t border-l border-white/10')}>
        <div className={styles.grid}>
          {services.map(({ title, description }, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={title}
              description={description}
            />
          ))}
        </div>
        <Corners />
      </div>
    </Container>
  </Section>
);

export default Services;