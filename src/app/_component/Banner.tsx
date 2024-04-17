import * as styles from './banner.css';
import { ComponentProps } from 'react';

type BannerProps = {
  color: string;
};

export default function Banner({ children, color }: ComponentProps<any> & BannerProps) {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      {children}
    </div>
  );
}
