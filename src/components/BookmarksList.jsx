import React, { useEffect, useState } from "react";
import { fetchAllBookmarks } from "../services/api/bookmarks";
import BookmarkItem from "./BookmarkItem";
import paginationFromHydraView from "../services/transformers/paginationFromHydraView";

function BookmarksList() {
  const [bookmarksData, setBookmarksData] = useState([]);
  const [pagi, setPagination] = useState([]);

  useEffect(() => {
    fetchAllBookmarks().then((json) => {
      setBookmarksData(json["hydra:member"]);
      setPagination(
        paginationFromHydraView(json["hydra:view"], json["hydra:totalItems"]),
      );
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
