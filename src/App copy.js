import React, { useState } from "react";
import "./style.css";

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUploadButtonClick = () => {
    // handle the image upload logic here
    console.log(selectedFile);
  };

  return (
    <div className="image-upload-container">
      <div className="box-decoration">
        <label htmlFor="image-upload-input" className="image-upload-label">
          {selectedFile ? selectedFile.name : "Choose an image"}
        </label>
        <img src="./photo.png" alt="upload image" className="img-display" />
        <input
          id="image-upload-input"
          type="file"
          onChange={handleFileInputChange}
        />
        <button
          className="image-upload-button"
          onClick={handleUploadButtonClick}
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default ImageUpload;
