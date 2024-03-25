import React from "react";
import PropTypes from "prop-types";

function Pagination({ data, onChange }) {
  return (
    <article className="pagination">
      {data.first ? (
        <button
          type="button"
          className="btn btn-link btn-secondary"
          onClick={() => onChange(data.first.split("=")[1])}
        >
          First ({data.first.split("=")[1]})
        </button>
      ) : null}
      {data.previous ? (
        <button
          type="button"
          className="btn btn-link btn-secondary"
          onClick={() => onChange(data.previous.split("=")[1])}
        >
          Previous ({data.previous.split("=")[1]})
        </button>
      ) : null}
      {data.current ? (
        <button
          type="button"
          className="btn btn-link btn-secondary"
          onClick={() => onChange(data.current.split("=")[1])}
        >
          Current ({data.current.split("=")[1]})
        </button>
      ) : null}
      {data.next ? (
        <button
          type="button"
          className="btn btn-link btn-secondary"
          onClick={() => onChange(data.next.split("=")[1])}
        >
          Next ({data.next.split("=")[1]})
        </button>
      ) : null}
      {data.last ? (
        <button
          type="button"
          className="btn btn-link btn-secondary"
          onClick={() => onChange(data.last.split("=")[1])}
        >
          Last ({data.last.split("=")[1]})
        </button>
      ) : null}
    </article>
  );
}

Pagination.propTypes = {
  data: PropTypes.shape({
    current: PropTypes.string,
    first: PropTypes.string,
    last: PropTypes.string,
    previous: PropTypes.string,
    next: PropTypes.string,
  }),
  onChange: PropTypes.func,
};

Pagination.defaultProps = {
  data: PropTypes.shape({
    current: "",
    first: "",
    last: "",
    previous: "",
    next: "",
  }),
  onChange: null,
};

export default Pagination;

/* <button type="button" className="btn btn-link btn-secondary">
        {data.previous}
      </button>
      {data.current}
      <button type="button" className="btn btn-link btn-secondary">
        {data.next}
      </button>
      <button type="button" className="btn btn-link btn-secondary">
        {data.last}
      </button> */
