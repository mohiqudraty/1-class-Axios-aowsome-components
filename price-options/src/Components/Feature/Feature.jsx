import PropTypes from "prop-types";
import { BsFillPatchCheckFill } from "react-icons/bs";
const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center">
        <BsFillPatchCheckFill className="text-green-500 mr-3"></BsFillPatchCheckFill>
        {feature}
      </p>
    </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.string,
};
export default Feature;
