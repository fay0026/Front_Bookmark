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

    const [ bookmarksData, setBookmarksData ] = useState(1);

    const bookHandler = () => {
        if (bookmarksData === 1) {
            setBookmarksData(2);
        } else {
            setBookmarksData(1);
        }
    };

    useEffect(() => {
        fetchAllBookmarks.then((json)=>{
            const BookmarksList = document.createElement("section");
            for (const bookmark of json.bookmarks) {
                BookmarksList.append(bookmark.name);
            }
        }).catch(console.error);
        bookHandler();
    });

    return (<article>
        {bookmarksData}
    </article>);

    /* return <article>
        {() => {
            for (let b in bookmarksData) {
                return (
                    <li>
                        b.name
                    </li>
                );
        }}}
    </article>; */
}

BookmarksList.propTypes = {
};

BookmarksList.defaultProps = {
};

export default BookmarksList;
