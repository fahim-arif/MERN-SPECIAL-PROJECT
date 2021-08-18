import React from "react";

import "../css/ProgressBar.css";

function ProgressBar({ number }) {
  return (
    <div className="ProgressBar-bar">
      <div
        className={ 
          number >= 1
            ? `ProgressBar-progress ProgressBar-progress-active`
            : `ProgressBar-progress`
        }
      >
        <div className="ProgressBar-progress-number">1</div>
        <p className="ProgressBar-progress-text">Personal Info</p>
        <p className="ProgressBar-progress-arrow">&gt;</p>
      </div>
      <div
        className={
          number >= 2
            ? `ProgressBar-progress ProgressBar-progress-active`
            : `ProgressBar-progress`
        }
      >
        <div className="ProgressBar-progress-number">2</div>
        <p className="ProgressBar-progress-text">Basic Professional Info</p>
        <p className="ProgressBar-progress-arrow">&gt;</p>
      </div>
      <div
        className={
          number >= 3
            ? `ProgressBar-progress ProgressBar-progress-active`
            : `ProgressBar-progress`
        }
      >
        <div className="ProgressBar-progress-number">3</div>
        <p className="ProgressBar-progress-text">Detail Professional Info</p>
        <p className="ProgressBar-progress-arrow">&gt;</p>
      </div>
      <div
        className={
          number >= 4
            ? `ProgressBar-progress ProgressBar-progress-active`
            : `ProgressBar-progress`
        }
      >
        <div className="ProgressBar-progress-number">4</div>
        <p className="ProgressBar-progress-text">Account Security</p>
      </div>
      <div className="ProgressBar-completion-ratio">
        <div className="ProgressBar-completion-ratio-text">
          Completion ratio 16%
        </div>
        <div className="ProgressBar-progress-completion-ratio-progress"></div>
      </div>
    </div>
  );
}

export default ProgressBar;
