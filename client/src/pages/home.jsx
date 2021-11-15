import React, { useEffect, useState, useRef } from "react";

import KeyBoard from "../components/keyBoard";
import DrawKeyboard from "../bkp/drawPianoKeys";

const Home = () => {
  useEffect(() => {
    let canvas = document.getElementById("myCanvas");
    DrawKeyboard(canvas, []);
  }, []);
  return <KeyBoard />;
};

export default Home;
