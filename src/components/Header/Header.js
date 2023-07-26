import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";

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
        <ul>
          <li>Acceuil</li>
          <li>Profil</li>
          <li>Réglages</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
