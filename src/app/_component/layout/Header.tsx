import { PropsWithChildren } from 'react';
import * as styles from './header.css';

export default function Header({ children }: PropsWithChildren) {
  return <div className={styles.navigationHeader}>{children}</div>;
}
