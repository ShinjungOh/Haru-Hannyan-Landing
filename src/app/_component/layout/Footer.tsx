import { PropsWithChildren } from 'react';
import * as styles from './footer.css';

export default function Footer({ children }: PropsWithChildren) {
  return <div className={styles.container}>{children}</div>;
}
