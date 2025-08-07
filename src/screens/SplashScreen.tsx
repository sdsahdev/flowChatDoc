
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Video from 'react-native-video';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [videoStarted, setVideoStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('DisclaimerScreen');
    }, 4000); // Match this with your video duration
    return () => clearTimeout(timer);
  }, []);


    useEffect(() => {
    const clearSelectionsAndNavigate = async () => {
      try {
        await AsyncStorage.removeItem('decisionTreeSelections');
        console.log('Selections cleared on cold start.');
      } catch (e) {
        console.log('Error clearing selections:', e);
      }

      setTimeout(() => {
        navigation.replace('DisclaimerScreen'); // Or your initial screen
      }, 3000);
    };

    clearSelectionsAndNavigate();
  }, []);

  return (
    <View style={styles.container}>
      {/* Poster until video is ready */}
      {!videoStarted && (
        <Image
          source={require('../assets/image/splash_poster.jpg')}
          style={styles.video}
          resizeMode="cover"
        />
      )}

      <Video
        source={require('../assets/videos/splashScreenV.mp4')}
        style={[styles.video, {opacity: videoStarted ? 1 : 0}]}
        // resizeMode="cover"
        muted
        paused={false}
        repeat={false}
        onLoadStart={() => setVideoStarted(false)}
        onReadyForDisplay={() => setVideoStarted(true)}
        onEnd={() => navigation.replace('DisclaimerScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff', // Prevent flicker
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    // backgroundColor: '#ffff',
  },
});

export default SplashScreen;
