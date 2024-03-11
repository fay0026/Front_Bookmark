export const BASE_URL = "https://iut-rcc-infoapi.univ-reims.fr/bookmarks/";

function fetchAllBookmarks() {
  return fetch(BASE_URL).then((response) => response.json());
}

export default fetchAllBookmarks;
