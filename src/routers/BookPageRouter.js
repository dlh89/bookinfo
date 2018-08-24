import React from "react";
import { Route } from "react-router-dom";
import Overview from "../components/Overview";
import Description from "../components/Description";
import DataContainer from "../components/DataContainer";
import BookPageNavbar from "../components/BookPageNavbar";
import BookHeader from "../components/BookHeader";
import LoadingSpinner from "../components/LoadingSpinner";

export default class BookPageRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookId: this.props.match.params.book
    };
    this.dataCallback = this.dataCallback.bind(this);
  }
  dataCallback(data) {
    this.setState({ data });
  }
  render() {
    return (
      <div className="container">
        <DataContainer
          method="find"
          searchTerm={this.state.bookId}
          dataCallback={this.dataCallback}
        />
        <LoadingSpinner startCondition={true} endCondition={this.state.data} />
        <BookHeader data={this.state.data} />
        <BookPageNavbar match={this.props.match} />
        <Route
          path={`${this.props.match.path}`}
          exact={true}
          render={() => (
            <Overview data={this.state.data} book={this.state.book} />
          )}
        />
        <Route
          path={`${this.props.match.path}/description`}
          render={() => <Description data={this.state.data} />}
        />
      </div>
    );
  }
}
