import * as styles from './banner.css';

export default function Carousel() {
  return (
    <div className={styles.carouselContainer}>
      <section className={styles.carouselSection}>
        <div className={styles.imageContainer}>
          <img src="/feel-cat.svg" alt="feature_image" style={{ width: '80px' }} />
        </div>
        <p className={styles.carouselDescription}>
          여기에 각 기능을 설명하는
          <br />
          2줄 정도의 문장이 들어가야 함
        </p>
      </section>
    </div>
  );
}
