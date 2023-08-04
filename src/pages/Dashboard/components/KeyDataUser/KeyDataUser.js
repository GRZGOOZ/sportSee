import styles from "./KeyDataUser.module.scss";
import { ImFire } from "react-icons/im";
import { GiChickenLeg } from "react-icons/gi";
import { AiFillApple } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";

const KeyDataItem = ({ icon, value, unit, label }) => {
  return (
    <li className={styles.keyDatas_data}>
      <div className={styles.keyDatas_data_icon}>{icon}</div>
      <div className={styles.keyDatas_data_content}>
        <span className={styles.keyDatas_data_content_qt}>
          {value}
          {unit}
        </span>
        <p className={styles.keyDatas_data_content_com}>{label}</p>
      </div>
    </li>
  );
};

const KeyDataUser = ({ keyData }) => {
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = keyData;

  const formattedCalorieCount = calorieCount.toLocaleString();

  return (
    <ul className={styles.keyDatas}>
      <KeyDataItem
        icon={<ImFire className={styles.keyDatas_data_icon_fire} />}
        value={formattedCalorieCount}
        unit="kCal"
        label="Calories"
      />
      <KeyDataItem
        icon={<GiChickenLeg className={styles.keyDatas_data_icon_chick} />}
        value={proteinCount}
        unit="g"
        label="Proteins"
      />
      <KeyDataItem
        icon={<AiFillApple className={styles.keyDatas_data_icon_apple} />}
        value={carbohydrateCount}
        unit="g"
        label="Glucides"
      />
      <KeyDataItem
        icon={<FaHamburger className={styles.keyDatas_data_icon_burger} />}
        value={lipidCount}
        unit="g"
        label="Lipides"
      />
    </ul>
  );
};

export default KeyDataUser;
