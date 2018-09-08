import React from "react";
import SearchHeader from "./SearchHeader";

const SearchPage = (props) => {
  return ( 
    <div className="container">
      <SearchHeader history={props.history} />
    </div> 
  );
}
 
export default SearchPage;