import * as Tone from "tone";

const changeAudioContext = () => {
  const context = new Tone.Context({ latencyHint: "playback" });
  Tone.setContext(context);
};
export default changeAudioContext;
