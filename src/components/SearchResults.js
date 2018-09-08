import React from "react";
import DataContainer from "../components/DataContainer";
import LoadingSpinner from "../components/LoadingSpinner";
import SearchResultsList from "../components/SearchResultsList";

export default class searchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsData: null
    };
    this.resultsData = this.resultsData.bind(this);
    this.searching = this.searching.bind(this);
  }
  resultsData(data) {
    this.setState({
      resultsData: data
    });
  }
  searching() {
    this.setState({
      resultsData: null
    });
  }
  render() {
    return (
      <div className="container">
        <DataContainer
          method="search"
          searchingCallback={this.searching}
          searchTerm={this.props.match.params.searchTerm}
          dataCallback={this.resultsData}
        />
        <LoadingSpinner
          startCondition={this.props.match.params.searchTerm}
          endCondition={this.state.resultsData}
        />
        <SearchResultsList
          searchTerm={this.props.match.params.searchTerm}
          resultsData={this.state.resultsData}
        />
      </div>
    );
  }
}
