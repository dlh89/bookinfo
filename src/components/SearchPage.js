import React from "react";
import SearchHeader from "./SearchHeader";
import SearchResults from "./SearchResults";
import DataContainer from "./DataContainer";

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      resultsData: ""
    };
    this.onSearch = this.onSearch.bind(this);
    this.onData = this.onData.bind(this);
  }
  onData(data) {
    console.log("resultsData: ", data);
    // setState with a resultsData prop to pass to SearchResults
    this.setState({ resultsData: data });
  }
  onSearch(searchTerm) {
    this.setState({ searchTerm });
  }
  render() {
    return (
      <div>
        <SearchHeader searchCallback={this.onSearch} />
        <DataContainer
          method={"search"}
          searchTerm={this.state.searchTerm}
          dataCallback={this.onData}
        />
        <SearchResults
          searchTerm={this.state.searchTerm}
          resultsData={this.state.resultsData}
        />
      </div>
    );
  }
}
