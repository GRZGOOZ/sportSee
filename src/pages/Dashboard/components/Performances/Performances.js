import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const Performances = ({ kind, data }) => {
  const kindList = Object.keys(kind).map((key) => ({
    subject: kind[key],
    value: 0,
  }));

  data.forEach((item) => {
    const { kind: type, value } = item;
    kindList[type - 1].value = value;
  });

  const performanceLabels = {
    cardio: "Cardio",
    energy: "Energie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="50%" data={kindList}>
        <PolarGrid radialLines={false} gridType="polygon" />
        <PolarAngleAxis
          dataKey="subject"
          tickFormatter={(subject) => performanceLabels[subject]}
          fontSize={10}
          tick={{ fill: "white" }}
        />
        <PolarRadiusAxis tick={false} axisLine={false} />
        <Radar
          name="Performance"
          dataKey="value"
          stroke="#E60000"
          fill="#E60000"
          fillOpacity={0.8}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Performances;
