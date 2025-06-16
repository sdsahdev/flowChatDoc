// import React, { useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Video from 'react-native-video';

// const SplashScreen = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigation.replace('MainTopicList');
//     }, 10000); // Adjust if video is shorter/longer
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <View style={styles.container}>
//   <Video
//   source={require('../assets/videos/splashScreenV.mp4')}
//   style={styles.video}
//   resizeMode="cover"
//   poster={require('../assets/image/splash_poster.jpg')} // Add this
//   posterResizeMode="cover"
//   muted
//   paused={false}
//   repeat={false}
//   onEnd={() => navigation.replace('MainTopicList')}
// />


//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff', // or your theme background
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   video: {
//     width: 300, // adjust as needed
//     height: 300,
//     borderRadius: 16, // optional for a rounded look
//   },
// });

// export default SplashScreen;


import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [videoStarted, setVideoStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('MainTopicList');
    }, 10000); // Match this with your video duration
    return () => clearTimeout(timer);
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
  style={[styles.video, { opacity: videoStarted ? 1 : 0 }]}
  // resizeMode="cover"
  muted
  paused={false}
  repeat={false}
  onLoadStart={() => setVideoStarted(false)}
  onReadyForDisplay={() => setVideoStarted(true)}
  onEnd={() => navigation.replace('MainTopicList')}
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
    backgroundColor:'#ffff'
  },
});

export default SplashScreen;
