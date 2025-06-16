import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import topics from '../data/topics';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MainTopicList'
>;

const MainTopicList = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{flex: 1, padding: 16}}>
      <FlatList
        data={topics}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SubtopicList', {
                subtopics: item.subtopics,
                mainTopicName: item.title,
              })
            }
            style={{
              padding: 16,
              backgroundColor: '#eee',
              marginVertical: 8,
              borderRadius: 8,
            }}>
            <Text style={{fontSize: 18}}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MainTopicList;
