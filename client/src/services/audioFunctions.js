import * as Tone from "tone";
import { metronomeSynthSettings } from "../settings/settings";

export const startTone = async () => {
  await Tone.start().then(console.log("context started"));
};

export const startMetronome = () => {
  const synth = new Tone.FMSynth().toDestination();

  const part = new Tone.Part(
    (time, value) => {
      synth.triggerAttackRelease(value.note, "4n", time);
      synth.set(metronomeSynthSettings);
      console.log(value.note, " ", time);
    },
    [
      [{ time: "0", note: "800" }],
      [{ time: "0:1", note: "1600" }],
      [{ time: "0:2", note: "1600" }],
      [{ time: "0:3", note: "1600" }],
    ]
  ).start(0);
  part.loop = true;

  Tone.Transport.start();
};

export const stopMetronome = () => {
  if (Tone.Transport.state === "started") {
    Tone.Transport.stop();
  }
};

export const startAudioContext = async (context) => {
  if (context.state === "suspended") {
    await context.resume();
    console.log(context.state);
  }
};
