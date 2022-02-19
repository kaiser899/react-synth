export const metronomeSynthSettings = {
  harmonicity: 8,
  modulationIndex: 2,
  oscillator: {
    type: "sine",
  },
  envelope: {
    attack: 0.001,
    decay: 2,
    sustain: 0.1,
    release: 2,
  },
  modulation: {
    type: "square",
  },
  modulationEnvelope: {
    attack: 0.002,
    decay: 0.2,
    sustain: 0,
    release: 0.2,
  },
  volume: "-20",
};

export const synthSettings = [
  {
    volume: 0,
    detune: 0,
    portamento: 0,
    envelope: {
      attack: 0.005,
      attackCurve: "linear",
      decay: 0.1,
      decayCurve: "exponential",
      release: 1,
      releaseCurve: "exponential",
      sustain: 0.3,
    },
    oscillator: {
      partialCount: 0,
      partials: [],
      phase: 0,
      type: "sine",
    },
  },
  {
    volume: 0,
    detune: 0,
    portamento: 0,
    envelope: {
      attack: 0.005,
      attackCurve: "linear",
      decay: 0.1,
      decayCurve: "exponential",
      release: 1,
      releaseCurve: "exponential",
      sustain: 0.3,
    },
    oscillator: {
      partialCount: 0,
      partials: [],
      phase: 0,
      type: "triangle",
    },
  },
  {
    volume: 0,
    detune: 0,
    portamento: 0,
    envelope: {
      attack: 0.005,
      attackCurve: "linear",
      decay: 0.1,
      decayCurve: "exponential",
      release: 1,
      releaseCurve: "exponential",
      sustain: 0.3,
    },
    oscillator: {
      partialCount: 0,
      partials: [],
      phase: 0,
      type: "square",
    },
  },
];

export const synthNames = ["SINE", "TRIANGLE", "SQUARE"];
