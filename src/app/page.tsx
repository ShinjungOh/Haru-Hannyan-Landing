import Header from '@app/_component/layout/Header';
import LogoHeader from '@app/_component/LogoHeader';
import Main from '@app/_component/layout/Main';
import Footer from '@app/_component/layout/Footer';

export default function Home() {
  return (
    <>
      <Header>
        <LogoHeader />
      </Header>
      <Main />
      <Footer />
    </>
  );
}
