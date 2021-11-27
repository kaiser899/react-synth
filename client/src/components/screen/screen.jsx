import React, { useEffect } from "react";

import "../screen/screen.css";

const Screen = (pressedItems) => {
  useEffect(() => {}, [pressedItems.length]);
  return <div className="piano-screen">{pressedItems}</div>;
};
export default Screen;
