import styleToken from '@styles/styleToken.css';
import Section from '../section/Section.tsx';
import Banner from '../section/Banner.tsx';
import CarouselBanner from '../section/CarouselBanner';
import Description from '../section/Description';
import Feature from '../section/Feature';
import * as styles from './main.css';

export default function Main() {
  return (
    <div className={styles.container}>
      <Section backgroundColor={`${styleToken.color.primaryLight}`}>
        <Banner />
      </Section>
      <CarouselBanner />
      <Section backgroundColor={`${styleToken.color.primary}`}>
        <Description title="마음을 돌보고 싶은 사람을 위한" detail="오늘의 감정을 잊지 않게 남겨보세요." />
      </Section>
      <Feature title={'다양한 기능으로\n나의 감정을 셀프 케어'} />
    </div>
  );
}
