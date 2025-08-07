import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import MainTopicList from '../screens/MainTopicList';
import SubtopicList from '../screens/SubtopicList';
import {Subtopic, DecisionTree} from '../types/types';
import DecisionTreeScreen from '../screens/DecisionScreen';
import SplashScreen from '../screens/SplashScreen';
import DisclaimerScreen from '../screens/DisclaimerScreen';

// export type RootStackParamList = {
//   MainTopicList: undefined;
//   SubtopicList: {subtopics: Subtopic[]; mainTopicName: string};
//   DecisionTreeScreen: {tree: DecisionTree; subtopicName: string};
// };

export type RootStackParamList = {
  SplashScreen: undefined;
  DisclaimerScreen: undefined;
  MainTopicList: undefined;
  SubtopicList: {subtopics: Subtopic[]; mainTopicName: string};
  DecisionTreeScreen: {tree: DecisionTree; subtopicName: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DisclaimerScreen"
        // component={require('../screens/DisclaimerScreen').default}
        component={DisclaimerScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="MainTopicList"
        component={MainTopicList}
        //  options={{title: 'Movement Breakouts'}}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SubtopicList"
        component={SubtopicList}
        options={{headerShown: false}}
        // options={{title: 'Subtopics'}}
        // options={({route}) => ({
        //   title: route.params.mainTopicName,
        // })}
      />
      <Stack.Screen
        name="DecisionTreeScreen"
        component={DecisionTreeScreen}
        // options={{title: 'Decision Flow'}}
        // options={({route}) => ({
        //   title: route.params.subtopicName,
        // })}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
