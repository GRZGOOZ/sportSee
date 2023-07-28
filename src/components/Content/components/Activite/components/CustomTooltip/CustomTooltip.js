import styles from "./CustomTooltip.module.scss";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const kilograms = payload[0].value.toFixed(0) + "kg";
    const caloriesBurned = payload[1].value.toFixed(0) + "Kcal";

    return (
      <div className={styles.CustomTooltip}>
        <p className={styles.CustomTooltip_kg}>{kilograms}</p>
        <p className={styles.CustomTooltip_Cal}>{caloriesBurned}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
