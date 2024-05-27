import styleToken from '@styles/styleToken.css';
import Section from '@app/_component/section/Section';
import HomeBanner from '@app/_component/section/banner/HomeBanner';
import CarouselBanner from '@app/_component/section/carousel/CarouselBanner';
import Description from '@app/_component/section/description/Description';
import Feature from '@app/_component/section/feature/Feature';
import { CAROUSEL } from '@lib/const/carousel';

export default function HomeMain() {
  return (
    <>
      <Section backgroundColor={`${styleToken.color.primaryLight}`}>
        <HomeBanner />
      </Section>
      <Section backgroundColor={`${styleToken.color.background}`}>
        <CarouselBanner content={CAROUSEL} />
      </Section>
      <Section backgroundColor={`${styleToken.color.primary}`}>
        <Description title="마음을 돌보고 싶은 사람을 위한" detail="오늘의 감정을 잊지 않게 남겨보세요." />
      </Section>
      <Feature title={'다양한 기능으로\n나의 감정을 셀프 케어'} />
    </>
  );
}
