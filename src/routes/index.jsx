import React from "react";
import { Route, Switch } from "wouter";
import BookmarksList from "../components/BookmarksList";
import NotFound from "../views/NotFound";

function Index() {
  return (
    <Switch>
      <Route path="/" component={BookmarksList} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Index;
