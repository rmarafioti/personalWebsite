import React, { useState } from "react";

const [page, setPage] = useState(null);

const pdfLoad = ({ page }) => {
  setPage(page);
};

export default pdfLoad;
