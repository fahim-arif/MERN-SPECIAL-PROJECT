import React from "react";

import "../../css/SearchResult.css";

function SearchResult() {
  return (

    <div className="SearchResult-body">
      <div className="SearchResult-heading">Search Summary</div>
      <div className="SearchResult-row">
        <div className="SearchResult-col">Male tutor Prefernce :</div>
        <div className="SearchResult-col">2000</div>
      </div>
      <div className="SearchResult-row">
        <div className="SearchResult-col">Female tutor Prefernce :</div>
        <div className="SearchResult-col">2000</div>
      </div>
      <div className="SearchResult-row">
        <div className="SearchResult-col">Any Gender Prefernce :</div>
        <div className="SearchResult-col">2000</div>
      </div>
      <div className="SearchResult-row">
        <div className="SearchResult-col">Bangla Medium :</div>
        <div className="SearchResult-col">2000</div>
      </div>
      <div className="SearchResult-row">
        <div className="SearchResult-col">English Medium :</div>
        <div className="SearchResult-col">2000</div>
      </div>
      <div className="SearchResult-row">
        <div className="SearchResult-col">Search Result:</div>
        <div className="SearchResult-col">2000</div>
      </div>
    </div>
  );
}

export default SearchResult;
