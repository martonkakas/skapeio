import { ComponentProps, ReactNode } from 'react';

import styles from '@/components/Button.module.css';

type ButtonCommandProps = {
  label: string,
  commandFor: string,
  command: ComponentProps<'button'>['command'],
}

const ButtonCommand = ({
  label,
  commandFor,
  command
}: ButtonCommandProps): ReactNode => (
  <button
    commandFor={commandFor}
    command={command}
    className={styles.Button}
  >
    <span className={styles.Button__Label}>{label}</span>
    <div className={styles.Button__Background}>
      <div className={styles.Button__TopLeft} />
      <div className={styles.Button__TopRight} />
      <div className={styles.Button__BottomLeft} />
      <div className={styles.Button__BottomRight} />
    </div>
  </button>
);

export default ButtonCommand;
