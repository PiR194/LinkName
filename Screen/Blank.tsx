import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Button } from 'react-native';
import { MainTheme } from '../Style/Themes';

export default function Blank() {
    const [cpt, setCpt] = useState(0);

    return (
        <View style={styles.blank}>
            <Button title={`Funny button : ${cpt}`} onPress={() => setCpt(cpt + 1)} />
        </View>
    );
}

const styles = StyleSheet.create({
    blank: {
        backgroundColor: MainTheme.colors.background,
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});