import React from "react";
import useUpload from "../hooks/useUpload"; // Import the custom hook

function UploadData() {
  const { handleUpload } = useUpload();

  return (
    <div>
      <button className="btn" onClick={handleUpload}>
        Upload Data
      </button>
    </div>
  );
}

export default UploadData;
