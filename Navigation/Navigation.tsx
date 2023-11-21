import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* Screen */
import Home from '../Screen/Home';
import GlobalList from '../Screen/GlobalList';




export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
                <BottomTabNavigator.Screen name="Home" component={Home}
                                        options={{
                                            title: 'Home',
                                        }}/>
                <BottomTabNavigator.Screen name="GlobalList" component={GlobalList}
                                        options={{
                                            title: 'Liste Global',
                                        }}/>
        </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}