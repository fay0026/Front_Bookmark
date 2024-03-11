export const BASE_URL = "https://iut-rcc-infoapi.univ-reims.fr/bookmarks";
// export const BASE_URL = "https://iut-rcc-infoapi.univ-reims.fr/bookmarks/";

function fetchAllBookmarks() {
  // return fetch(BASE_URL || "/bookmarks").then((response) => response.json());
  return fetch(`${BASE_URL}/bookmarks`).then((response) => response.json());
}

export default fetchAllBookmarks;
