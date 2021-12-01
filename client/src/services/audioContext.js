import * as Tone from "tone";

export const changeAudioContext = () => {
  const context = new Tone.Context({ latencyHint: "playback" });
  Tone.setContext(context);
};
export const resumeContext = () => {
  Tone.getContext().resume();
};
