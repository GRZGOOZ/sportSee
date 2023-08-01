import { Rectangle } from "recharts";
const CustomCursor = ({ y, width, height, points }) => {
  return (
    <Rectangle
      opacity={0.1}
      x={points[0].x - 10}
      y={y}
      width={width + 20}
      height={height + 80}
      radius={5}
    />
  );
};

export default CustomCursor;
