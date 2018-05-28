import React from 'react';
import Tilt from 'react-tilt';

const Logo = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
      <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner">
          <img src="https://sportshub.cbsistatic.com/i/r/2018/05/20/7ce898fa-09a7-48d3-ac3f-b50dd9f8e273/thumbnail/770x433/23171780952ca54685b09429b00156a1/lebron-james.jpg" width="300px" />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo