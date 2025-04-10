import React from 'react';
import './Stats.css';
import TrackMap from './TrackMap';

export default function Circuit({ title, desc, pathData, points, drszones, setCursorHidden  }) {

    

  return (
    <div>
      <div className="track-container">
        <div className="circuit-desc">
          <p className="topic-number">2</p>
          <h3>{title}</h3>
          <p className="information">{desc}</p>
                </div>
            <div className='track-map'>
          <TrackMap
            pathData={pathData}
            points={points}
            drszones={drszones}
            setCursorHidden={setCursorHidden}
          />
            </div>
      </div>
    </div>
  );
}
