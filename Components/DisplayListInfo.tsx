
import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import { MainTheme } from '../Style/Themes';



export default function DisplayListInfo({ txt }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{txt}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        
        borderWidth: 2,
        // borderColor: 'lightgrey',
        borderColor: MainTheme.colors.secondary,
        borderRadius: 15,
        
        width: 100,
        height: 100,

        margin:5,
        padding:5,
    },
    text:{
        fontSize:15,
    }
});
