import Banner from './banner/Banner';
import Info from './banner/Info';
import CarouselBanner from './banner/CarouselBanner';
import Description from './banner/Description';
import Feature from '@app/_component/banner/Feature';
import styleToken from '@styles/styleToken.css';
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
          <Description title="마음을 돌보고 싶은 사람을 위한" detail="오늘의 감정을 잊지 않게 남겨보세요." />
        </Banner>
        <Feature title={'다양한 기능으로\n나의 감정을 셀프 케어'} />
      </div>
    </>
  );
}
