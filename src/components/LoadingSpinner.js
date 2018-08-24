import React from "react";

const LoadingSpinner = props => (
  <div>
    {props.startCondition &&
      !props.endCondition && <div className="u-spinner u-absolute-center" />}
  </div>
);

export default LoadingSpinner;
