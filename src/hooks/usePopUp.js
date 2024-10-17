import { useState } from "react";

/**
 *
 * @returns functionality for the use of the pop up modal opening, closing and setting its contents when viewed
 */
function usePopUp() {
  const [popUp, setPopUp] = useState(false);
  const [popUpContent, setPopUpContent] = useState(null);

  const openPopUp = (content) => {
    setPopUpContent(content);
    setPopUp(true);
  };

  const closePopUp = () => {
    setPopUp(false);
    setPopUpContent(null);
  };

  return {
    popUp,
    popUpContent,
    openPopUp,
    closePopUp,
  };
}

export default usePopUp;
