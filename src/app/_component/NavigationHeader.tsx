'use client';

import * as styles from './navigationHeader.css';
import { useRouter } from 'next/navigation';

export default function NavigationHeader() {
  const router = useRouter();

  const onClickLogo = () => {
    router.push('/');
    console.log('logo clicked');
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
