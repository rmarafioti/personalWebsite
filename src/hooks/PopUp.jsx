import React from "react";
import { SlClose } from "react-icons/sl";

const Popup = ({ isOpen, close, children }) => {
  if (!isOpen) return null;

  return (
    <div className="popUpOverlay">
      <div className="popUpContent" onClick={(e) => e.stopPropagation()}>
        <div id="topPopUpSection">
          <h3 className="popUpHeaderTop">App Outline</h3>
          <SlClose id="closeButton" onClick={close} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Popup;
