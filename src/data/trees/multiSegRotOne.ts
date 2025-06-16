import {DecisionTree} from '../../types/types';

const multiSegmentalRotOne: DecisionTree = {
 start: {
    question: 'Seated Rotation (50°)',
    options: [
      { label: 'FN', next: 'goToHipRotationFlowcharts' },
      { label: 'DN', next: 'lumbarLockedER' },
      { label: 'DP', next: 'lumbarLockedER' },
      { label: 'FP', next: 'lumbarLockedER' },
    ],
  },

  goToHipRotationFlowcharts: {
    question: 'Go to Hip Rotation Flowcharts',
    options:[],
    alertType: 'success',
    autoNext: 'end',
  },

  lumbarLockedER: {
    question: 'Lumbar Locked (ER) – Active Unilateral Ext./Rot. (50°)',
    options: [
      { label: 'FN', next: 'activeProneElbow' },
      { label: 'DN', next: 'lumbarLockedIR_Active' },
      { label: 'DP', next: 'lumbarLockedIR_Active' },
      { label: 'FP', next: 'lumbarLockedIR_Active' },
      { label: 'DN & Switches Sides', next: 'thoraxRotationSMCD'},
      { label: 'DP & Switches Sides', next: 'thoraxRotationSMCD'},
      { label: 'FP & Switches Sides', next: 'thoraxRotationSMCD'},
    ],
  },

  thoraxRotationSMCD: {
    question: 'Thorax Rotation SMCD',
    options:[],
    alertType: 'warning',
    autoNext: 'activeProneElbow',
  },

  lumbarLockedIR_Active: {
    question: 'Lumbar Locked (IR) – Active Unilateral Ext./Rot. (50°)',
    options: [
      { label: 'FN', next: 'shoulderGirdleTED_JMD' },
      { label: 'DN', next: 'lumbarLockedIR_Passive' },
      { label: 'DP', next: 'lumbarLockedIR_Passive' },
      { label: 'FP', next: 'lumbarLockedIR_Passive' },
    ],
  },

  shoulderGirdleTED_JMD: {
    question: 'Shoulder Girdle TED &/or JMD',
    options:[],
    alertType: 'warning',
    autoNext: 'activeProneElbow',
  },

  lumbarLockedIR_Passive: {
    question: 'Lumbar Locked (IR) – Passive Ext./Rot. (50°)',
    options: [
      { label: 'FN', next: 'thoraxRotationSMCD' },
      { label: 'DN', next: 'thoracicExtRotJMD' },
      { label: 'DP', next: 'treatPainToHipRotation' },
      { label: 'FP', next: 'treatPainToHipRotation' },
    ],
  },

  thoracicExtRotJMD: {
    question: 'Thoracic Ext./Rot. JMD &/or TED – Go to Hip Rotation Flowcharts',
    options:[],
    alertType: 'danger',
    autoNext: 'activeProneElbow',
  },

  treatPainToHipRotation: {
    question: 'Treat Pain – Go to Hip Rotation Flowcharts',
    options:[],
    alertType: 'danger',
    autoNext: 'activeProneElbow',
  },

  activeProneElbow: {
    question: 'Active Prone on Elbow Unilateral Ext./Rot. (30°)',
    options:[
      { label: 'FN', next: 'rotationFinalCheck' },
      { label: 'DN', next: 'passiveProneElbow' },
      { label: 'DP', next: 'passiveProneElbow' },
      { label: 'FP', next: 'passiveProneElbow' },
    ],
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
  },

  rotationFinalCheck: {
    question:
      'If Thor. Rot. SMCD exists, lumbar spine is normal. If not, consider this a Weight Bearing Spine or Shoulder Girdle Rot. SMCD – Go to Hip Rot FC',
    alertType: 'success',
    options:[],
    autoNext: 'end',
  },

  lumbarSpineJMD_TED: {
    question: 'Lumbar Spine Ext./Rot. JMD &/or TED – Go to Hip Rotation FC',
    options:[],
    alertType: 'success',
    autoNext: 'end',
  },

  treatPainToHipRotation2: {
    question: 'Treat Pain – Go to Hip Rotation Flowchart',
    options:[],
    alertType: 'success',
    autoNext: 'end',
  },

  end: {
    question: 'End of Flowchart',
    options: [],
  },
};

export default multiSegmentalRotOne;
