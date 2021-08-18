import React from "react";
import { Link } from "react-router-dom";
import "../../css/ProgressBar.css";

const ServiceRegProcess = ({ step1, step2, step3, step4 }) => {
  return (
    <div>
      <div className='ProgressBar-bar'>
        <div
          className={
            step1
              ? `ProgressBar-progress ProgressBar-progress-active`
              : `ProgressBar-progress`
          }
        >
          {step1 ? (
            <>
              <Link className='d-flex' to='/personal-info'>
                <span className='ProgressBar-progress-number'>1</span>
              </Link>
              <Link className='d-flex' to='personal-info'>
                <span className='ProgressBar-progress-text'>Personal Info</span>
              </Link>
              <span className='ProgressBar-progress-arrow'>&gt;</span>
            </>
          ) : (
            <>
              <span className='ProgressBar-progress-number'>1</span>
              <span className='ProgressBar-progress-text'>Personal Info</span>
              <span className='ProgressBar-progress-arrow'>&gt;</span>
            </>
          )}
        </div>
        <div
          className={
            step2
              ? `ProgressBar-progress ProgressBar-progress-active`
              : `ProgressBar-progress`
          }
        >
          {step2 ? (
            <>
              <Link className='d-flex' to='/professional-info'>
                <span className='ProgressBar-progress-number'>2</span>
              </Link>
              <Link className='d-flex' to='/professional-info'>
                <span className='ProgressBar-progress-text'>
                  Basic Professional Info
                </span>
              </Link>
              <span className='ProgressBar-progress-arrow'>&gt;</span>
            </>
          ) : (
            <>
              <span className='ProgressBar-progress-number'>2</span>
              <span className='ProgressBar-progress-text'>
                Basic Professional Info
              </span>
              <span className='ProgressBar-progress-arrow'>&gt;</span>
            </>
          )}
        </div>
        <div
          className={
            step3
              ? `ProgressBar-progress ProgressBar-progress-active`
              : `ProgressBar-progress`
          }
        >
          {step3 ? (
            <>
              <Link className='d-flex' to='#'>
                <span className='ProgressBar-progress-number'>3</span>
              </Link>
              <Link className='d-flex' to='#'>
                <span className='ProgressBar-progress-text'>
                  Detail Professional Info
                </span>
              </Link>
              <span className='ProgressBar-progress-arrow'>&gt;</span>
            </>
          ) : (
            <>
              <span className='ProgressBar-progress-number'>3</span>
              <span className='ProgressBar-progress-text'>
                Detail Professional Info
              </span>
              <span className='ProgressBar-progress-arrow'>&gt;</span>
            </>
          )}
        </div>
        <div
          className={
            step4
              ? `ProgressBar-progress ProgressBar-progress-active`
              : `ProgressBar-progress`
          }
        >
          {step4 ? (
            <>
              <Link className='d-flex' to='/security-info'>
                <div className='ProgressBar-progress-number'>4</div>
              </Link>
              <Link className='d-flex' to='/security-info'>
                <p className='ProgressBar-progress-text'>Account Security</p>
              </Link>
            </>
          ) : (
            <>
              <span className='ProgressBar-progress-number'>4</span>
              <span className='ProgressBar-progress-text'>
                Account Security
              </span>
            </>
          )}
        </div>
        <div className='ProgressBar-completion-ratio'>
          <div className='ProgressBar-completion-ratio-text'>
            Completion ratio 16%
          </div>
          <div className='ProgressBar-progress-completion-ratio-progress'></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceRegProcess;
