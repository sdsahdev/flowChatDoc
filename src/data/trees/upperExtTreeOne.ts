import {DecisionTree} from '../../types/types';

const upperExtTreeOne: DecisionTree = {
  start: {
    question: 'Active Prone Upper Extremity Pattern One (IR)',
    options: [
      {label: 'DN, DP or FP', next: 'passiveIR'},
      {label: 'FN', next: 'elbowFlex'},
    ],
  },
  passiveIR: {
    question: 'Passive Prone Upper Extremity Pattern One (IR)',
    options: [
      {label: 'DN, DP or FP', next: 'shoulder90IR'},
      {label: 'FN', next: 'elbowFlex'},
    ],
  },
  shoulder90IR: {
    question:
      'Active Prone Shoulder 90/90 IR Test (60° &/or Total Arc of 150°)',
    options: [
      {label: 'FN', next: 'extShoulderActive'},
      {label: 'DN, DP or FP', next: 'passiveShoulderIR'},
    ],
  },
  passiveShoulderIR: {
    question: 'Passive Prone Shoulder IR Test',
    options: [
      {label: 'FN', next: 'extShoulderActive'},
      {label: 'DN', next: 'shoulderIRJMD'},
      {label: 'DP or FP', next: 'treatChemPain'},
    ],
  },
  elbowFlex: {
    question: 'Active Prone Elbow Flex. Test (Ext.)',
    options: [
      {label: 'FN', next: 'lumbarLocked'},
      {label: 'DN, DP or FP', next: 'passiveElbowFlex'},
    ],
  },
  passiveElbowFlex: {
    question: 'Passive Prone Elbow Flexion Test (Ext.)',
    options: [
      {label: 'FN', next: 'lumbarLocked'},
      {label: 'DP or FP', next: 'treatPain'},
      {label: 'DN', next: 'elbowFlexJMD'},
    ],
  },
  shoulderIRJMD: {
    question: 'Shoulder IR JMD or TED',
    options: [],
  },
  elbowFlexJMD: {
    question: 'Elbow Flex JMD or TED',
    options: [],
  },
  treatPain: {
    question: 'Treat Pain',
    options: [],
  },
  treatChemPain: {
    question: 'Treat Chemical Pain',
    options: [],
  },
  extShoulderActive: {
    question: 'Active Prone Shoulder Ext. Test (50°)',
    options: [
      {label: 'DN, DP or FP', next: 'passiveExtShoulder'},
      {label: 'FN', next: 'passiveExtShoulder'},
    ],
  },
  passiveExtShoulder: {
    question: 'Passive Prone Shoulder Ext. Test',
    options: [
      {label: 'FN', next: 'done'},
      {label: 'DN', next: 'shoulderExtJMD'},
      {label: 'DP or FP', next: 'treatChemPain'},
    ],
  },
  shoulderExtJMD: {
    question: 'Shoulder Ext. JMD or TED',
    options: [],
  },
  lumbarLocked: {
    question: 'Lumbar Locked (CH) Act Ext./Rot.',
    options: [
      {label: 'FN', next: 'done'},
      {label: 'DN, DP or FP', next: 'lumbarLockedPassive'},
    ],
  },
  lumbarLockedPassive: {
    question: 'Lumbar Locked (CH) Passive Ext./Rot.',
    options: [
      {label: 'FN', next: 'shoulderGirdleSMCD'},
      {label: 'DP or FP', next: 'treatPain'},
      {label: 'DN', next: 'thoracicJMD'},
    ],
  },
  shoulderGirdleSMCD: {
    question: 'Postural and/or Shoulder Girdle SMCD',
    options: [],
  },
  thoracicJMD: {
    question: 'Thoracic Ext. JMD, TED',
    options: [],
  },
  done: {
    question: 'End of flowchart. No further actions.',
    options: [],
  },
};

export default upperExtTreeOne;
