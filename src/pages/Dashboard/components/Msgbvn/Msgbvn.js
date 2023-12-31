import styles from "./Msgbvn.module.scss";

const Msgbvn = ({ firstName }) => {
  return (
    <div className={styles.bvn}>
      <h2 className={styles.bvn_title}>
        Bonjour
        <span className={styles.bvn_title_username}>{firstName}</span>
      </h2>
      <h4 className={styles.bvn_msg}>
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </h4>
    </div>
  );
};

export default Msgbvn;
