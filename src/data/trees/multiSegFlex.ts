import {DecisionTree} from '../../types/types';

const multiSegmentalFlexionTree: DecisionTree = {
  start: {
    question: 'Single Leg Forward Bend',
    options: [
      {label: 'FN', next: 'longSitting_Bilateral'},
      {label: 'Bilateral DN, DP or FP', next: 'longSitting_Bilateral'},
      {label: 'Unilateral DN, DP or FP', next: 'longSitting_Bilateral'},
      // {label: ' DP ', next: 'longSitting_Bilateral'},
      // {label: ' FP', next: 'longSitting_Bilateral'},
    ],
    image: require('../../assets/image/27-SingleLegForwardBend.png'),
  },

  longSitting_Fn: {
    question: 'Long Sitting (FN 80° Sacral Angle)',
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },

  longSitting_Bilateral: {
    question: 'Long Sitting',
    options: [
      {label: 'FN 80° Sacral Angle', next: 'weightBearing_HipFlexionSMCD'},
      {label: 'DN', next: 'activeSLR'},
      {label: 'DP ', next: 'activeSLR'},
      {label: 'FP', next: 'activeSLR'},
    ],
    image: require('../../assets/image/28-LongSitting.png'),
  },

  weightBearing_HipFlexionSMCD: {
    question: 'Weight Bearing Hip Flexion Pattern SMCD',
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },

  activeSLR: {
    question: 'Active SLR',
    options: [
      {label: 'FN', next: 'proneRocking'},
      {label: 'DN (<70°)', next: 'passiveSLR'},
      {label: 'DP (<70°)', next: 'passiveSLR'},
      {label: 'FP (<70°)', next: 'passiveSLR'},
    ],
    image: require('../../assets/image/29-ActiveSLR.png'),
  },

  passiveSLR: {
    question: 'Passive SLR',
    options: [
      {label: 'FN > 80°', next: 'coreSMCD'},
      {label: 'DN', next: 'supineKneeChest'},
      {label: 'DP', next: 'supineKneeChest'},
      {label: 'FP', next: 'supineKneeChest'},
    ],
    image: require('../../assets/image/30-PassiveSLR.png'),
  },

  coreSMCD: {
    question: 'Core SMCD &/or Active Hip Flexion SMCD',
    options: [],
    alertType: 'warning',
    autoNext: 'proneRocking',
  },

  supineKneeChest: {
    question: 'Supine Knee to Chest (T)',
    options: [
      {label: 'FN', next: 'posteriorChainTED'},
      {label: 'DN', next: 'hipJMD_TED'},
      {label: 'DP', next: 'proneRocking'},
      {label: 'FP', next: 'proneRocking'},
    ],
    image: require('../../assets/image/32-SupineKneetoChest(T)2ndimage.png'),
  },

  posteriorChainTED: {
    question:
      'Posterior Chain TED or if PSLR was FP could be Active Hip Flexion SMCD',
    options: [],
    alertType: 'warning',
    autoNext: 'proneRocking',
  },

  hipJMD_TED: {
    question: 'Hip JMD and/or Posterior Chain TED',
    options: [],
    alertType: 'warning',
    autoNext: 'proneRocking',
  },

  proneRocking: {
    question: 'Prone Rocking',
    options: [
      {label: 'FN', next: 'weightBearingSpineSMCD'},
      {label: 'DN', next: 'spinalFlexion_JMD_TED'},
      {label: 'DP', next: 'treatPain'},
      {label: 'FP', next: 'treatPain'},
    ],
    image: require('../../assets/image/31-ProneRocking.png'),
  },

  spinalFlexion_JMD_TED: {
    question: 'Spinal Flexion JMD &/or TED',
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },

  weightBearingSpineSMCD: {
    question: `If no previous mobility findings consider this a Weight Bearing Spine &/or Hip SMCD - otherwise first treat 'Core SMCD &/or Active Hip Flexion SMCD', 'Posterior Chain TED or if PSLR was FP could be Active Hip Flexion SMCD', 'Hip JMD &/or Posterior Chain TED'.`,
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },

  treatPain: {
    question: 'Treat Pain',
    options: [],
    alertType: 'danger', // red
    autoNext: 'end',
  },

  end: {
    question: 'Thank you for using M-Screen...',
    options: [],
  },
};

export default multiSegmentalFlexionTree;
