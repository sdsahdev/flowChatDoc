import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import topics from '../data/topics';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import Colors from '../theme/color';
import {Fonts} from '../theme/fonts';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MainTopicList'
>;

const MainTopicList = () => {
  const navigation = useNavigation<NavigationProp>();
  const headerTitle = 'Topics';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {' '}
          Movement Breakouts
        </Text>
      </View>

      <FlatList
        contentContainerStyle={styles.listContainer}
        data={topics}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SubtopicList', {
                subtopics: item.subtopics,
                mainTopicName: item.title,
                nestedTopics: '',
                subtopicName: '',
              })
            }
            style={styles.topicItem}>
            <Text style={styles.topicTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default MainTopicList;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    elevation: 4, // Android shadow
    shadowColor: '#000',
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
    textAlign: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    padding: 16,
  },
  topicItem: {
    padding: 16,
    backgroundColor: Colors.bgColor,
    marginBottom: 20,
    borderRadius: 8,
  },
  topicTitle: {
    fontSize: 18,
    fontFamily: Fonts.fontAMedium,
    textAlign: 'center',
    color: '#000',
  },
});
