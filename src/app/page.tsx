import Header from '@app/_component/layout/Header';
import LogoHeader from '@app/_component/LogoHeader';
import Main from '@app/_component/layout/Main';
import HomeMain from '@app/_component/HomeMain';
import Footer from '@app/_component/layout/Footer';
import HomeFooter from '@app/_component/HomeFooter';

export default function Home() {
  return (
    <>
      <Header>
        <LogoHeader />
      </Header>
      <Main>
        <HomeMain />
      </Main>
      <Footer>
        <HomeFooter />
      </Footer>
    </>
  );
}
