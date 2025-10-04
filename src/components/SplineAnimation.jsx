import React from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineAnimation() {
  return (
    // We remove 100vw and 100vh here, so it only fills its parent container
    <div style={{ width: '100%', height: '100%' }}> 
      <Spline 
        scene="https://my.spline.design/blobs-tkWQqaGp7HZyUCUCjYSJl29J/" 
      />
    </div>
  );
}

