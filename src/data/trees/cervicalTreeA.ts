import {DecisionTree} from '../../types/types';

const cervicalTreeA: DecisionTree = {
  start: {
    question: 'Active Supine Cervical Flexion Test (Chin to Chest)',
    options: [
      {label: 'FN', next: 'posturalSMCD'},
      {label: 'DN', next: 'passiveFlex'},
      {label: 'DP', next: 'passiveFlex'},
      {label: 'FP', next: 'passiveFlex'},
    ],
    image: require('../../assets/image/01cervicalTree1.png'),
  },

  posturalSMCD: {
    question:
      'There is a Postural SMCD affecting Cervical Flexion. This includes Cervical Spine, Thoracic Spine and Shoulder Girdle postural dysfunction.',
    options: [],
    alertType: 'success', // green
    autoNext: 'end',
  },
  passiveFlex: {
    question: 'Passive Supine Cervical Flexion Test',
    options: [
      {label: 'FN', next: 'cervicalSpineSMCD'},
      {label: 'DN', next: 'activeOAFlex'},
      {label: 'DP', next: 'activeOAFlex'},
      {label: 'FP', next: 'activeOAFlex'},
    ],
    image: require('../../assets/image/02-PassiveSupine.png'),
  },

  cervicalSpineSMCD: {
    question: 'Active Cervical Spine Flexion SMCD',
    options: [],
    alertType: 'success', // yellow
    autoNext: 'end',
  },
  activeOAFlex: {
    question: 'Active Supine OA Cervical Flexion Test (20°)',
    options: [
      {label: 'FN Bilat.', next: 'done'},
      {label: 'DN', next: 'oaFlexJMD'},
      {label: 'DP', next: 'oaOrCervicalJMD'},
      {label: 'FP', next: 'oaOrCervicalJMD'},
    ],
    image: require('../../assets/image/03-ActiveSupineOACervicalFlexionTest(20˚).png'),
  },

  oaFlexJMD: {
    question:
      'OA Flexion JMD &/or TED &/or possible Cervical Spine Flexion JMD &/or TED',
    options: [],
    alertType: 'success', // yellow
    autoNext: 'end',
  },

  oaOrCervicalJMD: {
    question: 'Treat Pain',
    options: [],
    alertType: 'danger', // yellow
    autoNext: 'end',
  },

  done: {
    question:
      'If Passive Supine Cervical Flexion (PSCF) was DP or DN then treat as Cervical Spine Flexion JMD &/or TED. If PSCF was FP can also be SMCD - perform segmental testing and soft tissue appraisal.',
    options: [],
    alertType: 'success', // yellow
    autoNext: 'end',
  },
  end: {
    question: 'Thank you for using M-Screen..',
    options: [],
  },
};

export default cervicalTreeA;
