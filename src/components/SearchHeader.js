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
        <h1 className="heading">Search for a book</h1>
        <form
          onSubmit={this.handleSearch}
          className="search-box u-margin-top-small"
        >
          <input ref={this.searchInput} className="search-box__input" />
          <button className="search-box__button">Search</button>
        </form>
      </div>
    );
  }
}
