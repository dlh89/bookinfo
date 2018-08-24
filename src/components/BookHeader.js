import React from "react";

const Overview = props => (
  <div>
    {props.data && (
      <div>
        <h1>{props.data.volumeInfo.title}</h1>
        <h3>By {props.data.volumeInfo.authors[0]}</h3>
        <img
          src={props.data.volumeInfo.imageLinks.smallThumbnail}
          alt={props.data.volumeInfo.title}
        />
      </div>
    )}
  </div>
);

export default Overview;
