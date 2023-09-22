import {
  BarChart as BChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarChart = () => {
  const countryData = [
    {
      name: "Germany",
      population: 83149300,
      gdp: 40100000,
      area_sq_km: 357385,
    },
    {
      name: "Japan",
      population: 126476461,
      gdp: 55010000,
      area_sq_km: 377975,
    },
    {
      name: "Canada",
      population: 37742154,
      gdp: 17100000,
      area_sq_km: 9984670,
    },
    {
      name: "Australia",
      population: 25746000,
      gdp: 14930000,
      area_sq_km: 7692024,
    },
    {
      name: "South Africa",
      population: 59308690,
      gdp: 37090000,
      area_sq_km: 1221037,
    },
  ];

  return (
    <div className="text-center">
      <BChart
        width={1000}
        height={400}
        data={countryData}
        margin={{
          top: 5,
          right: 10,
          left: 30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={"population"} fill="#8884d8" />
        <Bar dataKey={"gdp"} fill="#82ca9d" />
        <Bar dataKey={"area_sq_km"} fill="#82ca" />
      </BChart>
    </div>
  );
};

export default BarChart;
