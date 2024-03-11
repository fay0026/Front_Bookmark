import React, { useEffect, useState } from "react";
import fetchAllBookmarks from "../services/api/bookmarks";

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
        <article key={`${bookmark.id}`}>{bookmark.name}</article>
      ))}
    </section>
  );
}

BookmarksList.propTypes = {};

BookmarksList.defaultProps = {};

export default BookmarksList;
