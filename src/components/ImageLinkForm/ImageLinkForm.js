import React from 'react'

const ImageLinkForm = ({onInputChange, onSubmit}) => {
  return (
    <div>
      <p style={{textAlign: 'center'}}>{'This is a face recognition app that will detect faces in your pictures'}</p>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <input type="text" onChange={onInputChange} />
        <button onClick={onSubmit}>Detect</button>
      </div>
    </div>
  );
}

export default ImageLinkForm