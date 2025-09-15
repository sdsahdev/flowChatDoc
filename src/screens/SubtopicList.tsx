import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Subtopic} from '../types/types';
import {RootStackParamList} from '../navigation/AppNavigator';
import Colors from '../theme/color';
import {Fonts} from '../theme/fonts';
import {SafeAreaView} from 'react-native-safe-area-context';

type RouteProps = RouteProp<RootStackParamList, 'SubtopicList'>;

const SubtopicList = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProps>();
  const {subtopics, nestedTopics, mainTopicName, subtopicName} = route.params;

  const data = nestedTopics || subtopics;
  const headerTitle = subtopicName || mainTopicName || 'Topics';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            if (!nestedTopics) {
              navigation.goBack();
            } else {
              navigation.replace('SubtopicList', {
                subtopics: subtopics,
                mainTopicName: mainTopicName,
                nestedTopics: '',
                subtopicName: '',
              });
            }
          }}
          style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {headerTitle}
        </Text>
      </View>

      <FlatList
        contentContainerStyle={styles.listContainer}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              if (item.nestedTopics?.length) {
                navigation.navigate('SubtopicList', {
                  nestedTopics: item.nestedTopics,
                  subtopicName: item.title,
                  subtopics: subtopics,
                  mainTopicName: mainTopicName,
                });
              } else if (item.tree) {
                navigation.navigate('DecisionTreeScreen', {
                  tree: item.tree,
                  subtopicName: item.title,
                });
              } else {
                Alert.alert('Error', 'No data available for this topic');
              }
            }}
            style={styles.topicItem}>
            <Text style={styles.topicTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default SubtopicList;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    zIndex: 10,
  },
  backButton: {
    padding: 8,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    fontFamily: Fonts.fontAMedium,
    width: '80%',
  },
  listContainer: {
    padding: 16,
  },
  topicItem: {
    padding: 16,
    backgroundColor: Colors.bgColor,
    marginBottom: 12,
    borderRadius: 8,
  },
  topicTitle: {
    fontSize: 16,
    fontFamily: Fonts.fontAMedium,
    color: '#000',
  },
});
