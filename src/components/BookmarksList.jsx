import React, { useEffect, useState } from "react";
import fetchAllBookmarks from "../services/api/bookmarks";

function BookmarksList() {
  const [bookmarksData, setBookmarksData] = useState([]);

  fetchAllBookmarks().then((json) => {
    setBookmarksData(json["hydra:member"]);
    console.log(json["hydra:member"]);
  });

  console.log(bookmarksData);
  useEffect(() => {
    bookmarksData.map((bookmark) => bookmark[0].name);
  }, [bookmarksData]);

  return <article>{bookmarksData}</article>;
}

BookmarksList.propTypes = {};

BookmarksList.defaultProps = {};

export default BookmarksList;
