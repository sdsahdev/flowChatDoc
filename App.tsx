import React from 'react';
import {Provider} from 'react-redux';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './src/store/store';
import AppNavigator from './src/navigation/AppNavigator';
import {theme} from './src/theme/theme';

const App = () => {
  return (
    <Provider store={store}>
      {/* <SafeAreaProvider> */}

      <AppNavigator />
      {/* </SafeAreaProvider> */}
    </Provider>
  );
};

export default App;
