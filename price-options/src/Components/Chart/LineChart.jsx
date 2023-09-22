import { LineChart as LChart, Line, XAxis, YAxis, Tooltip } from "recharts";
const LineChart = () => {
  const studentData = [
    {
      id: 1,
      name: "John",
      math: 85,
      physics: 90,
      english: 80,
    },
    {
      id: 2,
      name: "Sarah",
      math: 78,
      physics: 88,
      english: 92,
    },
    {
      id: 3,
      name: "Michael",
      math: 92,
      physics: 85,
      english: 88,
    },
    {
      id: 4,
      name: "Emily",
      math: 80,
      physics: 75,
      english: 85,
    },
    {
      id: 5,
      name: "David",
      math: 88,
      physics: 82,
      english: 90,
    },
    {
      id: 6,
      name: "Sophia",
      math: 95,
      physics: 91,
      english: 87,
    },
    {
      id: 7,
      name: "James",
      math: 83,
      physics: 79,
      english: 84,
    },
    {
      id: 8,
      name: "Emma",
      math: 89,
      physics: 86,
      english: 93,
    },
    {
      id: 9,
      name: "William",
      math: 91,
      physics: 87,
      english: 89,
    },
    {
      id: 10,
      name: "Olivia",
      math: 94,
      physics: 88,
      english: 91,
    },
  ];

  return (
    <div className="container mx-auto my-10">
      <LChart width={720} height={300} data={studentData}>
        <Line type="monotone" dataKey={"math"} stroke="red" />
        <Line type="monotone" dataKey={"physics"} stroke="green" />
        <Line type="monotone" dataKey={"english"} stroke="blue" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LChart>
    </div>
  );
};

export default LineChart;
