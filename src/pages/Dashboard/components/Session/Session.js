import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import styles from "./Session.module.scss";
import CustomTooltip from "./components/CustomTooltip/CustomTooltip";
import CustomCursor from "./components/CustomCursor/CustomCursor";

const Session = ({ sessions }) => {
  const data = sessions.map((session) => ({
    day: session.day,
    sessionLength: session.sessionLength,
  }));

  const dayLabels = ["L", "M", "M", "J", "V", "S", "D"];

  return (
    <div className={styles.session}>
      <h4 className={styles.session_title}>Durée moyenne des sessions</h4>
      <LineChart
        width={200}
        height={200}
        data={data}
        className={styles.session_lineChart}
        margin={{
          top: 40,
          right: 10,
          bottom: 10,
          left: -50,
        }}
      >
        <XAxis
          dataKey="day"
          stroke="#ccc"
          tickFormatter={(dayIndex) => dayLabels[dayIndex - 1]}
          className={styles.session_lineChart_XxDay}
        />
        <YAxis
          className={styles.session_lineChart_YxLeftTime}
          domain={[-5, "dataMax + 10"]}
        />
        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="white"
          className={styles.session_lineChart_line}
        />
      </LineChart>
    </div>
  );
};

export default Session;
