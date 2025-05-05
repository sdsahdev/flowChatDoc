import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/AppNavigator';
import {DecisionTree} from '../types/types';

type RouteProps = RouteProp<RootStackParamList, 'DecisionTreeScreen'>;

const DecisionTreeScreen = () => {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation();
  const tree: DecisionTree = route.params.tree;

  const [history, setHistory] = useState<string[]>(['start']);

  const currentKey = history[history.length - 1];
  const node = tree[currentKey];

  const handleOptionSelect = (nextKey: string) => {
    setHistory([...history, nextKey]);
  };

  const handleBack = () => {
    if (history.length > 1) {
      setHistory(history.slice(0, -1));
    } else {
      navigation.goBack(); // fallback
    }
  };

  const handleBackToSubtopics = () => {
    navigation.goBack();
  };

  if (!node) {
    return (
      <View style={{padding: 16}}>
        <Text>Invalid node</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{padding: 20}}>
      <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>
        {node.question}
      </Text>

      {node.options.length > 0 ? (
        node.options.map((option, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => handleOptionSelect(option.next)}
            style={{
              padding: 12,
              backgroundColor: '#ccc',
              marginVertical: 6,
              borderRadius: 6,
            }}>
            <Text>{option.label}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <>
          <Text style={{fontSize: 16, color: 'green', marginBottom: 16}}>
            End of flowchart.
          </Text>
          <TouchableOpacity
            onPress={handleBackToSubtopics}
            style={{backgroundColor: '#4CAF50', padding: 14, borderRadius: 8}}>
            <Text style={{color: '#fff', textAlign: 'center'}}>
              Back to Subtopics
            </Text>
          </TouchableOpacity>
        </>
      )}

      {history.length > 1 && (
        <TouchableOpacity
          onPress={handleBack}
          style={{
            marginTop: 20,
            backgroundColor: '#999',
            padding: 12,
            borderRadius: 6,
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>
            Back to Previous Question
          </Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default DecisionTreeScreen;
