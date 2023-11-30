
import React, { useState, useEffect}  from 'react';
import {  StyleSheet, Text, View, FlatList, TouchableNativeFeedback, TouchableHighlight, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Mylist = [
    {
        id: '1',
        title: 'First Item',
    },
    {
        id: '2',
        title: 'Second Item',
    },
    {
        id: '3',
        title: 'Third Item',
    },
];

type ItemProps = {title: string};


//! extraire dans un composant indépendant.
const Item = ({title}: ItemProps) => (
    <View style={styles.container}>
        <Text style={styles.textInput}>{title}</Text>
    </View>
);

//@ts-ignore
export default function GlobalList({navigation, route}){
    
    

    //@ts-ignore
    //var nList = useSelector(state => state.appReducer.cards);

    //* Search : 
    const [searchValue, setSearchValue] = useState('');



    //*Storage
    const [list, setList] = useState([]);
    const listTest = route.params.listInfo || []; //todo delete



    useEffect(() => {
        // Maj de la liste lorsque la page GlobalList est montée
        const fetchList = async () => {
            try {
                // Récupérer la liste depuis AsyncStorage
                const storedList = await AsyncStorage.getItem('GlobalListGetList');
                if (storedList) {
                    setList(JSON.parse(storedList));
                }
            } catch (error) {
                console.error('Erreur lors de la récupération de la liste', error);
            }
        };

        fetchList();
    }, []);
    

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.textInput}
                value={searchValue}
                onChangeText={text => setSearchValue(text)}
                placeholder="Rechercher une carte..."
            />

            <FlatList
                    data={listTest}
                    renderItem={({item}) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />

            <Button title="Retour à l'accueil" onPress={() => navigation.goBack()} />
        </View>
    );
}


const styles = StyleSheet.create({
    imageItem:{
        zIndex : 0
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        
    },
    textInput: {
        padding: 15,
        margin: 5,
        width:200,
        backgroundColor: '#ffffff',
        borderRadius : 15,
        shadowColor: 'grey',
        textAlign:'center'
    },
});
