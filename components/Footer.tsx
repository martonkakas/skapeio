import { ReactNode } from 'react';

import i18n from '@/app/i18n';
import Container from '@/components/Container';
import Logo from '@/components/Logo';

import styles from '@/components/Footer.module.css';

const { items } = i18n.en.footer;
const currentYear = new Date().getFullYear();

const Footer = (): ReactNode => (
  <footer className={styles.Footer}>
    <Container isFooter={true}>
      <div className={styles.Footer__Inner}>
        <Logo className={styles.Footer__Logo} />
        <div className={styles.Footer__Items}>
          <span className={styles.Footer__Copy}>&copy; {currentYear} skape.io</span>
          <div className={styles.Footer__Links}>
            {items.map(({ dialogId, label }, i) => (
              <button 
                key={i}
                commandFor={dialogId}
                command="show-modal"
                className={styles.Footer__Button}
              >{label}</button>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;