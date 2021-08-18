import React from "react";

import Tuitions from "../components/AvailableTuitions/Tuitions";
import TuitionSearch from "../components/AvailableTuitions/TuitionSearch";
import SearchResult from "../components/AvailableTuitions/SearchResult";

import "../css/AvailableTuitions.css";

function AvailableTutions() {
  return (
    <div className='AvailableTutions-parent-container'>
      <div className='AvailableTutions-child-container'>
        <div className='AvailableTutions-heading'>
          <h1>Tutions</h1>
          <div className='AvailableTutions-liner-box'>
            <div className='AvailableTutions-liner-mark'></div>
            <div className='AvailableTutions-outliner'></div>
          </div>
        </div>

        <div className='AvailableTutions-tution-search-container'>
          <div className='AvailableTutions-tutions'>
            <div className='AvailableTutions-heading2'>
              <h4 className=''>Available Tuitions</h4>
              <h5>Post a tution</h5>
            </div>
            <Tuitions />
          </div>
          <div className='AvailableTutions-search-box'>
            <div className='AvailableTutions-search-bar'>
              <TuitionSearch />
            </div>
            <div className='AvailableTutions-search-result'>
              <SearchResult />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailableTutions;
