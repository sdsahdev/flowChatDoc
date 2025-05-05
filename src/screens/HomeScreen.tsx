import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Pattern</Text>
      <Button
        title="Upper Extremity Pattern"
        onPress={() =>
          navigation.navigate('Decision', {topic: 'upperExt', nodeKey: 'start'})
        }
      />
      <View style={{height: 20}} />
      <Button
        title="Cervical Spine Pattern"
        onPress={() =>
          navigation.navigate('Decision', {
            topic: 'cervicalSpine',
            nodeKey: 'start',
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 24, marginBottom: 30},
});
