import {DecisionTree} from '../../types/types';

const multiSegmentalExtTwo: DecisionTree = {
  start: {
    question: 'FABER Test',
    options: [
      {label: 'FN', next: 'modifiedThomas'},
      {label: 'DN', next: 'stabilizedFABER'},
      {label: 'DP', next: 'stabilizedFABER'},
      {label: 'FP', next: 'stabilizedFABER'},
    ],
    image: require('../../assets/image/40-FABERTest.png'),
  },

  stabilizedFABER: {
    question: 'Stabilized FABER Test',
    options: [
      {label: 'FN', next: 'hipCoreSMCD'},
      {label: 'DN', next: 'hipSIJMD_TED'},
      {label: 'DP', next: 'hipSIJMD_TED'},
      {label: 'FP', next: 'hipSIJMD_TED'},
    ],
    image: require('../../assets/image/41-StabilizedFABERTest.png'),
  },

  hipCoreSMCD: {
    question: 'Hip/Core SMCD',
    options: [],
    alertType: 'warning',
    autoNext: 'modifiedThomas',
  },

  hipSIJMD_TED: {
    question:
      'Hip/SI JMD &/or TED – Perform Local Biomechanical Testing of the Hip and SI',
    options: [],
    alertType: 'warning',
    autoNext: 'modifiedThomas',
  },

  modifiedThomas: {
    question: 'Modified Thomas',
    options: [
      {label: 'FN with Knee Straight', next: 'lowerAnteriorChainTED'},
      {label: 'FN with Hip Abducted', next: 'lowerLateralChainTED'},
      {
        label: 'FN with Hip Abducted & Knee Straight',
        next: 'lowerAnteriorAndLateralChainTED',
      },
      {label: 'DN', next: 'hipExtJMD_TED_SMCD'},
      {label: 'DP', next: 'treatPain'},
      {label: 'FP', next: 'treatPain'},
      {label: 'FN', next: 'treatFABERFirst'}, // For double FN
    ],
    image: require('../../assets/image/42-ModifiedThomas.png'),
  },

  lowerAnteriorChainTED: {
    question: 'Lower Anterior Chain TED',
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },

  lowerLateralChainTED: {
    question: 'Lower Lateral Chain TED',
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },

  lowerAnteriorAndLateralChainTED: {
    question: 'Lower Anterior and Lateral Chain TED',
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },

  hipExtJMD_TED_SMCD: {
    question: 'Hip Ext. JMD &/or TED and/or Core SMCD',
    options: [],
    alertType: 'danger',
    autoNext: 'end',
  },

  treatFABERFirst: {
    question: 'If FABER was DN, DP or FP then stop and treat FABER',
    options: [],
    alertType: 'warning',
    autoNext: 'proneActiveHipExtension',
  },
  treatPain: {
    question: 'Treat Pain',
    options: [],
    alertType: 'danger', // red
    autoNext: 'end',
  },

  proneActiveHipExtension: {
    question: 'Prone Active Hip Extension',
    options: [
      {
        label: 'FN (> or = 10 degrees Extension)',
        next: 'checkSpineOrHipExtSMCD',
      },
      {label: 'DN', next: 'pronePassiveHipExtension'},
      {label: 'DP', next: 'pronePassiveHipExtension'},
      {label: 'FP', next: 'pronePassiveHipExtension'},
    ],
    image: require('../../assets/image/43-ProneActiveHipExtension.png'),
  },

  checkSpineOrHipExtSMCD: {
    question:
      'If Spine Extension was dysfunctional consider Hip normal. If not - there is a Weight Bearing Hip Extension SMCD &/or Limited Ankle Dorsiflexion (Refer to ODS & SLS).',
    options: [],
    alertType: 'success',
    autoNext: 'end',
  },

  pronePassiveHipExtension: {
    question: 'Prone Passive Hip Extension',
    options: [
      {label: 'FN', next: 'coreSMCD_orActiveHipSMCD'},
      {label: 'DN', next: 'hipExtJMD_TED'},
      {label: 'DP', next: 'treatPain'},
      {label: 'FP', next: 'treatPain'},
    ],
    image: require('../../assets/image/44-PronePassiveHipExtension.png'),
  },

  hipExtJMD_TED: {
    question: 'Hip Extension JMD &/or TED',
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },

  coreSMCD_orActiveHipSMCD: {
    question: 'Core SMCD &/or Active Hip Extension SMCD',
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },

  end: {
    question: 'Thank you for using M-Screen..',
    options: [],
  },
};

export default multiSegmentalExtTwo;
