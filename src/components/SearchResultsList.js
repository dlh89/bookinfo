import React from "react";

const SearchResultsList = props => {
  return (
    <div>
      {props.resultsData && (
        <div>
          <h2 className="subheading u-margin-top-medium">
            Results for "{props.searchTerm}"
          </h2>
          <hr className="u-hr u-hr--primary u-margin-top-small" />
          <ul className="list">
            {props.resultsData.map(result => (
              <a
                href={`/book/${result.id}`}
                className="list__link"
                key={result.id}
              >
                <li className="list__item">
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
};

export default SearchResultsList;
