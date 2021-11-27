import React from "react";

const StartButton = ({ handleButtonStart }) => {
  return (
    <button
      id={"startButton"}
      onClick={() => {
        handleButtonStart();
      }}
    >
      START
    </button>
  );
};
export default StartButton;
