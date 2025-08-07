import {ImageSourcePropType} from 'react-native';

export interface DecisionTreeNode {
  question: string;
  alertType?: 'warning' | 'danger' | 'success';
  autoNext?: string;
  options: {label: string; next: string}[];
  image?: string | ImageSourcePropType;
  
}
export interface NestedTopic {
  id: string;
  title: string;
  tree: DecisionTree;
}
export interface DecisionTree {
  [key: string]: DecisionTreeNode;
}

export interface Subtopic {
  id: string;
  title: string;
  tree?: DecisionTree;
    nestedTopics?: NestedTopic[];

}

export interface MainTopic {
  id: string;
  title: string;
  subtopics: Subtopic[];
}
