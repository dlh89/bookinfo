import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import SearchPage from "../components/SearchPage";
import BookPageRouter from "../routers/BookPageRouter";
import Navbar from "../components/Navbar";

const AppRouter = () => (
  <div>
    <Navbar />
    <Route path="/" component={HomePage} exact={true} />
    <Route path="/search" component={SearchPage} />
    <Route path="/book/:book" component={BookPageRouter} />
  </div>
);

export default AppRouter;
