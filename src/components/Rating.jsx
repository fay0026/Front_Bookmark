import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Rating({ value }) {
  return (
    <span>
      <FontAwesomeIcon
        class="fa-layers"
        icon={faStar}
        size="2xl"
        style={{ color: "#FFD43B" }}
      />
      {Math.round(value * 10) / 10}
      <FontAwesomeIcon />
    </span>
  );
}

Rating.propTypes = {
  value: PropTypes.number,
};

Rating.defaultProps = {
  value: 0,
};

export default Rating;
