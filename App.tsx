import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import React from "react";

// import Navigation from './navigation/Navigation';
// import StackNavigation from './navigation/StackNavigation';

// import { createStackNavigator } from '@react-navigation/stack';

// import { Provider } from 'react-redux';
// import store from './redux/store';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );é
// }

import {
  SafeAreaView,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Home from './Screen/Home';


export default function App() {
  return (
    // <Provider store={store}>
      <SafeAreaProvider>
        {/* <Navigation/> */}
        <Home/>
      </SafeAreaProvider>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
