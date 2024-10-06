import React from "react";
import image from "../images/SwiftCase.png";
function Image() {
  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4">
      <img
        src={image}
        alt={"instagramlogoimg"}
        className="w-auto h-24 object-contain"
      />{" "}
    </div>
  );
}

export default Image;
