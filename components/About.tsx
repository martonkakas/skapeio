import { ReactNode } from 'react';

import i18n from '@/app/i18n';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Section from '@/components/Section';

const { index, title, text } = i18n.hu.about;

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 opacity-75 text-sm md:text-lg">
        {text.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Container>
  </Section>
);

export default About;