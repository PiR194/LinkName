import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* Screen */
import Home from '../Screen/Home';
import GlobalList from '../Screen/GlobalList';
import { AddItem, AddTag } from '../Screen/AddItem';
import StackNavigator from './StackNavigator';
import { createStackNavigator } from '@react-navigation/stack';




// export default function Navigation() {
//     const BottomTabNavigator = createBottomTabNavigator();
//     return (
//         <NavigationContainer>
//             <BottomTabNavigator.Navigator initialRouteName="Home">
//                 <BottomTabNavigator.Screen name="Home" component={StackNavigator}
//                                         options={{
//                                             title: 'Home',
//                                         }}/>
//                 <BottomTabNavigator.Screen name="GlobalList" component={GlobalList}
//                                         options={{
//                                             title: 'Liste Global',
//                                         }}/>
//                 <BottomTabNavigator.Screen name="AddItem" component={AddItem}
//                                         options={{
//                                             title: 'Add Item',
//                                         }}/>
//                 <BottomTabNavigator.Screen name="AddTag" component={AddTag}
//                                         options={{
//                                             title: 'Add Tag',
//                                         }}/>
//         </BottomTabNavigator.Navigator>
//         </NavigationContainer>
//     )
// }

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Stack.Screen name="GlobalList" component={GlobalList} options={{ title: 'Liste Global' }} />
    <Stack.Screen name="AddTag" component={AddTag} options={{ title: 'Add Tag' }} />
    <Stack.Screen name="AddItem" component={AddItem} options={{ title: 'Add Item' }} />
  </Stack.Navigator>
);

export const AppNavigator = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen name="Home" component={HomeStack} options={{ title: 'Home' }} />
    <Tab.Screen name="GlobalList" component={GlobalList} options={{ title: 'Liste Global' }} />
    <Tab.Screen name="AddItem" component={AddItem} options={{ title: 'Add Item' }} />
    <Tab.Screen name="AddTag" component={AddTag} options={{ title: 'Add Tag' }} />
  </Tab.Navigator>
);
