import { useState } from "react";
import styles from "./Communaute.module.scss";
import UsersLink from "./components/UsersLink/UsersLink";
import {USER_MAIN_DATA} from "../../../../api/data"

export default function Communaute() {
  const [isExpanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!isExpanded);
  };
  const userData = USER_MAIN_DATA
  return (
    <div className={styles.accordion}>
      <button
        type="button"
        onClick={toggleAccordion}
        aria-expanded={isExpanded}
        className={styles.accordion_button}
      >
        <span className={styles.accordion_button_title}>Communaute</span>
        <span
          className={`${styles.arrow} ${isExpanded ? styles.arrow_up : ""}`}
        ></span>
      </button>
      <nav
        aria-hidden={!isExpanded}
        style={{ display: isExpanded ? "block" : "none" }}
        className={styles.accordion_content}
      >
    <UsersLink userData={userData}/>
      </nav>
    </div>
  );
}
