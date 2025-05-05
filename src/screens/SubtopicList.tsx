import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {Subtopic} from '../types/types';
import {RootStackParamList} from '../navigation/AppNavigator';

type RouteProps = RouteProp<RootStackParamList, 'SubtopicList'>;

const SubtopicList = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProps>();
  const {subtopics} = route.params;

  return (
    <View style={{flex: 1, padding: 16}}>
      <FlatList
        data={subtopics}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DecisionTreeScreen', {tree: item.tree}),
                console.log(item);
            }}
            style={{
              padding: 16,
              backgroundColor: '#ddd',
              marginVertical: 8,
              borderRadius: 8,
            }}>
            <Text style={{fontSize: 16}}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SubtopicList;
