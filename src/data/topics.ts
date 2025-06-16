import {MainTopic} from '../types/types';
import cervicalTreeA from './trees/cervicalTreeA';
import cervicalTreeB from './trees/cervicalTreeB';
import upperExtTreeOne from './trees/upperExtTreeOne';
import upperExtTreeTwo from './trees/upperExtTreeTwo';
import multiSegmentalFlexionTree from './trees/multiSegFlex';
import multiSegmentalExtOne from './trees/multiSegExtOne';
import multiSegmentalExtTwo from './trees/multiSegExtTwo';
import multiSegmentalExtThree from './trees/multiSegExtThree';
import multiSegmentalRotOne from './trees/multiSegRotOne';
import multiSegmentalRotTwo from './trees/multiSegRotTwo';
import multiSegmentalRotThree from './trees/multiSegRotThree';
import multiSegmentalRotFour from './trees/multiSegRotFour';
import singleLegStanceOne from './trees/singleLegOne';
import singleLegStanceTwo from './trees/singleLegTwo';
import overHeadOne from './trees/overHead';

const topics: MainTopic[] = [
  {
    id: 'cervical',
    title: 'CERVICAL SPINE PATTERN BREAKOUTS',
    subtopics: [
      {
        id: 'cerv-a',
        title: 'Active Supine Cervical Flexion Test (Chin to Chest)',
        tree: cervicalTreeA,
      },
      {
        id: 'cerv-b',
        title: 'Active Supine Cervical Rotation Test (80°)',
        tree: cervicalTreeB,
      },
    ],
  },
  {
    id: 'upper-ext',
    title: 'UPPER EXTREMITY PATTERN BREAKOUTS',
    subtopics: [
      {
        id: 'upper-a',
        title: 'Limited Upper Extremity Pattern One',
        tree: upperExtTreeOne,
      },
       {
        id: 'upper-b',
        title: 'Limited Upper Extremity Pattern Two',
        tree: upperExtTreeTwo,
      },
    ],
  },
  {
    id: 'multi-seg-flex',
    title: 'MULTI_SEGMENTAL FLEXION BREAKOUTS',
    subtopics: [
      {
        id: 'multi-flx',
        title: 'Limited Multi-Segmental Flexion',
        tree: multiSegmentalFlexionTree,
      },
    ],
  },
   {
    id: 'multi-seg-ext',
    title: 'MULTI_SEGMENTAL EXTENSION BREAKOUTS',
    subtopics: [
      {
        id: 'multi-ext-1',
        title: 'Spine Extension Flowchart',
        tree: multiSegmentalExtOne,
      },
      {
        id: 'multi-ext-2',
        title: 'Lower Body Extension Flowchart',
        tree: multiSegmentalExtTwo,
      },
       {
        id: 'multi-ext-3',
        title: 'Upper Body Extension Flowchart',
        tree: multiSegmentalExtThree,
      },
    ],
  },
   {
    id: 'multi-seg-rot',
    title: 'MULTI_SEGMENTAL ROTATION BREAKOUTS',
    subtopics: [
      {
        id: 'multi-rot-1',
        title: 'Limited Multi-Segmental Rotation',
        tree: multiSegmentalRotOne,
      },
      {
        id: 'multi-rot-2',
        title: 'Hip Rotation Flowchart (Part 1)',
        tree: multiSegmentalRotTwo,
      },
       {
        id: 'multi-rot-3',
        title: 'Hip Rotation Flowchart (Part 2)',
        tree: multiSegmentalRotThree,
      },
       {
        id: 'multi-rot-4',
        title: 'Tibial Rotation Flowchart',
        tree: multiSegmentalRotFour,
      },
      
    ],
  },
    {
    id: 'single-leg-stance',
    title: 'SINGLE LEG STANCE BREAKOUTS',
    subtopics: [
      {
        id: 'sng-leg-1',
        title: 'Vestibular & Core',
        tree: singleLegStanceOne,
      },
       {
        id: 'sng-leg-2',
        title: 'Ankle',
        tree: singleLegStanceTwo,
      },
    ],
  },
   {
    id: 'over-head',
    title: 'OVER DEEP SQUATTING PATTERN BREAKOUTS',
    subtopics: [
      {
        id: 'over-head-1',
        title: 'Limited Overhead Deep Squat',
        tree: overHeadOne,
      },
    ],
  },
];

export default topics;
