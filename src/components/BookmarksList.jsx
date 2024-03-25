import React, { useEffect, useState } from "react";
import { fetchAllBookmarks } from "../services/api/bookmarks";
import BookmarkItem from "./BookmarkItem";
import paginationFromHydraView from "../services/transformers/paginationFromHydraView";
import Pagination from "./Pagination";

function BookmarksList() {
  const [bookmarksData, setBookmarksData] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [page, setPage] = useState(1);

  const pageHandler = (change) => {
    setPage(change);
  };

  const searchParams = new URLSearchParams();
  searchParams.append("page", page.toString());

  useEffect(() => {
    fetchAllBookmarks(searchParams).then((json) => {
      setBookmarksData(json["hydra:member"]);
      setPagination(
        paginationFromHydraView(json["hydra:view"], json["hydra:totalItems"]),
      );
    });
  }, [page]);

  return (
    <section>
      <Pagination data={pagination} onChange={pageHandler} />
      {bookmarksData.map((bookmark) => (
        <BookmarkItem key={`${bookmark.id}`} data={bookmark} />
      ))}
      <Pagination data={pagination} onChange={pageHandler} />
    </section>
  );
}

BookmarksList.propTypes = {};

BookmarksList.defaultProps = {};

export default BookmarksList;
