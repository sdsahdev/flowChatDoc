import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  AppState,
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DecisionTree} from '../types/types';
import {Fonts} from '../theme/fonts';
import Colors from '../theme/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';

const STORAGE_KEY = 'decisionTreeSelections';

const DecisionTreeScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const {tree, subtopicName} = route.params;

  const [history, setHistory] = useState(['start']);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [previousSelections, setPreviousSelections] = useState<{
    [key: string]: {[key: string]: string};
  }>({});

  const currentKey = history[history.length - 1];
  const node = tree[currentKey];

  useEffect(() => {
    const loadSelections = async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) setPreviousSelections(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to load selections:', e);
      }
    };

    loadSelections();

    const subscription = AppState.addEventListener('change', state => {
      if (state === 'inactive' || state === 'background') {
        AsyncStorage.removeItem(STORAGE_KEY);
      }
    });

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    const selected = previousSelections[subtopicName]?.[currentKey] || null;
    setSelectedOption(selected);
  }, [currentKey, previousSelections, subtopicName]);

  const handleNextPress = async () => {
    if (!selectedOption) return;
    const chosen = node.options.find(opt => opt.label === selectedOption);
    if (!chosen || !tree[chosen.next]) {
      Alert.alert('Error', 'Next question not found.');
      return;
    }

    const updated = {
      ...previousSelections,
      [subtopicName]: {
        ...(previousSelections[subtopicName] || {}),
        [currentKey]: selectedOption,
      },
    };

    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save selections:', e);
    }

    setPreviousSelections(updated);
    setHistory(prev => [...prev, chosen.next]);
  };

  const handleBack = () => {
    if (history.length <= 1) {
      navigation.goBack();
      return;
    }

    let newHistory = [...history];
    newHistory.pop();

    while (newHistory.length > 0) {
      const lastKey = newHistory[newHistory.length - 1];
      const lastNode = tree[lastKey];
      if (
        lastNode?.alertType &&
        (!lastNode.options || lastNode.options.length === 0)
      ) {
        newHistory.pop();
      } else break;
    }

    setHistory(newHistory.length === 0 ? ['start'] : newHistory);
  };

  useEffect(() => {
    if (node?.alertType) {
      Alert.alert('', node.question, [
        {
          text: 'OK',
          onPress: () => {
            if (node.autoNext) {
              setHistory(prev => [...prev, node.autoNext]);
            }
          },
        },
      ]);
    }
  }, [node]);

  if (!node) {
    return (
      <View style={styles.container}>
        <Text>Invalid node</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {subtopicName}
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {!node.alertType && (
          <>
            <Text style={styles.questionText}>{node.question}</Text>

            {node.image && (
              <Image
                source={
                  typeof node.image === 'string'
                    ? {uri: node.image}
                    : node.image
                }
                style={styles.image}
                resizeMode="cover"
              />
            )}

            {node.options.length > 0 ? (
              <View>
                {node.options.map((option, idx) => {
                  const isSelected = selectedOption === option.label;
                  return (
                    <TouchableOpacity
                      key={idx}
                      onPress={() => setSelectedOption(option.label)}
                      style={[
                        styles.optionButton,
                        isSelected && styles.optionButtonSelected,
                      ]}>
                      <Text
                        style={[
                          styles.optionText,
                          isSelected && styles.optionTextSelected,
                        ]}>
                        {option.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.restartButton}>
                <Text style={styles.restartText}>Restart Test</Text>
              </TouchableOpacity>
            )}

            {node.options.length > 0 && (
              <View style={styles.navigationContainer}>
                {history.length > 1 && (
                  <TouchableOpacity
                    onPress={handleBack}
                    style={styles.backNavButton}>
                    <Text style={styles.backNavText}>Back</Text>
                  </TouchableOpacity>
                )}

                <TouchableOpacity
                  onPress={handleNextPress}
                  style={[
                    styles.nextNavButton,
                    !selectedOption && styles.disabledButton,
                  ]}
                  disabled={!selectedOption}>
                  <Text style={styles.nextNavText}>Next</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  safeArea: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollContainer: {
    padding: 24,
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.backgroundColor,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
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
    marginLeft: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    fontFamily: Fonts.fontAMedium,
    width: '80%',
  },
  questionText: {
    fontSize: 18,
    fontFamily: Fonts.fontABold,
    marginBottom: 24,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  optionButton: {
    padding: 14,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ccc',
  },
  optionButtonSelected: {
    backgroundColor: '#dcf7e3',
    borderColor: '#32bb21',
  },
  optionText: {
    color: '#333',
    fontWeight: '600',
    textAlign: 'center',
  },
  optionTextSelected: {
    color: '#32bb21',
  },
  restartButton: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
  },
  restartText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: Fonts.fontAMedium,
    fontSize: 20,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  backNavButton: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    borderColor: '#32bb21',
    borderWidth: 1,
  },
  backNavText: {
    color: '#32bb21',
    textAlign: 'center',
    fontFamily: Fonts.fontAExtraBold,
    fontSize: 15,
  },
  nextNavButton: {
    backgroundColor: '#32bb21',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginLeft: 8,
  },
  nextNavText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: Fonts.fontAExtraBold,
    fontSize: 15,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
});

export default DecisionTreeScreen;
