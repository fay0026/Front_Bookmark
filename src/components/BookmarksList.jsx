import React, { useEffect, useState } from "react";
import fetchAllBookmarks from "../services/api/bookmarks";
import rating from "./Rating.jsx";
import Rating from "./Rating.jsx";

function BookmarksList() {
  const [bookmarksData, setBookmarksData] = useState([]);

  useEffect(() => {
    fetchAllBookmarks().then((json) => {
      setBookmarksData(json["hydra:member"]);
    });
  }, []);

  return (
    <section>
      {bookmarksData.map((bookmark) => (
        <article key={`${bookmark.id}`}>
          {bookmark.name}
          <Rating value={3.58} />
        </article>
      ))}
    </section>
  );
}

BookmarksList.propTypes = {};

BookmarksList.defaultProps = {};

export default BookmarksList;
