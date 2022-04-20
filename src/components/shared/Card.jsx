import PropTypes from "prop-types";

function Card({ children, reverse }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(119, 136, 153, 0.5)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.prototype = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
