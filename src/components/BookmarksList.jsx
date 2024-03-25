import React, { useEffect, useState } from "react";
import { fetchAllBookmarks } from "../services/api/bookmarks";
import BookmarkItem from "./BookmarkItem";
import paginationFromHydraView from "../services/transformers/paginationFromHydraView";
import Pagination from "./Pagination.jsx";

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
      <Pagination data={pagi} />
      {bookmarksData.map((bookmark) => (
        <BookmarkItem key={`${bookmark.id}`} data={bookmark} />
      ))}
      <Pagination data={pagi} />
    </section>
  );
}

BookmarksList.propTypes = {};

BookmarksList.defaultProps = {};

export default BookmarksList;
