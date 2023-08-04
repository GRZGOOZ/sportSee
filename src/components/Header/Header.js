// Header.js
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import Communaute from "./components/Communaute/Communaute";

const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.header_title}>
        <div className={styles.header_title_img}>
          <img src={logo} alt="logo SportSee" />
        </div>
        <h1 className={styles.header_title_title}>SportSee</h1>
      </div>
      <nav>
        <ul className={styles.header_nav}>
          <li className={styles.header_nav_n}>Acceuil</li>
          <li className={styles.header_nav_n}>Profil</li>
          <li className={styles.header_nav_n}>Réglages</li>
          <Communaute />
        </ul>
      </nav>
     
    </header>
  );
};

export default Header;
