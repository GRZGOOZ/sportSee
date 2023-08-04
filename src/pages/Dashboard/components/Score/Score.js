import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import styles from "./Score.module.scss";

const Score = ({ userData }) => {
  let percentage;
  if (userData.todayScore === undefined) {
    percentage = userData.score * 100;
  } else {
    percentage = userData.todayScore * 100;
  }
  const data = [
    { name: "Percentage", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ];

  const COLORS = [{ fill: "#E60000" }, { fill: "#FAFAFA" }];

  const startAngle = 180;

  return (
    <>
      <h4 className={styles.score_title}>Score</h4>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            startAngle={startAngle}
            endAngle={startAngle - 360}
            innerRadius="70%"
            outerRadius="80%"
            cornerRadius={20}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index].fill} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <p className={styles.score_percentage}>
        <span className={styles.score_percentage_res}>
          {percentage.toFixed(0)}%
        </span>
        <span className={styles.score_percentage_txt}>de votre objectif</span>
      </p>
    </>
  );
};

export default Score;
