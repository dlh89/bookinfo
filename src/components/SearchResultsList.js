import React from "react";

const SearchResultsList = props => {
  return (
    <div>
      {props.resultsData && (
        <div>
          <h2 class="subheading subheading--grey u-margin-top-medium">
            Results for "{props.searchTerm}"
          </h2>
          <table className="table u-margin-top-large">
            <tr className="table__row">
              <th className="table__heading">Title</th>
              <th className="table__heading">Author</th>
            </tr>
            {props.resultsData.map(result => (
              <tr className="table__row">
                <td className="table__data">
                  <a
                    href={`/book/${result.id}`}
                    className="list__link"
                    key={result.id}
                  >
                    {result.volumeInfo.title}
                  </a>
                </td>
                {result.volumeInfo.authors && (
                  <td className="table__data">
                    {result.volumeInfo.authors[0]}
                  </td>
                )}
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default SearchResultsList;
