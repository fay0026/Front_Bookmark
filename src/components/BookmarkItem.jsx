import React from "react";
import PropTypes from "prop-types";
import Rating from "./Rating";
import { avatarUrl } from "../services/api/bookmarks";

function BookmarkItem({ data }) {
  const $split = data.owner.split("/");
  const $id = $split[3];
  return (
    <article className="personalSpace">
      <Rating className="personalSpace" value={data.rateAverage} />
      <a className="personalSpace" href={data.url}>
        {data.name}
      </a>
      <img src={avatarUrl($id)} alt="user profile" />
    </article>
  );
}

BookmarkItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    isPublic: PropTypes.bool,
    url: PropTypes.string,
    rateAverage: PropTypes.number,
    owner: PropTypes.string,
  }),
};

BookmarkItem.defaultProps = {
  data: null,
};

export default BookmarkItem;
