import React, { useEffect } from "react";
import "../screen/screen.css";

const Screen = ({ keyValue }) => {
  useEffect(() => {}, [keyValue]);

  return <div className="piano-screen">{keyValue}</div>;
};
export default Screen;
