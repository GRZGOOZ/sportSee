import styles from "./CustomTooltip.module.scss";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const sessionLength = payload[0].value;
    return <div className={styles.tooltip}>{`${sessionLength} min`}</div>;
  }

  return null;
};

export default CustomTooltip;
