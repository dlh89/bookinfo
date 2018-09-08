import React from "react";
import { Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import HomePage from "../components/HomePage";
import SearchPage from "../components/SearchPage";
import SearchResults from "../components/SearchResults";
import BookPageRouter from "../routers/BookPageRouter";
import Navbar from "../components/Navbar";

export const history = createHistory();

const AppRouter = () => (
  <div>
    <Navbar />
    <Route path="/" component={HomePage} exact={true} />
    <Route path="/search" component={SearchPage} />
    <Route path="/search/:searchTerm" component={SearchResults} />
    <Route path="/book/:book" component={BookPageRouter} />
  </div>
);

export default AppRouter;
