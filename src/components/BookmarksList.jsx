import {React, useEffect, useState} from "react";
import PropTypes from "prop-types";
import fetchAllBookmarks from "../services/api/bookmarks"; //services/api/bookmarks";

function BookmarksList() {
    const Bookmark_List = [];
    fetchAllBookmarks.then((json)=>{
        for (const bookmark of json.bookmarks) {
            BookmarksList.append(bookmark.name);
        }
    }).catch(console.error);

    const [ bookmarksData, setBookmarksData ] = useState(Children);

    const bookHandler = () => {
        setBookmarksData(Children);
    };

    useEffect(() => {
        fetchAllBookmarks.then((json)=>{
            const BookmarksList = document.createElement("section");
            for (const bookmark of json.bookmarks) {
                BookmarksList.appendChild(
                    document.createElement("article")).textContent = bookmark.name;
            }
        }).catch(console.error);
        bookHandler();
    });

    return <article>
        {Children}
    </article>;
}

BookmarksList.propTypes = {
};

BookmarksList.defaultProps = {
};

export default BookmarksList;
