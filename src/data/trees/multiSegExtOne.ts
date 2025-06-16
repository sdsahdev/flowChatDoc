import {DecisionTree} from '../../types/types';

const multiSegmentalExtOne: DecisionTree = {
  start: {
    question: 'Backward Bend without Upper Extremities',
    options: [
      {label: 'FN', next: 'goToUBExtFlowchart'},
      {label: 'DN', next: 'singleLegBB'},
      {label: 'DP', next: 'singleLegBB'},
      {label: 'FP', next: 'singleLegBB'},
    ],
  },

  goToUBExtFlowchart: {
    question: 'Go to Upper Body Extension Flowchart',
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },

  singleLegBB: {
    question: 'Single Leg Backward Bend',
    options: [
      {label: 'FN', next: 'symmetricalStanceCoreSMCD'},
      {label: 'DN', next: 'pressUp'},
      {label: 'DP', next: 'pressUp'},
      {label: 'FP', next: 'pressUp'},
    ],
  },

  symmetricalStanceCoreSMCD: {
    question:
      'Symmetrical Stance Core SMCD or Anterior Torso TED — Go to Upper Body Extension Flowchart',
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },

  pressUp: {
    question: 'Press Up',
    options: [
      {label: 'FN', next: 'weightBearingSpineExtSMCD'},
      {label: 'DN (> 1 Airex Pad)', next: 'lumbarLockedActive'},
      {label: 'DP (> 1 Airex Pad)', next: 'lumbarLockedActive'},
      {label: 'FP (> 1 Airex Pad)', next: 'lumbarLockedActive'},
    ],
  },

  weightBearingSpineExtSMCD: {
    question:
      'Weight Bearing Spine Extension SMCD — Go to Lower & Upper Body Extension Flowcharts',
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },

  lumbarLockedActive: {
    question: 'Lumbar Locked (IR) - Active Extension/Rotation (50°)',
    options: [
      {label: 'FN', next: 'activeProneElbowUniExtRot'},
      {label: 'DN', next: 'lumbarLockedPassive'},
      {label: 'DP', next: 'lumbarLockedPassive'},
      {label: 'FP', next: 'lumbarLockedPassive'},
    ],
  },

  lumbarLockedPassive: {
    question: 'Lumbar Locked (IR) - Passive Extension/Rotation (50°)',
    options: [
      {label: 'FN', next: 'thoracicExtSMCD'},
      {label: 'DN', next: 'thoracicExtJMD'},
      {label: 'DP', next: 'treatPainGoToLowerBody'},
      {label: 'FP', next: 'treatPainGoToLowerBody'},
    ],
  },

  treatPainGoToLowerBody: {
    question: 'Treat Pain — Go to Lower Body Ext. Flowchart',
    options: [],
    alertType: 'danger',
    autoNext: 'end',
  },

  thoracicExtSMCD: {
    question: 'Thoracic Extension SMCD',
    options: [],
    alertType: 'warning',
    autoNext: 'activeProneElbowUniExtRot',
  },

  thoracicExtJMD: {
    question:
      'Thoracic Extension/Rotation JMD and/or TED — Go to Lower Body Ext. Flowchart',
    options: [],
    alertType: 'danger',
    autoNext: 'end',
  },

  activeProneElbowUniExtRot: {
    question: 'Active Prone on Elbow — Unilateral Extension/Rotation (30°)',
    options: [
      {label: 'FN', next: 'assumeLSpineNormal'},
      {label: 'DN', next: 'passiveProneElbowExtRot'},
      {label: 'DP', next: 'passiveProneElbowExtRot'},
      {label: 'FP', next: 'passiveProneElbowExtRot'},
    ],
  },

  assumeLSpineNormal: {
    question: 'If T-spine has SMCD, assume L-spine is normal.',
    options: [],
    alertType: 'warning',
    autoNext: 'weightBearingSpineExtSMCDFinal',
  },

  passiveProneElbowExtRot: {
    question: 'Passive Prone on Elbow — Unilateral Ext./Rotation (30°)',
    options: [
      {label: 'FN', next: 'weightBearingSpineExtSMCDFinal'},
      {label: 'DN', next: 'lumbarExtJMD_TED'},
      {label: 'DP', next: 'treatPainGoToLowerThenUB'},
      {label: 'FP', next: 'treatPainGoToLowerThenUB'},
    ],
  },

  weightBearingSpineExtSMCDFinal: {
    question:
      'Weight Bearing Spine Extension SMCD or Anterior Torso TED — Go to LB then UB Ext. Flowchart',
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },

  lumbarExtJMD_TED: {
    question:
      'Lumbar Extension/Rotation JMD and/or TED — Go to Lower Body then Upper Body Ext. Flowchart',
    options: [],
    alertType: 'danger',
    autoNext: 'end',
  },

  treatPainGoToLowerThenUB: {
    question: 'Treat Pain — Go to Lower Body then Upper Body Ext. Flowchart',
    options: [],
    alertType: 'danger',
    autoNext: 'end',
  },

  end: {
    question: 'End of Flowchart.',
    options: [],
  },
};

export default multiSegmentalExtOne;
