import { CAROUSEL } from '@lib/const/carousel';
import styleToken from '@styles/styleToken.css';
import Section from '@app/_component/section/Section';
import { Banner } from '@app/_component/section/banner';
import { CarouselBanner } from '@app/_component/section/carousel';
import { Description } from '@app/_component/section/description';
import { Feature } from '@app/_component/section/feature';

export default function HomeMain() {
  return (
    <>
      <Section backgroundColor={`${styleToken.color.primaryLight}`}>
        <Banner />
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
