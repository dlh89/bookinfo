import React from "react";

export default class SearchHeader extends React.Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.searchCallback(
      this.searchInput.current.value.trim().toLowerCase()
    );
    this.searchInput.current.value = "";
  }
  render() {
    return (
      <div>
        <h1>Search for a book</h1>
        <form onSubmit={this.handleSearch}>
          <input ref={this.searchInput} />
          <button>Search</button>
        </form>
      </div>
    );
  }
}
