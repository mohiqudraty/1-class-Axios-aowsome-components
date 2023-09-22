import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { price, name, features } = option;
  return (
    <div className=" bg-blue-500 text-white p-5 rounded-xl flex flex-col">
      <h2 className="text-center">
        <span className="text-5xl font-extrabold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h2 className="text-3xl text-center my-8">{name}</h2>
      <div className="pl-6 flex-grow">
        {" "}
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="w-full bg-green-600 hover:bg-green-900 py-2 font-bold rounded-xl mt-12">
        Buy Now
      </button>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
