import styles from "./Activite.module.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import CustomTooltip from "./components/CustomTooltip/CustomTooltip";

const Activite = ({ sessions }) => {
  const data = sessions.map((session, index) => ({
    day: index + 1,
    kilograms: session.kilogram,
    caloriesBurned: session.calories,
  }));

  const kilogramsData = data.map((entry) => entry.kilograms);
  const caloriesData = data.map((entry) => entry.caloriesBurned);
  const minKilograms = Math.min(...kilogramsData);
  const maxKilograms = Math.max(...kilogramsData);
  const minCalories = Math.min(...caloriesData);
  const maxCalories = Math.max(...caloriesData);

  const tickValues = [
    minKilograms,
    ((minKilograms + maxKilograms) / 2).toFixed(1),
    maxKilograms,
  ];

  const customYAxisTickFormatter = (value) => {
    if (typeof value === "number") {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    }
    return value;
  };

  return (
    <div className={styles.activite}>
      <h4 className={styles.activite_title}>Activité quotidienne</h4>
      <BarChart
        width={679}
        height={200}
        data={data}
        className={styles.activite_barChart}
      >
        <XAxis
          dataKey="day"
          stroke="#ccc"
          className={styles.activite_barChart_Xxday}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#ccc"
          domain={[minKilograms, maxKilograms]}
          ticks={tickValues}
          tickFormatter={customYAxisTickFormatter}
          className={styles.activite_barChart_YxrightKg}
        />
        <YAxis
          yAxisId="left"
          domain={[minCalories, maxCalories]}
          className={styles.activite_barChart_YxLeftCal}
          tickMargin={50}
        />
        <Tooltip content={<CustomTooltip />} />

        <CartesianGrid
          stroke="#ccc"
          strokeDasharray="2 2"
          vertical={false}
          className={styles.activite_barChart_cartesianGrid}
        />

        <Bar
          yAxisId="right"
          dataKey="kilograms"
          barSize={5}
          radius={[20, 20, 0, 0]}
          className={styles.activite_barChart_barRight}
        />
        <Bar
          yAxisId="left"
          dataKey="caloriesBurned"
          fill="#E60000"
          barSize={5}
          radius={[20, 20, 0, 0]}
          className={styles.activite_barChart_barLeft}
        />
        <Legend
          verticalAlign="top"
          align="right"
          className={styles.activite_barChart_legend}
          iconType="circle"
          formatter={(value, entry) => {
            if (entry && entry.dataKey === "kilograms") {
              return (
                <span className={styles.activite_barChart_legend_kg}>
                  Poids (kg)
                </span>
              );
            } else if (entry && entry.dataKey === "caloriesBurned") {
              return (
                <span className={styles.activite_barChart_legend_cal}>
                  Calories brûlées (kCal)
                </span>
              );
            }
            return value;
          }}
          wrapperStyle={{ top: -48, right: 16 }}
        />
      </BarChart>
    </div>
  );
};

export default Activite;
