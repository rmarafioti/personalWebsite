import React from "react";

const Popup = ({ isOpen, close, children }) => {
  if (!isOpen) return null;

  return (
    <div className="popUpOverlay" onClick={close}>
      <div className="popUpContent" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Popup;
