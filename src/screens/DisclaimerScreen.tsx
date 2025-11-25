// screens/DisclaimerScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import Colors from '../theme/color';
import {Fonts} from '../theme/fonts';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MainTopicList'
>;

const DisclaimerScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleOk = () => {
    navigation.replace('MainTopicList'); // prevents going back to disclaimer
  };

  return (
    <View style={styles.overlay}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {}}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <ScrollView
              contentContainerStyle={styles.content}
              showsVerticalScrollIndicator={false}>
              <Text style={styles.heading}>Disclaimer & Disclosure</Text>
              <Text style={styles.text}>
                This app incorporates concepts based on the Selective Functional
                Movement Assessment (SFMA), a system developed by Functional
                Movement Systems (FMS). All rights to the SFMA methodology,
                charts, flowcharts, and terminology are owned by Functional
                Movement Systems, Inc.
                {'\n\n'}
                This application is intended solely for educational and clinical
                support purposes and is not affiliated with or endorsed by
                Functional Movement Systems.
                {'\n\n'}
                Use of this app does not substitute for formal SFMA training or
                certification, and users are advised to seek appropriate
                professional education through www.functionalmovement.com.
                {'\n\n'}
                If you are a patient, always consult your licensed healthcare
                provider before relying on any information in this app.
                {'\n\n'}
                SFMA(TM) is a trademark of Functional Movement Systems, Inc. All
                rights reserved. This app is an independent educational tool and
                not an official SFMA product.
              </Text>
            </ScrollView>

            <TouchableOpacity style={styles.button} onPress={handleOk}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DisclaimerScreen;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
  modalBackground: {
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: '#FFFF',
    borderRadius: 12,
    padding: 20,
    maxHeight: '90%',
  },
  content: {
    paddingBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Fonts.fontAExtraBold,
    marginBottom: 16,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    color: 'black',
    fontFamily: Fonts.fontA,
  },
  button: {
    marginTop: 24,
    backgroundColor: '#32bb21',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
