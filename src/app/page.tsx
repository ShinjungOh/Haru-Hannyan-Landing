import Main from './_component/Main';
import Feature from './_component/Feature';
import Footer from './_component/Footer';
import NavigationHeader from './_component/NavigationHeader';

export default function Home() {
  return (
    <>
      <NavigationHeader />
      <Main />
      <Feature title={'다양한 기능으로\n나의 감정을 셀프 케어'} />
      <Footer />
    </>
  );
}
