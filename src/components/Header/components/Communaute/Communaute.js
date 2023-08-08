import { useState } from "react";
import styles from "./Communaute.module.scss";
import { Link } from "react-router-dom";

export default function Communaute() {
  const [isExpanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!isExpanded);
  };

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
        <ul className={styles.accordion_content_links}>
          <li>
            <Link to="/sportSee/12">Karl</Link>
          </li>
          <li>
            <Link to="/sportSee/18">Cecilia</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
