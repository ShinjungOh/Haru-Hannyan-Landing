import * as styles from './main.css';
import Banner from './Banner';
import NavigationHeader from './NavigationHeader';
import Footer from './Footer';
import Info from './Info';
import styleToken from '../../styles/styleToken.css';
import Description from './Description';

export default function Main() {
  return (
    <>
      <NavigationHeader />
      <div className={styles.container}>
        <Banner color={`${styleToken.color.primaryLight}`}>
          <Info />
        </Banner>
        <Banner />
        <Banner color={`${styleToken.color.primary}`}>
          <Description />
        </Banner>
      </div>
      <Footer />
    </>
  );
}
