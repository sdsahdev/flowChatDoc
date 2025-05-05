import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import MainTopicList from '../screens/MainTopicList';
import SubtopicList from '../screens/SubtopicList';
import {Subtopic, DecisionTree} from '../types/types';
import DecisionTreeScreen from '../screens/DecisionScreen';

export type RootStackParamList = {
  MainTopicList: undefined;
  SubtopicList: {subtopics: Subtopic[]};
  DecisionTreeScreen: {tree: DecisionTree};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="MainTopicList">
      <Stack.Screen
        name="MainTopicList"
        component={MainTopicList}
        options={{title: 'Topics'}}
      />
      <Stack.Screen
        name="SubtopicList"
        component={SubtopicList}
        options={{title: 'Subtopics'}}
      />
      <Stack.Screen
        name="DecisionTreeScreen"
        component={DecisionTreeScreen}
        options={{title: 'Decision Flow'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
