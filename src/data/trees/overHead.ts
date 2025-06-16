import {DecisionTree} from '../../types/types';

const overHeadOne: DecisionTree = {
  start: {
    question: 'Deep Squat',
    options: [
      {label: 'FN', next: 'multiSegmentalExtension'},
      {label: 'DN', next: 'halfKneelingDorsiflexion'},
      {label: 'DP', next: 'halfKneelingDorsiflexion'},
      {label: 'FP', next: 'halfKneelingDorsiflexion'},
    ],
  },
  multiSegmentalExtension: {
    question: 'If Squat is now FN - Go to Multi-Segmental Extension Breakout',
    options: [],
    alertType: 'success',
    autoNext: 'end',
  },
  halfKneelingDorsiflexion: {
    question: 'Half Kneeling Dorsiflexion',
    options: [
      {label: 'FN', next: 'supineKneesToChestShins'},
      {label: 'DN', next: 'lowerPosteriorTEDJMD'},
      {label: 'DP', next: 'treatPain'},
      {label: 'FP', next: 'treatPain'},
    ],
  },
  treatPain: {
    question: 'Treat Pain',
    options: [],
    alertType: 'warning',
    autoNext: 'supineKneesToChestShins',
  },
  lowerPosteriorTEDJMD: {
    question: 'Lower Posterior Chain TED and/or Ankle JMD',
    options: [],
    alertType: 'warning',
    autoNext: 'supineKneesToChestShins',
  },
  supineKneesToChestShins: {
    question: 'Supine Knees to Chest Holding Shins',
    options: [
      {label: 'DN, DP or FP', next: 'supineKneesToChestThighsFromLeft'},
      {
        label: 'FN w/ DP or FP Dorsiflexion',
        next: 'treatDorsiflexionChemicalPain',
      },
      {
        label: 'FN w/ DN Dorsiflexion',
        next: 'treatDorsiflexionConsiderKneeHip',
      },
      {label: 'FN w/ FN Dorsiflexion', next: 'assistedSquat'},
    ],
  },
  treatDorsiflexionChemicalPain: {
    question: 'Treat Dorsiflexion Chemical Pain',
    options: [],
    alertType: 'danger',
    autoNext: 'end',
  },
  treatDorsiflexionConsiderKneeHip: {
    question: 'Treat Dorsiflexion - Consider Knee & Hip - Flexion Normal',
    options: [],
    alertType: 'success',
    autoNext: 'end',
  },
  supineKneesToChestThighsFromLeft: {
    question: 'Supine Knees to Chest Holding Thighs',
    options: [
      {label: 'FN', next: 'kneeJMDorLowerAnteriorTED'},
      {label: 'DN', next: 'hipJMDorPosteriorTED'},
      {label: 'DP', next: 'treatChemicalPain'},
      {label: 'FP', next: 'treatChemicalPain'},
    ],
  },
  kneeJMDorLowerAnteriorTED: {
    question: 'Knee JMD (Flexion) &/or Lower Anterior Chain TED',
    options: [],
    alertType: 'warning',
    autoNext:'end',
  },
  treatChemicalPain: {
    question: 'Treat Chemical Pain',
    options: [],
    alertType: 'danger',
    autoNext:'end',
  },
  hipJMDorPosteriorTED: {
    question: 'Hip JMD &/or Posterior Chain TED, but still can have Knee JMD',
    options: [],
    alertType: 'warning',
    autoNext:'end',
  },
  assistedSquat: {
    question: 'Assisted Squat',
    options: [
      {label: 'FN', next: 'weightBearingAnkleKneeHipTED'},
      {label: 'DN', next: 'weightBearingSMCD'},
      {label: 'DP', next: 'treatChemicalPainInAnyJoint'},
      {label: 'FP', next: 'treatChemicalPainInAnyJoint'},
    ],
  },
  weightBearingAnkleKneeHipTED: {
    question: 'Weight Bearing Ankle, Knee and/or Hip/Core Flexion SMCD',
    options: [],
    alertType: 'success',
    autoNext:'end',
  },
  weightBearingSMCD: {
    question:
      'Weight Bearing Ankle, Knee and/or Hip/Core Flexion SMCD. Go to MSK Breakout',
    options: [],
    alertType: 'success',
    autoNext:'end',
  },
  treatChemicalPainInAnyJoint: {
    question: 'Treat Chemical Pain in Hip, Knee or Ankle.',
    options: [],
    alertType: 'danger',
  },
  end: {
    question: 'End of Flowchart',
    options: [],
  },
};

export default overHeadOne;
