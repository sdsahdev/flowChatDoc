import {DecisionTree} from '../../types/types';

const multiSegmentalRotFour: DecisionTree = {
  start: {
    question: 'Seated Active Internal Tibial Rot.',
    options: [
      { label: 'FN', next: 'seatedActiveExternalTibialRotation' },
      { label: 'DN, DP or FP', next: 'passiveInternalTibialRotation' },
      { label: 'DN, DP or FP', next: 'passiveInternalTibialRotation' },
      { label: 'DN, DP or FP', next: 'passiveInternalTibialRotation' },
    ],
  },

  passiveInternalTibialRotation: {
    question: 'Passive Internal Tibial Rotation',
    options: [
      {
        label: 'FN',
        next: 'tibialRotationSMCD',
      },
      {
        label: 'DN',
        next: 'tibialIntRot_TED_JMD',
      },
      {
        label: 'DP',
        next: 'seatedActiveExternalTibialRotation',
      },
      {
        label: 'FP',
        next: 'seatedActiveExternalTibialRotation',
      },
    ],
  },

  tibialRotationSMCD: {
    question: 'Tibial Rotation SMCD',
    options:[],
    alertType: 'warning',
    autoNext: 'seatedActiveExternalTibialRotation',
  },

  tibialIntRot_TED_JMD: {
    question: 'Tibial Int. Rot. TED &/or JMD',
    options:[],
    alertType: 'warning',
    autoNext: 'seatedActiveExternalTibialRotation',
  },

  seatedActiveExternalTibialRotation: {
    question: 'Seated Act External Tibial Rot.',
    options: [
      {
        label: 'FN',
        next: 'tibialRotationNormal',
      },
      {
        label: 'DN',
        next: 'passiveExternalTibialRotation',
      },
      {
        label: 'DP',
        next: 'passiveExternalTibialRotation',
      },
      {
        label: 'FP',
        next: 'passiveExternalTibialRotation',
      },
    ],
  },

  tibialRotationNormal: {
    question:
      'Tibia External Rotation Mobility is Normal (If no previous rotation findings – Go to Lower Body Extension Flowchart)',
      options:[],
    alertType: 'success',
    autoNext: 'end',
  },

  passiveExternalTibialRotation: {
    question: 'Passive External Tibial Rotation',
    options: [
      {
        label: 'FN',
        next: 'tibialRotationSMCD_2',
      },
      {
        label: 'DN',
        next: 'tibialExtRot_TED_JMD',
      },
      {
        label: 'DP',
        next: 'treatPain',
      },
      {
        label: 'FP',
        next: 'treatPain',
      },
    ],
  },

  tibialRotationSMCD_2: {
    question: 'Tibial Rotation SMCD',
    options:[],
    alertType: 'success',
    autoNext: 'end',
  },

  tibialExtRot_TED_JMD: {
    question: 'Tibial Ext. Rot. TED &/or JMD',
    options:[],
    alertType: 'success',
    autoNext: 'end',
  },
  treatPain: {
    question: 'Treat Pain',
    options: [],
    alertType: 'danger', // red  
    autoNext:'end',
  },

  end: {
    question: 'End of Flowchart',
    options: [],
  },
};

export default multiSegmentalRotFour;
