import React, { useEffect } from "react";
import { SlClose } from "react-icons/sl";
import ReactDOM from "react-dom";

const Popup = ({ isOpen, close, children }) => {
  // Disable scrolling when the popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="popUpOverlay" onClick={close}>
      <div className="popUpContent" onClick={(e) => e.stopPropagation()}>
        <div id="topPopUpSection">
          <h3 className="popUpHeaderTop">App Outline</h3>
          <SlClose id="closeButton" onClick={close} />
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("popup-root")
  );
};

export default Popup;
