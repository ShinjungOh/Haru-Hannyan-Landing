'use server';

import { CSSProperties, PropsWithChildren } from 'react';
import * as styles from './section.css';

type BannerProps = {
  backgroundColor: CSSProperties['backgroundColor'];
};

export default async function Section({ children, backgroundColor }: PropsWithChildren<BannerProps>) {
  return (
    <div className={styles.container} style={{ backgroundColor: backgroundColor }}>
      {children}
    </div>
  );
}
