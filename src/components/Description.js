import React from "react";

const Description = props => (
  <div>
    {props.data && (
      <div>
        <h3>Description</h3>
        <p>{props.data.volumeInfo.description}</p>
      </div>
    )}
  </div>
);

export default Description;
