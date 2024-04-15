import * as styles from './main.css';
import Banner from './Banner';
import NavigationHeader from './NavigationHeader';
import Footer from './Footer';

export default function Main() {
  return (
    <>
      <NavigationHeader />
      <div className={styles.container}>
        <Banner />
        <Banner />
        <Banner />
      </div>
      <Footer />
    </>
  );
}
