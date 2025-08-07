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
import cervicalTreeC from './trees/cervivalTreeC';

const topics: MainTopic[] = [
  {
    id: 'cervical',
    title: 'CERVICAL SPINE PATTERN BREAKOUTS',
    subtopics: [
      {
        id: 'cerv-a',
        title: 'Limited Cervical Spine Patterns',
        nestedTopics: [
          {
            id: 'cerv-a-1',
            title: 'Active Supine Cervical Flexion Test (Chin to Chest)',
            tree: cervicalTreeA,
          },
          {
            id: 'cerv-a-2',
            title: 'Active Supine Cervical Rotation Test (80˚)',
            tree: cervicalTreeB,
          },
          {
            id: 'cerv-a-3',
            title: 'Supine Cervical Extension',
            tree: cervicalTreeC,
          },
        ],
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
    title: 'MULTI SEGMENTAL FLEXION BREAKOUTS',
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
    title: 'MULTI SEGMENTAL EXTENSION BREAKOUTS',
    subtopics: [
      {
        id: 'multi-ext-1',
        title: 'Spine Extension Flow',
        tree: multiSegmentalExtOne,
      },
      {
        id: 'multi-ext-2',
        title: 'Lower Body Extension Flow',
        tree: multiSegmentalExtTwo,
      },
       {
        id: 'multi-ext-3',
        title: 'Upper Body Extension Flow',
        tree: multiSegmentalExtThree,
      },
    ],
  },
   {
    id: 'multi-seg-rot',
    title: 'MULTI SEGMENTAL ROTATION BREAKOUTS',
    subtopics: [
      {
        id: 'multi-rot-1',
        title: 'Limited Multi-Segmental Rotation',
        tree: multiSegmentalRotOne,
      },
      {
        id: 'multi-rot-2',
        title: 'Hip Rotation Flow (Part 1)',
        tree: multiSegmentalRotTwo,
      },
       {
        id: 'multi-rot-3',
        title: 'Hip Rotation Flow (Part 2)',
        tree: multiSegmentalRotThree,
      },
       {
        id: 'multi-rot-4',
        title: 'Tibial Rotation Flow',
        tree: multiSegmentalRotFour,
      },
      
    ],
  },
    {
    id: 'single-leg-stance',
    title: 'SINGLE LEG STANCE BREAKOUTS FLOW',
    subtopics: [
      {
        id: 'sng-leg-1',
        title: 'Vestibular & Core Flow',
        tree: singleLegStanceOne,
      },
       {
        id: 'sng-leg-2',
        title: 'Ankle Flow',
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
