import * as Tone from "tone";
import { metronomeSynthSettings } from "../settings/settings";

export const startTone = async () => {
  await Tone.start().then(console.log("context started"));
};

export const startMetronome = () => {
  const synth = new Tone.MembraneSynth().toDestination();

  const part = new Tone.Part(
    (time, value) => {
      synth.triggerAttackRelease(value.note, "4n", time);
      synth.set(metronomeSynthSettings);
    },
    [
      [{ time: "0", note: "C2" }],
      [{ time: "0:1", note: "E2" }],
      [{ time: "0:2", note: "E2" }],
      [{ time: "0:3", note: "E2" }],
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

export const getBPMValue = () => {
  let bpmValue = sessionStorage.getItem("bpm");
  if (bpmValue !== null) {
    bpmValue = Number(bpmValue);
    console.log(bpmValue);
    Tone.Transport.bpm.value = bpmValue;
    return bpmValue;
  } else {
    //alert("issue");
    sessionStorage.setItem("bpm", Tone.Transport.bpm.value);
    return Tone.Transport.bpm.value;
  }
};

export const increaseBPMByTen = (currentBPM, isMetronomeOn) => {
  Tone.Transport.stop();
  currentBPM += 10;
  Tone.Transport.bpm.value = currentBPM;

  //start the metronome again if it was running previously
  isMetronomeOn && Tone.Transport.start();

  //write the new BPM in the session storage
  sessionStorage.setItem("bpm", currentBPM);
};

export const decreaseBPMByTen = (currentBPM, isMetronomeOn) => {
  Tone.Transport.stop();
  currentBPM -= 10;
  Tone.Transport.bpm.value = currentBPM;

  //start the metronome again if it was running previously
  isMetronomeOn && Tone.Transport.start();

  //write the new BPM in the session storage
  sessionStorage.setItem("bpm", currentBPM);
};
