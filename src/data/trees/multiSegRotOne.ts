import {DecisionTree} from '../../types/types';

const multiSegmentalRotOne: DecisionTree = {
  start: {
    question: 'Seated Rotation (50°)',
    options: [
      {label: 'FN', next: 'goToHipRotationFlows'},
      {label: 'DN', next: 'lumbarLockedER'},
      {label: 'DP', next: 'lumbarLockedER'},
      {label: 'FP', next: 'lumbarLockedER'},
    ],
    image: require('../../assets/image/51-SeatedRotation(50°).png'),
  },

  goToHipRotationFlows: {
    question: 'Go to Hip Rotation Flow',
    options: [],
    alertType: 'success',
    autoNext: 'end',
  },

  lumbarLockedER: {
    question: 'Lumbar Locked (ER) – Active Unilateral Ext./Rot. (50°)',
    options: [
      {label: 'FN', next: 'activeProneElbow'},
      {label: 'DN', next: 'lumbarLockedIR_Active'},
      {label: 'DP', next: 'lumbarLockedIR_Active'},
      {label: 'FP', next: 'lumbarLockedIR_Active'},
      {label: 'DN & Switches Sides', next: 'thoraxRotationSMCD'},
      {label: 'DP & Switches Sides', next: 'thoraxRotationSMCD'},
      {label: 'FP & Switches Sides', next: 'thoraxRotationSMCD'},
    ],
    image: require('../../assets/image/52-LumbarLocked(ER)-ActiveUnilateralExt.-Rot.(50°).png'),
  },

  thoraxRotationSMCD: {
    question: 'Thorax Rotation SMCD',
    options: [],
    alertType: 'warning',
    autoNext: 'activeProneElbow',
  },

  lumbarLockedIR_Active: {
    question: 'Lumbar Locked (IR) – Active Unilateral Ext./Rot. (50°)',
    options: [
      {label: 'FN', next: 'shoulderGirdleTED_JMD'},
      {label: 'DN', next: 'lumbarLockedIR_Passive'},
      {label: 'DP', next: 'lumbarLockedIR_Passive'},
      {label: 'FP', next: 'lumbarLockedIR_Passive'},
    ],
    image: require('../../assets/image/53-LumbarLocked(ER)-ActiveUnilateralExt.-Rot.(50°).png'),
  },

  shoulderGirdleTED_JMD: {
    question: 'Shoulder Girdle TED &/or JMD',
    options: [],
    alertType: 'warning',
    autoNext: 'activeProneElbow',
  },

  lumbarLockedIR_Passive: {
    question: 'Lumbar Locked (IR) – Passive Ext./Rot. (50°)',
    options: [
      {label: 'FN', next: 'thoraxRotationSMCD'},
      {label: 'DN', next: 'thoracicExtRotJMD'},
      {label: 'DP', next: 'treatPainToHipRotation'},
      {label: 'FP', next: 'treatPainToHipRotation'},
    ],
    image: require('../../assets/image/54-LumbarLocked(IR)-PassiveExtension-Rotation(50°).png'),
  },

  thoracicExtRotJMD: {
    question: 'Thorac Ext./Rot. JMD &/or TED – Go to Hip Rotation Flow',
    options: [],
    alertType: 'danger',
    autoNext: 'end',
  },

  treatPainToHipRotation: {
    question: 'Treat Pain – Go to Hip Rotation Flow',
    options: [],
    alertType: 'danger',
    autoNext: 'end',
  },

  activeProneElbow: {
    question: 'Active Prone on Elbow Unilateral Ext./Rot. (30°)',
    options: [
      {label: 'FN', next: 'rotationFinalCheck'},
      {label: 'DN', next: 'passiveProneElbow'},
      {label: 'DP', next: 'passiveProneElbow'},
      {label: 'FP', next: 'passiveProneElbow'},
    ],
    image: require('../../assets/image/55-ActiveProneonElbowUnilateralExtension-Rotation(30°).png'),
  },

  passiveProneElbow: {
    question: 'Passive Prone on Elb Uni. Ext./Rot. (30°)',
    options: [
      {
        label: 'FN',
        next: 'rotationFinalCheck',
      },
      {
        label: 'DN',
        next: 'lumbarSpineJMD_TED',
      },
      {
        label: 'DP',
        next: 'treatPainToHipRotation2',
      },
      {
        label: 'FP',
        next: 'treatPainToHipRotation2',
      },
    ],
    image: require('../../assets/image/56-PassiveProneonElbUni.Ext-Rot.(30°).png'),
  },

  rotationFinalCheck: {
    question:
      'If Thorac Rot. SMCD exists, lumbar spine is normal. If not, consider this a Weight Bearing Spine or Shoulder Girdle Rot. SMCD – Go to Hip Rot Flow',
    alertType: 'success',
    options: [],
    autoNext: 'end',
  },

  lumbarSpineJMD_TED: {
    question: 'Lumbar Spine Ext./Rot. JMD &/or TED – Go to Hip Rotation Flow',
    options: [],
    alertType: 'success',
    autoNext: 'end',
  },

  treatPainToHipRotation2: {
    question: 'Treat Pain – Go to Hip Rotation Flow',
    options: [],
    alertType: 'success',
    autoNext: 'end',
  },

  end: {
    question: 'Thank you for using M-Screen..',
    options: [],
  },
};

export default multiSegmentalRotOne;
