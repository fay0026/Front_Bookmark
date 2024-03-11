import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fastar } from "@fortawesome/free-solid-svg-icons";

function Rating({ value }) {
  return (
    <span>
      <FontAwesomeIcon icon={fastar}> {Math.round(value)} </FontAwesomeIcon>
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
