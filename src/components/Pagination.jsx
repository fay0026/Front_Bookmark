import React from "react";
import PropTypes from "prop-types";

function Pagination({ data }) {
  return (
    <article className="pagination">
      {data.first ? (
        <button type="button" className="btn btn-link btn-secondary">
          <a href={data.first}>First ({data.first.split("=")[1]})</a>
        </button>
      ) : null}
      {data.previous ? (
        <button type="button" className="btn btn-link btn-secondary">
          <a href={data.previous}>Previous ({data.previous.split("=")[1]})</a>
        </button>
      ) : null}
      {data.current ? (
        <button type="button" className="btn btn-link btn-secondary">
          <a href={data.current}>Current ({data.current.split("=")[1]})</a>
        </button>
      ) : null}
      {data.next ? (
        <button type="button" className="btn btn-link btn-secondary">
          <a href={data.next}>Next ({data.next.split("=")[1]})</a>
        </button>
      ) : null}
      {data.last ? (
        <button type="button" className="btn btn-link btn-secondary">
          <a href={data.last}>Last ({data.last.split("=")[1]})</a>
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
};

Pagination.defaultProps = {
  data: PropTypes.shape({
    current: "",
    first: "",
    last: "",
    previous: "",
    next: "",
  }),
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
