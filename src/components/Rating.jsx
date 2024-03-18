import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Rating({ value }) {
  return (
    <span className="fa-layers fa-fw fa-1x">
      <FontAwesomeIcon
        className="fa-layers fa-3x"
        icon={faStar}
        style={{ color: "#FFD43B" }}
      />
      <i
        className="fa-layers fa-solid heNeedsToBeRed"
        data-fa-transform="shrink-1 right-5"
      >
        {Math.round(value * 10) / 10}
      </i>
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
