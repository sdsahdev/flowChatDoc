import {DecisionTree} from '../../types/types';

const singleLegStanceOne: DecisionTree = {
  start: {
    question: 'Vestibular Test - CTSIB (Static Head)',
    options: [
      {
        label: 'FN',
        next: 'ctsibDynamicHead',
      },
      {
        label: 'DN',
        next: 'potentialStaticVestibularDysfunction',
      },
      {
        label: 'DP',
        next: 'potentialStaticVestibularDysfunction',
      },
      {
        label: 'FP',
        next: 'potentialStaticVestibularDysfunction',
      },
    ],
    image: require('../../assets/image/69-VestibularTest-CTSIB(StaticHead).png'),
  },

  potentialStaticVestibularDysfunction: {
    question: 'Potential Static Vestibular Dysfunction',
    options: [],
    autoNext: 'halfKneelingNarrowBase',
    alertType: 'warning',
  },

  ctsibDynamicHead: {
    question: 'CTSIB (Dynamic Head Movement)',
    options: [
      {label: 'FN', next: 'halfKneelingNarrowBase'},
      {
        label: 'Dysfunctional',
        next: 'dynamicVestibularDysfunction',
      },
    ],
    image: require('../../assets/image/70-CTSIB(DynamicHeadMovement).png'),
  },

  dynamicVestibularDysfunction: {
    question: 'Dynamic Vestibular Dysfunction',
    options: [],
    autoNext: 'halfKneelingNarrowBase',
    alertType: 'warning',
  },

  halfKneelingNarrowBase: {
    question: 'Half-Kneeling Narrow Base',
    options: [
      {label: 'FN', next: 'goToSLSAnkleFlow'},
      {label: 'DN', next: 'quadrupedDiagonals'},
      {label: 'DP', next: 'quadrupedDiagonals'},
      {label: 'FP', next: 'quadrupedDiagonals'},
    ],
    image: require('../../assets/image/71-Half-KneelingNarrowBase.png'),
  },

  goToSLSAnkleFlow: {
    question: 'Go to SLS Ankle Flow',
    options: [],
    alertType: 'success',
    autoNext: 'end',
  },

  quadrupedDiagonals: {
    question: 'Quadruped Diagonals',
    options: [
      {
        label: 'FN',
        next: 'weightBearingSpineSMCD',
      },
      {
        label: 'DN',
        next: 'weightBearingHipSMCD',
      },
      {
        label: 'DP',
        next: 'treatPainSLSAnkle',
      },
      {
        label: 'FP',
        next: 'treatPainSLSAnkle',
      },
    ],
    image: require('../../assets/image/72-QuadrupedDiagonals.png'),
  },

  weightBearingSpineSMCD: {
    question:
      'Weight Bearing Spine &/or Hip/Core SMCD - (If Hip Extension is DN treat it first). Go to SLS Ankle Flow.',
    options: [],
    alertType: 'success',
    autoNext: 'end',
  },

  treatPainSLSAnkle: {
    question: 'Treat Pain - Go to SLS Ankle Flow.',
    options: [],
    alertType: 'success',
    autoNext: 'end',
  },

  weightBearingHipSMCD: {
    question:
      'Weight Bearing Hip &/or Core SMCD (If Hip Extension &/or Shoulder Flexion are DN treat those first). Go to SLS Ankle Flow.',
    options: [],
    alertType: 'success',
    autoNext: 'end',
  },

  end: {
    question: 'Thank you for using M-Screen..',
    options: [],
  },
};

export default singleLegStanceOne;
