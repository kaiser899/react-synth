import React, { useEffect } from "react";

const Screen = ({ keyValue }) => {
  useEffect(() => {}, [keyValue]);

  return <div>{keyValue}</div>;
};
export default Screen;
