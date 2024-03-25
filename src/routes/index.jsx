import React from "react";
import { Route, Switch } from "wouter";
import BookmarksList from "../components/BookmarksList";

function Index() {
  return (
    <Switch>
      <Route path="/" component={BookmarksList} />
    </Switch>
  );
}

/* function index() {
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
} */

export default Index;
