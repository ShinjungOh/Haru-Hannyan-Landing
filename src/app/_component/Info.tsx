'use client';

import * as styles from './banner.css';
import * as buttonStyles from './baseButton.css';
import { useRouter } from 'next/navigation';
import { PAGE_ADDRESS } from '../../lib/const/pageAddress';

export default function Info() {
  const router = useRouter();

  const onClickAppLink = () => {
    router.push(PAGE_ADDRESS.app);
  };

  return (
    <div className={styles.info}>
      <section className={styles.infoSection}>
        <h1 className={styles.infoTitle}>
          고양이 스티커로 남기는
          <br />
          하루의 기록, 하루한냥
        </h1>
        <p className={styles.infoDescription}>매일을 기록하고 나만의 고양이를 모아보세요.</p>
        <button className={buttonStyles.container} onClick={onClickAppLink}>
          하루한냥 바로가기
        </button>
      </section>
      <img src="/images/iphone_mockup.png" alt="iphone_mockup" style={{ width: '200px' }} />
    </div>
  );
}
