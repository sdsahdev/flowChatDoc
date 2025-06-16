import {DecisionTree} from '../../types/types';

const multiSegmentalRotTwo: DecisionTree = {
  start: {
    question: 'Seated Active External Hip Rotation',
    options: [
      {label: 'FN (>40°)', next: 'proneActiveExternalHipRotation'},
      {label: 'DN', next: 'seatedPassiveExternalHipRotation'},
      {label: 'DP', next: 'seatedPassiveExternalHipRotation'},
      {label: 'FP', next: 'seatedPassiveExternalHipRotation'},
    ],
  },

  seatedPassiveExternalHipRotation: {
    question: 'Seated Passive External Hip Rotation',
    options: [
      { label: 'FN', next: 'proneActiveExternalHipRotation'},
      { label: 'DN', next: 'hipJMD_Flexed'},
      { label: 'DP', next: 'treatPain_TibialRotationFlowchart'},
      { label: 'FP', next: 'treatPain_TibialRotationFlowchart'},
    ],
  },

  hipJMD_Flexed: {
    question: 'Hip JMD &/or TED for Ext. Rotation with Hip Flexed',
    options:[],
    alertType: 'warning',
    autoNext: 'proneActiveExternalHipRotation',
  },

  treatPain_TibialRotationFlowchart: {
    question: 'Treat Pain – Go to Tibia Rot. Flowchart',
    options:[],
    alertType: 'warning',
    autoNext: 'proneActiveExternalHipRotation',
  },

  proneActiveExternalHipRotation: {
    question: 'Prone Active External Hip Rotation',
    options: [
      {label: 'FN (>40°)', next: 'weightBearingSMCDCheck'},
      {label: 'DN', next: 'pronePassiveExternalHipRotation'},
      {label: 'DP', next: 'pronePassiveExternalHipRotation'},
      {label: 'FP', next: 'pronePassiveExternalHipRotation'},
    ],
  },

  pronePassiveExternalHipRotation: {
    question: 'Prone Passive External Hip Rotation',
    options: [
      { label: 'FN', next: 'seatPassive'},
      { label: 'DN', next: 'hipJMD_Extended'},
      { label: 'DP', next: 'treatPain_TibialRotationFlowchart'},
      { label: 'FP', next: 'treatPain_TibialRotationFlowchart'},
    ],
  },

  hipJMD_Extended: {
    question:
      'Hip JMD &/or TED for Ext. Rot. with Hip Extended – Go to Tibial Rotation Flowchart and Lower Body Extension Breakout',
      options:[],
    alertType: 'warning',
    autoNext: 'end',
  },

  weightBearingSMCDCheck: {
    question:
      'If Seated Passive Rotation was DN stop and treat the DN. If no previous signs of hip rotation dysfunction consider the hips normal and go to Tibial Rotation Flowchart. If not, consider this a Weight Bearing External Hip Rotation SMCD – Go to Tibial Rotation Flowchart.',
      options:[],
    alertType: 'success',
    autoNext: 'end',
  },
  seatPassive: {
    question:'If Seated Passive Rotation was DN stop and Treat the DN. If not consider this a weight Bearing External Hip Rotation SMCD - Go to Tibial Rotation Flowchart.',
    options:[],
    alertType: 'success',
    autoNext: 'end',
  },
  end: {
    question: 'End of Flowchart',
    options: [],
  },
};

export default multiSegmentalRotTwo;
