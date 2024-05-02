'use client';

import { useRouter } from 'next/navigation';
import * as styles from './navigationHeader.css';

export default function NavigationHeader() {
  const router = useRouter();

  const onClickLogo = () => {
    router.push('/');
  };

  return (
    <>
      <div className={styles.navigationHeader}>
        <div className={styles.logoContainer} onClick={onClickLogo}>
          <img className={styles.LogoImage} src="/feel-cat.svg" alt="하루한냥 로고" />
          <span>하루한냥</span>
        </div>
      </div>
    </>
  );
}
