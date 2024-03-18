import React, { useEffect, useState } from "react";
import { fetchAllBookmarks } from "../services/api/bookmarks";
import BookmarkItem from "./BookmarkItem";

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
        <BookmarkItem key={`${bookmark.id}`} data={bookmark} />
      ))}
    </section>
  );
}

BookmarksList.propTypes = {};

BookmarksList.defaultProps = {};

export default BookmarksList;
