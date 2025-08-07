import {DecisionTree} from '../../types/types';

const singleLegStanceTwo: DecisionTree = {
  start: {
    question: 'Heel Walks',
    options: [
      {label: 'FN', next: 'toeWalks'},
      {label: 'DN', next: 'pronePassiveDorsiflexionFromOthers'},
      {label: 'DP', next: 'pronePassiveDorsiflexionFromOthers'},
      {label: 'FP', next: 'pronePassiveDorsiflexionFromOthers'},
    ],
    image: require('../../assets/image/73-HeelWalks.png'),
  },

  pronePassiveDorsiflexionFromOthers: {
    question: 'Prone Passive Dorsiflexion',
    options: [
      {label: 'FN', next: 'dorsiflexionSMCD'},
      {label: 'DN', next: 'lowerPosteriorTED'},
      {label: 'DP', next: 'treatPain'},
      {label: 'FP', next: 'treatPain'},
    ],
    image: require('../../assets/image/74-PronePassiveDorsiflexion.png'),
  },
  treatPain: {
    question: 'Treat Pain',
    options: [],
    alertType: 'warning',
    autoNext: 'toeWalks',
  },
  dorsiflexionSMCD: {
    question: 'Dorsiflexion SMCD',
    options: [],
    alertType: 'warning',
    autoNext: 'toeWalks',
  },
  lowerPosteriorTED: {
    question: 'Lower Posterior Chain TED &/or JMD',
    options: [],
    alertType: 'warning',
    autoNext: 'toeWalks',
  },
  toeWalks: {
    question: 'Toe Walks',
    options: [
      {label: 'FN', next: 'seatedActiveInversionEversion'},
      {label: 'DN', next: 'pronePassivePlantarflexion'},
      {label: 'DP', next: 'pronePassivePlantarflexion'},
      {label: 'FP', next: 'pronePassivePlantarflexion'},
    ],
  },
  pronePassivePlantarflexion: {
    question: 'Prone Passive Plantarflexion',
    options: [
      {label: 'FN', next: 'plantarflexionSMCD'},
      {label: 'DN', next: 'lowerAnteriorTED'},
      {label: 'DP', next: 'treatPain1'},
      {label: 'FP', next: 'treatPain1'},
    ],
    image: require('../../assets/image/76-PronePassivePlantarflexion.png'),
  },
  plantarflexionSMCD: {
    question: 'Plantarflexion SMCD',
    options: [],
    alertType: 'warning',
    autoNext: 'seatedActiveInversionEversion',
  },
  lowerAnteriorTED: {
    question: 'Lower Anterior Chain TED &/or JMD',
    options: [],
    alertType: 'warning',
    autoNext: 'seatedActiveInversionEversion',
  },
  treatPain1: {
    question: 'Treat Pain',
    options: [],
    alertType: 'warning',
    autoNext: 'seatedActiveInversionEversion',
  },

  seatedActiveInversionEversion: {
    question: 'Seated Active Ankle Inversion/Eversion',
    options: [
      {label: 'FN', next: 'proprioceptiveDeficit'},
      {label: 'DN', next: 'passiveAnkleInversionEversion'},
      {label: 'DP', next: 'passiveAnkleInversionEversion'},
      {label: 'FP', next: 'passiveAnkleInversionEversion'},
    ],
    image: require('../../assets/image/77-SeatedActiveAnkleInversion-Eversion.png'),
  },
  passiveAnkleInversionEversion: {
    question: 'Passive Ankle Inversion/Eversion',
    options: [
      {label: 'FN', next: 'smcdLocalExam'},
      {label: 'DN', next: 'jmdTEDLocalExam'},
      {label: 'DP', next: 'treatPain2'},
      {label: 'FP', next: 'treatPain2'},
    ],
    image: require('../../assets/image/78-PassiveAnkleInversion-Eversion2.png'),
  },
  jmdTEDLocalExam: {
    question:
      'Ankle (Eversion or Inversion) JMD, TED - * Perform local foot/ankle exam',
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },
  smcdLocalExam: {
    question:
      'Ankle (Eversion or Inversion) SMCD - * Perform local foot/ankle exam',
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },
  proprioceptiveDeficit: {
    question:
      'If no Red, Orange or Positive Blue Boxes so far = Proprioceptive Deficit',
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },
  treatPain2: {
    question: 'Treat Pain',
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },
  end: {
    question: 'Thank you for using M-Screen..',
    options: [],
  },
};

export default singleLegStanceTwo;
