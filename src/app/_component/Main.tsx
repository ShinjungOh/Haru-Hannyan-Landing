import * as styles from './main.css';
import Banner from './Banner';
import Info from './Info';
import styleToken from '../../styles/styleToken.css';
import Description from './Description';
import CarouselBanner from './CarouselBanner';

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
