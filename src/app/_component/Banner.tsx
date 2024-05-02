'use server';

import { ComponentProps } from 'react';
import * as styles from './banner.css';

type BannerProps = {
  color: string;
};

export default async function Banner({ children, color }: ComponentProps<any> & BannerProps) {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      {children}
    </div>
  );
}
