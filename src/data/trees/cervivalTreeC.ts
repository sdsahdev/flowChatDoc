import {DecisionTree} from '../../types/types';

const cervicalTreeC: DecisionTree = {
  start: {
    question: 'Supine Cervical Extension',
    options: [
      {label: 'FN', next: 'SMCD'},
      {label: 'DN', next: 'posturalSMCDRotation'},
      {label: 'DP', next: 'treatPain'},
      {label: 'FP', next: 'treatPain'},
    ],
    image: require('../../assets/image/06-SupineCervicalExtension.png'),
  },
  posturalSMCDRotation: {
    question: 'Cervical Extension JMD &/or TED',
    options: [],
    alertType: 'warning', // yellow
    autoNext: 'end',
  },

  SMCD: {
    question: 'There is Postural &/or SMCD affecting Cervical Extension.',
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
    question: 'Thank you for using M-Screen..',
    options: [],
  },
};

export default cervicalTreeC;
