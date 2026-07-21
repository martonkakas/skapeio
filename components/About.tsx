import { ReactNode } from 'react';

import i18n from '@/app/i18n';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Section from '@/components/Section';

import styles from '@/components/About.module.css';

const { index, title, text } = i18n.en.about;

const About = (): ReactNode => (
  <Section 
    id="about" 
    decorate={true}
  >
    <Container>
      <Heading
        index={index}
        title={title}
      />
      <div className={styles.About__Content}>
        {text.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Container>
  </Section>
);

export default About;