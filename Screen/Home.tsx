import { StyleSheet, Text, View, TouchableNativeFeedback, Image } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { getAllCards } from "../redux/actions/actionSelection"
// import StorageHeart from '../service/AsyncStorage';
// import { setList } from '../redux/actions/action_setFavs';
// import Navigation from '../navigation/Navigation';
// @ts-ignore //
export default function Home() {
    
    return (
        <View>
            <View style={styles.centered}>
                <Text style={styles.title}>LinkName</Text>
                <Text style={styles.txt}>Votre gestionnaire de list de pseudo </Text>
            </View>
        </View>
    )
};

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ac9585",
        alignItems: "center"
    },
    centered: {
        alignItems: "center"
    },
    title: {
        fontSize: 56,
        fontWeight: 'bold',
        
    },
    MidArea: {
        justifyContent: "center", 
        
    },
    txt: {
        fontSize: 20,
    },
    butContain: {
        flexDirection: 'row'

    },
    ige:{
        maxWidth: "110%",
        maxHeight: 400,
    },

    ButtonStyle :{
        backgroundColor: "#F5F5F5",
        borderRadius: 15,
        padding: 20,
        color: "black",
        fontSize : 36,
        width: "45%",
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    },

});