// Exemple de configuration de Stack Navigator dans App.js
import { createStackNavigator } from '@react-navigation/stack';
import { AddTag, AddItem } from '../Screen/AddItem';
import Home from '../Screen/Home';
import GlobalList from '../Screen/GlobalList';


export default function StackNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="GlobalList" component={GlobalList} />
            <Stack.Screen name="AddTag" component={AddTag} />
            <Stack.Screen name="AddItem" component={AddItem} />
        </Stack.Navigator>
    )
}
