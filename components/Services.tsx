import { ReactNode } from 'react';

import i18n from '@/app/i18n';
import Container from '@/components/Container';
import Corners from '@/components/Corners';
import Heading from '@/components/Heading';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';

import styles from '@/components/Services.module.css';

const { title, items } = i18n.en.services;

const Services = (): ReactNode => (
  <Section id="capabilities">
    <Container>
      <Heading
        index="02"
        title={title}
      />
      <div className={styles.GridWrapper}>
        <div className={styles.Grid}>
          {items.map(({ title, description }, index) => (
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