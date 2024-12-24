import React from 'react';

const LoadingSpinner = () => {
    return (
      <div className="loading">
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  };
  

export default LoadingSpinner;