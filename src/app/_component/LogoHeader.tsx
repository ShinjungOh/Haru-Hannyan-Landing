'use client';

import { useRouter } from 'next/navigation';
import * as styles from './layout/header.css';
import { Typography } from './common/Typography';

export default function LogoHeader() {
  const router = useRouter();

  const onClickLogo = () => {
    router.push('/');
  };

  return (
    <div className={styles.logoContainer} onClick={onClickLogo}>
      <img className={styles.LogoImage} src="/feel-cat.svg" alt="하루한냥 로고" />
      <Typography variant="body3" color="black" fontWeight="weightBold">
        하루한냥
      </Typography>
    </div>
  );
}
