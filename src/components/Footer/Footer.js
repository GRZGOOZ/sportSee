import styles from "./Footer.module.scss";
import { GiMeditation } from "react-icons/gi";
import { BiSwim } from "react-icons/bi";
import { IoIosBicycle } from "react-icons/io";
import { LiaDumbbellSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.footer_icons}>
          <li className={styles.footer_icons_icon}>
            <GiMeditation />
          </li>
          <li className={styles.footer_icons_icon}>
            <BiSwim />
          </li>
          <li className={styles.footer_icons_icon}>
            <IoIosBicycle />
          </li>
          <li className={styles.footer_icons_icon}>
            <LiaDumbbellSolid />
          </li>
        </ul>
      </nav>
      <p className={styles.footer_cpr}>Copiryght, SportSee 2020</p>
    </footer>
  );
};

export default Footer;
