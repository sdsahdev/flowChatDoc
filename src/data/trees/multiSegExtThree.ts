import {DecisionTree} from '../../types/types';

const multiSegmentalExtThree: DecisionTree = {
  start: {
    question: 'Unilateral Shoulder Backward Bend',
    options: [
      {label: 'FN', next: 'fnPotential'},
      {label: 'DN', next: 'latStretchHipsFlexed'},
      {label: 'DP', next: 'latStretchHipsFlexed'},
      {label: 'FP', next: 'latStretchHipsFlexed'},
    ],
    image: require('../../assets/image/45-UnilateralShoulderBackwardBend.png'),
  },
  fnPotential: {
    question:
      'Potential Anterior Torso TED or Cervical Spine Involvement - Double Check Cervical Patterns',
    options: [],
    alertType: 'warning',
    autoNext: 'latStretchHipsFlexed',
  },

  latStretchHipsFlexed: {
    question: 'Supine Lat Stretch Hips Flexed',
    options: [
      {label: 'FN', next: 'checkIfSpineHipDysfunction'},
      {label: 'DN', next: 'latStretchHipsExtended'},
      {label: 'DP', next: 'latStretchHipsExtended'},
      {label: 'FP', next: 'latStretchHipsExtended'},
    ],
    image: require('../../assets/image/46-SupineLatStretchHipsFlexed.png'),
  },

  checkIfSpineHipDysfunction: {
    question:
      'If no previous Hip or Spine extension mobility dysfunctions, consider this a Weight Bearing Upper Quarter Extension SMCD – otherwise treat hips and spine first.',
    options: [],
    alertType: 'success',
    autoNext: 'end',
  },

  latStretchHipsExtended: {
    question: 'Supine Lat Stretch Hips Extended',
    options: [
      {label: 'FN', next: 'posteriorLateralChainTED1'},
      {label: 'DN, DP or FP', next: 'lumbarLockedER'},
      {
        label: 'Shoulder flexion improves but not full',
        next: 'posteriorLateralChainTED2',
      },
      // {label: 'FP', next: 'shoulderFlexionNotFull'},
    ],
  },

  shoulderFlexionNotFull: {
    question: 'Shoulder flexion improves but not full',
    options: [],
    alertType: 'warning',
    autoNext: 'posteriorLateralChainTED2',
  },

  posteriorLateralChainTED1: {
    question:
      'Posterior/Lateral Chain TED &/or Possible Hip Extension Dysfunction – Go to Lower Body Extension Flow',
    options: [],
    alertType: 'danger',
    autoNext: 'end',
  },

  posteriorLateralChainTED2: {
    question:
      'Posterior/Lat. Chain TED &/or Possible Hip Extension Dysfunction – Make sure you also run Lower Body Extension Flow',
    options: [],
    alertType: 'danger',
    autoNext: 'lumbarLockedER',
  },

  lumbarLockedER: {
    question: 'Lumbar Locked (ER) – Active Unilateral Ext./Rot. (50°)',
    options: [
      {label: 'FN', next: 'shoulderGirdleSMCD'},
      {label: 'DN', next: 'lumbarLockedIR_Active'},
      {label: 'DP', next: 'lumbarLockedIR_Active'},
      {label: 'FP', next: 'lumbarLockedIR_Active'},
    ],
    image: require('../../assets/image/48-LumbarLocked(ER)-ActiveUnilateralExt.-Rot.(50°).png'),
  },

  shoulderGirdleSMCD: {
    question: 'Shoulder Girdle SMCD',
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },

  lumbarLockedIR_Active: {
    question: 'Lumbar Locked (IR) – Active Extension/Rotation (50°)',
    options: [
      {
        label: 'FN',
        next: 'shoulderGirdleJMD_TED',
      },
      {
        label: 'DN',
        next: 'lumbarLockedIR_Passive',
      },
      {
        label: 'DP',
        next: 'lumbarLockedIR_Passive',
      },
      {
        label: 'FP',
        next: 'lumbarLockedIR_Passive',
      },
    ],
    image: require('../../assets/image/49-LumbarLocked(IR)-ActiveExtension-Rotation(50°).png'),
  },

  lumbarLockedIR_Passive: {
    question: 'Lumbar Locked (IR) – Passive Extension/Rotation',
    options: [
      {
        label: 'FN',
        next: 'thoracicJMD_TED1',
      },
      {
        label: 'DN',
        next: 'thoracicJMD_TED',
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
    image: require('../../assets/image/50-LumbarLocked(IR)-PassiveExtension-Rotation.png'),
  },

  thoracicJMD_TED1: {
    question: 'Thoracic Ext./Rot. SMCD',
    options: [],
    alertType: 'danger',
    autoNext: 'end',
  },
  thoracicJMD_TED: {
    question:
      'Thoracic Extension / Rotation JMD &/or TED – possible Shoulder JMD/TED as well',
    options: [],
    alertType: 'danger',
    autoNext: 'end',
  },
  treatPain: {
    question: 'Treat Pain',
    options: [],
    alertType: 'danger', // red
    autoNext: 'end',
  },

  shoulderGirdleJMD_TED: {
    question: 'Shoulder Girdle JMD or TED',
    options: [],
    alertType: 'warning',
    autoNext: 'end',
  },

  end: {
    question: 'Thank you for using M-Screen..',
    options: [],
  },
};

export default multiSegmentalExtThree;
