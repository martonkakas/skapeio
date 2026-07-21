import { ReactNode } from 'react';

import i18n from '@/app/i18n';
import Container from '@/components/Container';
import Section from '@/components/Section';

import styles from '@/components/Contact.module.css';

const { headline } = i18n.en.contact;

const Contact = (): ReactNode => (
  <Section 
    id="contact" 
    decorate={true}
  >
    <Container gap={0}>
      <div className={styles.Contact__Headline}>{headline}</div>
      <a 
        href="mailto:hello@skape.io" 
        className={styles.Contact__Link}
      >
        hello@skape.io
        <div className={styles.Contact__Link__Line} />
      </a>
    </Container>
  </Section>
);

export default Contact;
