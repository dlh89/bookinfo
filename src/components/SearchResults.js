import React from "react";

const SearchHeader = props => (
  <div>
    {props.resultsData && (
      <div>
        <h2>Results for "{props.searchTerm}"</h2>
        <ul className="list">
          {props.resultsData.map(result => (
            <a href={`/book/${result.id}`} className="list__link">
              <li key={result.id} className="list__item">
                <div className="list__title">{result.volumeInfo.title}</div>
                {result.volumeInfo.authors && (
                  <div>by {result.volumeInfo.authors[0]}</div>
                )}
              </li>
            </a>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default SearchHeader;
