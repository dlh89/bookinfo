import React from "react";

const Overview = props => (
  <div>
    <h1>This is the Overview</h1>
    {props.data && (
      <div>
        <p>Length: {props.data.volumeInfo.pageCount} pages</p>
        <p>Published: {props.data.volumeInfo.publishedDate}</p>
        {props.data.saleInfo.retailPrice && (
          <p>
            Price: {props.data.saleInfo.retailPrice.amount}{" "}
            {props.data.saleInfo.retailPrice.currencyCode}
          </p>
        )}
      </div>
    )}
  </div>
);

export default Overview;
