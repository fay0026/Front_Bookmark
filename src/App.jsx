import React from "react";
import BookmarksList from "./components/BookmarksList";
import Rating from "./components/Rating";

function App() {
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <main className="app__main">
        <BookmarksList />
      </main>
      <footer className="app__footer footer">footer</footer>
    </div>
  );
}

export default App;
