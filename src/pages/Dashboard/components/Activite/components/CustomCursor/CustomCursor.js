import { Rectangle } from "recharts";
const CustomCursor = ({ y, width, height, x }) => {
  return (
    <Rectangle
      opacity={0.1}
      x={x - 30}
      y={y}
      width={width + 60}
      height={height + 1 }
    />
  );
};

export default CustomCursor;
