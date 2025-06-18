import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {DecisionTree} from '../types/types';
import {Fonts} from '../theme/fonts';

interface PreviousSelections {
  [key: string]: string;
}

const DecisionTreeScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const tree = route.params.tree;

  const [history, setHistory] = useState(['start']);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [previousSelections, setPreviousSelections] =
    useState<PreviousSelections>({});

  const currentKey = history[history.length - 1];
  const node = tree[currentKey];

  // Set the selected option when the current node changes
  useEffect(() => {
    setSelectedOption(previousSelections[currentKey] || null);
  }, [currentKey, previousSelections]);

  const handleNextPress = () => {
    if (selectedOption) {
      const chosen = node.options.find(opt => opt.label === selectedOption);

      if (chosen?.next && tree[chosen.next]) {
        // Save the current selection before moving to next question
        setPreviousSelections(prev => ({
          ...prev,
          [currentKey]: selectedOption,
        }));
        setHistory(prev => [...prev, chosen.next]);
      } else {
        Alert.alert('Error', 'Next question not found.');
        console.error('Invalid next node:', chosen?.next);
      }
    }
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
      } else {
        break;
      }
    }

    if (newHistory.length === 0) {
      navigation.goBack();
    } else {
      setHistory(newHistory);
    }
  };

  useEffect(() => {
    if (node?.alertType) {
      const title = node.alertType === 'warning' ? '🟡 Caution' : '🔴 Alert';
      const colorMessage =
        node.alertType === 'warning'
          ? 'This requires attention.'
          : 'This is an urgent issue.';

      Alert.alert('', `${node.question}`, [
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
      <View style={{padding: 16}}>
        <Text>Invalid node</Text>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 24,
        flexGrow: 1,
        justifyContent: 'space-between',
      }}>
      {!node.alertType && (
        <>
          <Text
            style={{
              fontSize: 18,
              fontFamily: Fonts.fontABold,
              marginBottom: 24,
            }}>
            {node.question}
          </Text>
          {node.image && (
            <Image
              source={
                typeof node.image === 'string' ? {uri: node.image} : node.image
              }
              style={{
                width: '100%',
                height: 200,
                resizeMode: 'contain',
                marginBottom: 16,
                borderRadius: 8,
              }}
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
                    style={{
                      padding: 14,
                      marginVertical: 8,
                      borderRadius: 8,
                      backgroundColor: isSelected ? '#d0bcff' : '#f0f0f0',
                      borderWidth: 2,
                      borderColor: isSelected ? '#7f3dff' : '#ccc',
                    }}>
                    <Text
                      style={{
                        color: isSelected ? '#7f3dff' : '#333',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {option.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : (
            <View>
              <Text style={{fontSize: 16, color: 'green', marginBottom: 20}}>
                End of flowchart.
              </Text>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  backgroundColor: '#4CAF50',
                  padding: 14,
                  borderRadius: 8,
                }}>
                <Text style={{color: '#fff', textAlign: 'center'}}>
                  Back to Subtopics
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Next Button */}
          {node.options.length > 0 && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 30,
              }}>
              {/* Back Button (left) */}
              {history.length > 1 ? (
                <TouchableOpacity
                  onPress={handleBack}
                  style={{
                    backgroundColor: '#999',
                    paddingVertical: 14,
                    paddingHorizontal: 20,
                    borderRadius: 8,
                    flex: 1,
                    marginRight: 8,
                  }}>
                  <Text style={{color: '#fff', textAlign: 'center'}}>Back</Text>
                </TouchableOpacity>
              ) : null}

              {/* Next Button (right) */}
              <TouchableOpacity
                onPress={handleNextPress}
                style={{
                  backgroundColor: selectedOption ? '#7f3dff' : '#ccc',
                  paddingVertical: 14,
                  paddingHorizontal: 20,
                  borderRadius: 8,
                  flex: 1,
                  marginLeft: history.length > 1 ? 8 : 0,
                }}
                disabled={!selectedOption}>
                <Text style={{color: '#fff', textAlign: 'center'}}>Next</Text>
              </TouchableOpacity>
            </View>
          )}
        </>
      )}
    </ScrollView>
  );
};

export default DecisionTreeScreen;

// import React, {useState,useEffect} from 'react';
// import {View, Text, TouchableOpacity, ScrollView,Alert} from 'react-native';
// import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
// import {RootStackParamList} from '../navigation/AppNavigator';
// import {DecisionTree} from '../types/types';
// import { Fonts } from '../theme/fonts';

// type RouteProps = RouteProp<RootStackParamList, 'DecisionTreeScreen'>;

// const DecisionTreeScreen = () => {
//   const route = useRoute<RouteProps>();
//   const navigation = useNavigation();
//   const tree: DecisionTree = route.params.tree;

//   const [history, setHistory] = useState<string[]>(['start']);

//   const currentKey = history[history.length - 1];
//   const node = tree[currentKey];

//   const handleOptionSelect = (nextKey: string) => {
//     setHistory([...history, nextKey]);
//   };

//   // const handleBack = () => {
//   //   if (history.length > 1) {
//   //     setHistory(history.slice(0, -1));
//   //   } else {
//   //     navigation.goBack(); // fallback
//   //   }
//   // };

//   const handleBack = () => {
//   if (history.length <= 1) {
//     navigation.goBack();
//     return;
//   }

//   let newHistory = [...history];
//   newHistory.pop(); // remove current node

//   // Keep popping if the previous node has an alertType and no options (meaning it's not a decision/question)
//   while (newHistory.length > 0) {
//     const lastKey = newHistory[newHistory.length - 1];
//     const lastNode = tree[lastKey];
//     if (lastNode?.alertType && (!lastNode.options || lastNode.options.length === 0)) {
//       newHistory.pop();
//     } else {
//       break;
//     }
//   }

//   if (newHistory.length === 0) {
//     navigation.goBack();
//   } else {
//     setHistory(newHistory);
//   }
// };

//   const handleBackToSubtopics = () => {
//     navigation.goBack();
//   };

//   if (!node) {
//     return (
//       <View style={{padding: 16}}>
//         <Text>Invalid node</Text>
//       </View>
//     );
//   }
// useEffect(() => {
//   if (node?.alertType) {
//     const title = node.alertType === 'warning' ? '🟡 Caution' : '🔴 Alert';
//     const colorMessage =
//       node.alertType === 'warning'
//         ? 'This requires attention.'
//         : 'This is an urgent issue.';

//     Alert.alert('', {node.question}, [
//       {
//         text: 'OK',
//         onPress: () => {
//           if (node.autoNext) {
//             setHistory(prev => [...prev, node.autoNext]);
//           }
//           console.log(node, "NODE.AUTONEXT")
//         },
//       },
//     ]);
//   }
// }, [node]);

//   return (
//     <ScrollView contentContainerStyle={{padding: 20}}>
//       {!node.alertType && <>
//       <Text style={{fontSize: 18, marginBottom: 20, fontFamily:Fonts.fontABold}}>
//         {node.question}
//       </Text>

//       {node.options.length > 0 ? (
//         node.options.map((option, idx) => (
//           <TouchableOpacity
//             key={idx}
//             onPress={() => handleOptionSelect(option.next)}
//             style={{
//               padding: 12,
//               backgroundColor: '#ccc',
//               marginVertical: 6,
//               borderRadius: 6,
//             }}>
//             <Text style={{ fontFamily:Fonts.fontAMedium}}>{option.label}</Text>
//           </TouchableOpacity>
//         ))
//       ) : (
//         <>

//           <Text style={{fontSize: 16, color: 'green', marginBottom: 16}}>
//             End of flowchart.
//           </Text>
//           <TouchableOpacity
//             onPress={handleBackToSubtopics}
//             style={{backgroundColor: '#4CAF50', padding: 14, borderRadius: 8}}>
//             <Text style={{color: '#fff', textAlign: 'center'}}>
//               Back to Subtopics
//             </Text>
//           </TouchableOpacity>

//         </>
//       )}

//       {history.length > 1 && (
//         <TouchableOpacity
//           onPress={handleBack}
//           style={{
//             marginTop: 20,
//             backgroundColor: '#999',
//             padding: 12,
//             borderRadius: 6,
//           }}>
//           <Text style={{color: 'white', textAlign: 'center'}}>
//             Back to Previous Question
//           </Text>
//         </TouchableOpacity>

//       )}

//       </>}
//     </ScrollView>
//   );
// };

// export default DecisionTreeScreen;
