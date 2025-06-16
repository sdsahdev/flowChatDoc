import {DecisionTree} from '../../types/types';

const cervicalTreeB: DecisionTree = {
  start: {
    question: 'Active Supine Cervical Rotation Test (80°)',
    options: [
      {label: 'FN', next: 'posturalSMCDRotation'},
      {label: 'DN', next: 'passiveRotation'},
      {label: 'DP', next: 'passiveRotation'},
      {label: 'FP', next: 'passiveRotation'},
    ],
  },
  posturalSMCDRotation: {
    question:
      'There is a Postural SMCD affecting Cervical Rotation. This includes Cervical Spine, Thoracic Spine and Shoulder Girdle postural dysfunction.',
    options: [],
    alertType: 'warning', // yellow
    autoNext: 'supineExt',
  },
  supineExt: {
    question: 'Supine Cervical Extension',
    options: [
      {label: 'FN', next: 'SMCD'},
      {label: 'DN', next: 'TED'},
      {label: 'DP', next: 'done'},
      {label: 'FP', next: 'done'},
    ],
  },
  SMCD: {
    question: 'There is Postural &/or SMCD affecting Cervical Extension.',
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },
  TED: {
    question: 'Cervical Extension JMD &/or TED',
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },

  passiveRotation: {
    question: 'Passive Supine Cervical Rotation Test',
    options: [
      {label: 'FN', next: 'activeRotationSMCD'},
      {label: 'DN', next: 'c1c2Rotation'},
      {label: 'DP', next: 'c1c2Rotation'},
      {label: 'FP', next: 'c1c2Rotation'},
    ],
  },
  activeRotationSMCD: {
    question: 'Active Cervical Spine Rotation SMCD',
    options: [],
    alertType: 'warning', // yellow
    autoNext: 'end',
  },
  c1c2Rotation: {
    question: 'C1–C2 Cervical Rotation Test',
    options: [
      {label: 'FN', next: 'lowerCervicalJMDorTED'},
      {label: 'DN', next: 'c1c2JMDorTED'},
      {label: 'FP', next: 'done'},
      {label: 'DP', next: 'done'},
    ],
  },
  lowerCervicalJMDorTED: {
    question:
      'If Passive Supine Cervical Rotation (PSCR) was DP or DN then treat as Lower Cervical Rotational JMD &/or TED. If PSCR was FP, can also be SMCD - perform segmental testing and soft tissue appraisal.',
    options: [],
    alertType: 'warning', // yellow
    autoNext: 'end',
  },
  c1c2JMDorTED: {
    question:
      'C1–C2 JMD &/or TED &/or possible Lower Cervical Spine JMD &/or TED.',
    options: [],
    alertType: 'warning', // yellow
    autoNext: 'end',
  },
  done: {
    question: 'Treat Pain',
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },
  end: {
    question: 'End of Flowchart',
    options: [],
  },
};

export default cervicalTreeB;
