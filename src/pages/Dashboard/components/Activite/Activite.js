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
import CustomCursor from "./components/CustomCursor/CustomCursor";

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

  return (
    <div className={styles.activite}>
      <h4 className={styles.activite_title}>Activité quotidienne</h4>
      <div className={styles.activite_hider}></div> 
      <BarChart
        width={632}
        height={200}
        data={data}
        className={styles.activite_barChart}
        margin={{
          left: 30,
          right: -10
        }}
      >
        <XAxis
          dataKey="day"
          stroke="#ccc"
          className={styles.activite_barChart_Xxday}
          scale={"point"}
          padding={{ right: 30 }}
          interval={0}
          tickLine={false}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#ccc"
          domain={[minKilograms, maxKilograms]}
          ticks={tickValues}
          className={styles.activite_barChart_YxrightKg}
          axisLine={false}
          tickLine={false}
        />
        <YAxis yAxisId="left" domain={[minCalories, maxCalories]} hide />
        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />

        <CartesianGrid
          stroke="#ccc"
          strokeDasharray="2 2"
          vertical={false}
          className={styles.activite_barChart_cartesianGrid}
          width={528}
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
