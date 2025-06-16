export interface DecisionTreeNode {
  question: string;
  alertType?: 'warning' |'danger'|'success';
  autoNext?: string,
  options: {label: string; next: string}[];
}

export interface DecisionTree {
  [key: string]: DecisionTreeNode;
}

export interface Subtopic {
  id: string;
  title: string;
  tree: DecisionTree;
}

export interface MainTopic {
  id: string;
  title: string;
  subtopics: Subtopic[];
}
