import React from "react";

const SearchHeader = props => (
  <div>
    {props.resultsData && (
      <div>
        <h2>Results for "{props.searchTerm}"</h2>
        <ul>
          {props.resultsData.map(result => (
            <li key={result.id}>
              <div>
                <a href={`/book/${result.id}`}>{result.volumeInfo.title}</a>
              </div>
              {result.volumeInfo.authors && (
                <div>by {result.volumeInfo.authors[0]}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default SearchHeader;
