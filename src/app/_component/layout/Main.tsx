import { PropsWithChildren } from 'react';
import * as styles from './main.css';

export default function Main({ children }: PropsWithChildren) {
  return <div className={styles.container}>{children}</div>;
}
