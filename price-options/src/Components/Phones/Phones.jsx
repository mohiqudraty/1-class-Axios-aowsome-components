import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { Audio, BallTriangle } from "react-loader-spinner";
import { useEffect, useState } from "react";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data.data));
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });

        setPhones(phonesWithFakeData);
        setLoading(false);
      });
  }, []);
  return (
    <div className="my-5">
      {loading || (
        <div className="flex justify-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      )}
      <h2 className="text-3xl text-center font-bold my-5">
        Phones: {phones.length}
      </h2>
      {loading && (
        <div className="flex justify-center">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      )}
      <div>
        <BarChart width={1000} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey={"name"}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
      </div>
    </div>
  );
};

export default Phones;
