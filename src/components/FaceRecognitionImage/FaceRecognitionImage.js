import React from 'react'

const FaceRecognitionImage = ({imageUrl, box}) => {
  return (
    <div className="center">
      <div style={{position: 'absolute'}}>
        <img id="inputImage" src={imageUrl} width='500px' height='auto'/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
}

export default FaceRecognitionImage