import {DecisionTree} from '../../types/types';

const upperExtTreeTwo: DecisionTree = {
  start: {
    question: 'Active Prone Upper Extremity Pattern Two (ER)',
    options: [
      {label: 'FN', next: 'lumbarLockedActive'},
      {label: 'DN', next: 'passiveProneUE1'},
      {label: 'DP', next: 'passiveProneUE1'},
      {label: 'FP', next: 'passiveProneUE1'},
    ],
  },
  passiveProneUE1: {
    question: 'Passive Prone Upper Extremity Pattern Two (ER)',
    options: [
      {label: 'FN', next: 'lumbarLockedActive'},
      {label: 'DN', next: 'activeProneShoulderIR'},
      {label: 'DP', next: 'activeProneShoulderIR'},
      {label: 'FP', next: 'activeProneShoulderIR'},
    ],
  },
  activeProneShoulderIR: {
    question: 'Prone Shoulder 90/90 ER Test (90° &/or Total Arc of 150°)',
    options: [
      {label: 'FN', next: 'activeShoulderExt'},
      {label: 'DN', next: 'passiveProneShoulderIR'},
      {label: 'DP', next: 'passiveProneShoulderIR'},
      {label: 'FP', next: 'passiveProneShoulderIR'},
    ],
  },
  passiveProneShoulderIR: {
    question: 'Passive Prone Shoulder ER Test',
    options: [
      {label: 'FN', next: 'shoulderIR_SMCD'},
      {label: 'DN', next: 'shoulderIR_JMD'},
      {label: 'DP', next: 'treatChemPainIR'},
      {label: 'FP', next: 'treatChemPainIR'},
    ],
  },
  shoulderIR_SMCD: {
    question: 'Shoulder ER SMCD',
    options: [],
    alertType: 'warning', // yellow
    autoNext: 'activeShoulderExt',
  },
  shoulderIR_JMD: {
    question: 'Shoulder ER JMD or TED',
    options: [],
    alertType: 'warning', // yellow
    autoNext: 'activeShoulderExt',
  },
  treatChemPainIR: {
    question: 'Treat Chemical Pain',
    options: [],
    alertType: 'warning', // yellow
    autoNext: 'activeShoulderExt',
  },
  activeShoulderExt: {
    question: 'Active Prone Shldr Flx/Abd Test (170°)',
    options: [
      {label: 'FN', next: 'activeElbowFlex'},
      {label: 'DN', next: 'passiveShoulderExt'},
      {label: 'DP', next: 'passiveShoulderExt'},
      {label: 'FP', next: 'passiveShoulderExt'},
    ],
  },
  passiveShoulderExt: {
    question: 'Passive Prone Shoulder FI/Ab Test',
    options: [
      {label: 'FN', next: 'shoulderExt_SMCD'},
      {label: 'DN', next: 'shoulderExt_JMD'},
      {label: 'DP', next: 'treatChemPainExt'},
      {label: 'FP', next: 'treatChemPainExt'},
    ],
  },
  shoulderExt_SMCD: {
    question: 'Shoulder FI/Ab SMCD',
    options: [],
    alertType: 'warning', // yellow
    autoNext: 'activeElbowFlex',
  },
  shoulderExt_JMD: {
    question: 'Shoulder FI/Ab JMD or TED',
    options: [],
    alertType: 'warning', // yellow
    autoNext: 'activeElbowFlex',
  },
  treatChemPainExt: {
    question: 'Treat Chem Pain',
    options: [],
    alertType: 'warning', // yellow
    autoNext: 'activeElbowFlex',
  },

  // Right branch – Elbow and Lumbar Locked
  activeElbowFlex: {
    question: 'Act. Prone Elbow Flex. Test (Flex)',
    options: [
      {label: 'FN', next: 'lumbarLockedActive'},
      {label: 'DN', next: 'passiveElbowFlex'},
      {label: 'DP', next: 'passiveElbowFlex'},
      {label: 'FP', next: 'passiveElbowFlex'},
    ],
  },
  passiveElbowFlex: {
    question: 'Passive Prone Elbow Flexion Test (Flex)',
    options: [
      {label: 'FN', next: 'elbowFlex_SMCD'},
      {label: 'DP', next: 'treatPainElbow'},
      {label: 'FP', next: 'treatPainElbow'},
      {label: 'DN', next: 'elbowFlex_JMD'},
    ],
  },
  elbowFlex_SMCD: {
    question: 'Elbow Flex SMCD',
    options: [],
    alertType: 'warning', // yellow
    autoNext: 'lumbarLockedActive',
  },
  treatPainElbow: {
    question: 'Treat Pain',
    options: [],
    alertType: 'warning', // yellow
    autoNext: 'lumbarLockedActive',
  },
  elbowFlex_JMD: {
    question: 'Elbow Flex JMD or TED',
    options: [],
    alertType: 'warning', // yellow
    autoNext: 'lumbarLockedActive',
  },
  lumbarLockedActive: {
    question: 'Lumbar Locked (CH) Act Ext./Rot.',
    options: [
      {label: 'FN', next: 'ifNoPrevious'},
      {label: 'DN', next: 'lumbarLockedPassive'},
      {label: 'DP', next: 'lumbarLockedPassive'},
      {label: 'FP', next: 'lumbarLockedPassive'},
    ],
  },
  lumbarLockedPassive: {
    question: 'Lumbar Locked (CH) Passive Ext./Rot.',
    options: [
      {label: 'FN', next: 'posturalShoulderSMCD'},
      {label: 'DN', next: 'treatPainThoracic'},
      {label: 'DP', next: 'treatPain'},
      {label: 'FP', next: 'treatPain'},
    ],
  },
  ifNoPrevious: {
    question:
      'If no previous Orange Boxes consider this a Postural &/or Shoulder Girdle SMCD. Otherwise treat orange boxes first.',
    options: [],
    alertType: 'success', // green
    autoNext: 'end,',
  },
  treatPain: {
    question: 'Treat Pain',
    options: [],
    alertType: 'danger', // red
    autoNext: 'end,',
  },
  treatPainThoracic: {
    question: 'Thoracic Ext. JMD, TED',
    options: [],
    alertType: 'success', // green
    autoNext: 'end,',
  },
  posturalShoulderSMCD: {
    question: 'Postural &/or Shoulder Girdle SMCD',
    options: [],
    alertType: 'success', // green
    autoNext: 'end,',
  },
  end: {
    question: 'End of Flowchart',
    options: [],
  },
};

export default upperExtTreeTwo;
