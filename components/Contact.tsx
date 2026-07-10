import { ReactNode } from 'react';

import i18n from '@/app/i18n';
import Container from '@/components/Container';
import Section from '@/components/Section';

const { headline } = i18n.hu.contact;

const Contact = (): ReactNode => (
  <Section 
    id="contact" 
    decorate={true}
  >
    <Container>
      <div className="opacity-50 text-xs tracking-widest uppercase font-mono">{headline}</div>
      <a 
        href="mailto:hello@skape.io" 
        className="flex flex-col text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter transition-colors group"
        style={{ textBox: 'trim-both cap alphabetic' }}
      >
        hello@skape.io
        <div className="w-full h-1 bg-[currentcolor] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </a>
    </Container>
  </Section>
);

export default Contact;
