import PropTypes from "prop-types";

const Link = ({ route }) => {
  const { name, path } = route;
  return (
    <div>
      <li className="hover:text-white font-extrabold">
        <a href={path}>{name}</a>
      </li>
    </div>
  );
};
Link.propTypes = {
  route: PropTypes.object,
};
export default Link;
