'use server';

import * as styles from './feature.css';

export default async function Feature() {
  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          다양한 기능으로
          <br />
          나의 감정을 셀프 케어
        </h1>
      </div>
      <section className={styles.featureContainer}>
        <img className={styles.infoImage} src="/images/iphone_mockup_diary.png" alt="iphone_mockup" />
        <div className={styles.infoContainer}>
          <div className={styles.featureTitleContainer}>
            <div className={styles.circle}>1</div>
            <h2 className={styles.featureTitle}>일기 작성</h2>
          </div>
          <p className={styles.featureDescription}>
            행복, 좋음, 보통, 나쁨, 화남 5가지 기분과
            <br />
            다양한 16개의 감정을 선택해
            <br />
            나의 하루를 표현해요.
          </p>
        </div>
      </section>
      <section className={styles.featureContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.featureTitleContainer}>
            <div className={styles.circle}>2</div>
            <h2 className={styles.featureTitle}>타임라인</h2>
          </div>
          <p className={styles.featureDescription}>
            한 달의 일기를 한 눈에 모아보고
            <br />
            기분의 흐름을 살펴봐요.
            <br />
            유독 기분이 좋은 달에는 무슨 일이 있었나요?
          </p>
        </div>
        <img className={styles.infoImage} src="/images/iphone_mockup_timeline.png" alt="iphone_mockup" />
      </section>
      <section className={styles.featureContainer}>
        <img
          className={styles.infoImage}
          src="/images/iphone_mockup_test.png"
          alt="iphone_mockup"
          style={{
            width: '380px',
          }}
        />
        <div className={styles.infoContainer}>
          <div className={styles.featureTitleContainer}>
            <div className={styles.circle}>3</div>
            <h2 className={styles.featureTitle}>스트레스 자가 진단</h2>
          </div>
          <p className={styles.featureDescription}>
            요즘 스트레스를 많이 받고 있나요?
            <br />
            일주일마다 설문을 작성해
            <br />
            스트레스의 변화를 측정해요.
          </p>
        </div>
      </section>
    </section>
  );
}
