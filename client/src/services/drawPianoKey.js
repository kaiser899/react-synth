const drawPianoKey = (key, x, y, w, h, type) => {
  return `<rect x ="${x}" y="${y}" width=${w} height="${h} class="${type}-key key">
    <text class="${type}-key-text">${key}</text></rect>`;
};
export default drawPianoKey;
