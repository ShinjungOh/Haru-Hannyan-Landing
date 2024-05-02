import styleToken from '@styles/styleToken.css';
import Banner from './Banner';
import Info from './Info';
import CarouselBanner from './CarouselBanner';
import Description from './Description';
import * as styles from './main.css';

export default function Main() {
  return (
    <>
      <div className={styles.container}>
        <Banner color={`${styleToken.color.primaryLight}`}>
          <Info />
        </Banner>
        <CarouselBanner />
        <Banner color={`${styleToken.color.primary}`}>
          <Description />
        </Banner>
      </div>
    </>
  );
}
