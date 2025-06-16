import {DecisionTree} from '../../types/types';

const multiSegmentalExtThree: DecisionTree = {
  start: {
    question: 'Unilateral Shoulder Backward Bend',
    options: [
      {label: 'FN', next: 'fnPotential'},
      {label: 'DN', next: 'latStretchHipsFlexed'},
      {label: 'DP', next: 'latStretchHipsFlexed'},
      {label: 'FP', next: 'latStretchHipsFlexed'},
    ],
  },
  fnPotential: {
    question:
      'Potential Anterior Torso TED or Cervical Spine Involvement - Double Check Cervical Patterns',
    options: [],
    alertType: 'warning',
    autoNext: 'latStretchHipsFlexed',
  },

  latStretchHipsFlexed: {
    question: 'Supine Lat Stretch Hips Flexed',
    options: [
      {label: 'FN', next: 'checkIfSpineHipDysfunction'},
      {label: 'DN', next: 'latStretchHipsExtended'},
      {label: 'DP', next: 'latStretchHipsExtended'},
      {label: 'FP', next: 'latStretchHipsExtended'},
    ],
  },

  checkIfSpineHipDysfunction: {
    question:
      'If no previous Hip or Spine extension mobility dysfunctions, consider this a Weight Bearing Upper Quarter Extension SMCD – otherwise treat hips and spine first.',
    options: [],
    alertType: 'success',
    autoNext: 'end',
  },

  latStretchHipsExtended: {
    question: 'Supine Lat Stretch Hips Extended',
    options: [
      {label: 'FN', next: 'posteriorLateralChainTED1'},
      {label: 'DN', next: 'shoulderFlexionNotFull'},
      {label: 'DP', next: 'shoulderFlexionNotFull'},
      {label: 'FP', next: 'shoulderFlexionNotFull'},
    ],
  },

  shoulderFlexionNotFull: {
    question: 'Shoulder flexion improves but not full',
    options:[],
    alertType: 'warning',
    autoNext: 'posteriorLateralChainTED2',
  },

  posteriorLateralChainTED1: {
    question:
      'Posterior/Lateral Chain TED &/or Possible Hip Extension Dysfunction – Go to Lower Body Extension Flowchart',
      options:[],
    alertType: 'danger',
    autoNext: 'lumbarLockedER',
  },

  posteriorLateralChainTED2: {
    question:
      'Posterior/Lat. Chain TED &/or Possible Hip Extension Dysfunction – Make sure you also run Lower Body Extension Flowchart',
      options:[],
    alertType: 'danger',
    autoNext: 'lumbarLockedER',
  },

  lumbarLockedER: {
    question: 'Lumbar Locked (ER) – Active Unilateral Ext./Rot. (50°)',
    options: [
      {label: 'FN', next: 'shoulderGirdleSMCD'},
      {label: 'DN, DP or FP', next: 'lumbarLockedIR_Active'},
    ],
  },

  shoulderGirdleSMCD: {
    question: 'Shoulder Girdle SMCD',
    alertType: 'warning',
    autoNext: 'lumbarLockedIR_Active',
  },

  lumbarLockedIR_Active: {
    question: 'Lumbar Locked (IR) – Active Extension/Rotation (50°)',
    autoNext: 'lumbarLockedIR_Passive',
  },

  lumbarLockedIR_Passive: {
    question: 'Lumbar Locked (IR) – Passive Extension/Rotation',
    options: [
      {
        label: 'DN',
        next: 'thoracicJMD_TED',
      },
      {
        label: 'FP or DP',
        next: 'thoracicJMD_TED',
      },
      {
        label: 'FN',
        next: 'shoulderGirdleJMD_TED',
      },
    ],
  },

  thoracicJMD_TED: {
    question:
      'Thoracic Extension / Rotation JMD &/or TED – possible Shoulder JMD/TED as well',
    alertType: 'danger',
    autoNext: 'end',
  },

  shoulderGirdleJMD_TED: {
    question: 'Shoulder Girdle JMD or TED',
    alertType: 'warning',
    autoNext: 'end',
  },

  end: {
    question: 'End of Flowchart',
    options: [],
  },
};

export default multiSegmentalExtThree;
