import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import React from "react";
import { AppNavigator } from './Navigation/Navigation';

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
import { NavigationContainer } from '@react-navigation/native';


// export default function App() {
//   return (
//     // <Provider store={store}>
//       <SafeAreaProvider>
//         <Navigation/>
//         {/* <Home/> */}
//       </SafeAreaProvider>
//     // </Provider>
//   );
// }


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
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
