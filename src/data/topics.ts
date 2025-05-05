import {MainTopic} from '../types/types';
import cervicalTreeA from './trees/cervicalTreeA';
import cervicalTreeB from './trees/cervicalTreeB';
import upperExtTreeOne from './trees/upperExtTreeOne';
import upperExtTreeTwo from './trees/upperExtTreeTwo';

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
    id: 'upper-ext-1',
    title: 'UPPER EXTREMITY PATTERN BREAKOUTS',
    subtopics: [
      {
        id: 'upper-a',
        title: 'Limited Upper Extremity Pattern One',
        tree: upperExtTreeOne,
      },
    ],
  },
  {
    id: 'upper-ext-2',
    title: 'UPPER EXTREMITY PATTERN BREAKOUTS',
    subtopics: [
      {
        id: 'upper-b',
        title: 'Limited Upper Extremity Pattern Two',
        tree: upperExtTreeTwo,
      },
    ],
  },
];

export default topics;
