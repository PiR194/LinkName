import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import { MainTheme } from '../Style/Themes';
import DisplayListInfo from '../Components/DisplayListInfo';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { AddItem, AddTag } from './AddItem';


export default function Home({ navigation }) {

    const [listInfo, setListInfo] = useState([]);

    useEffect(() => {

        // Récupérer les informations de la liste depuis AsyncStorage
        const fetchListInfo = async () => {
            try {
                const storedListInfo = await AsyncStorage.getItem('HomeGetListInfo');
                if (storedListInfo) {
                    setListInfo(JSON.parse(storedListInfo));
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des informations de la liste', error);
            }
        };
    
        fetchListInfo();
        }, []);
    
    // Calculer le nombre total d'éléments dans toutes les listes
    const getTotalItemCount = () => {
        //lists.reduce((total, list) => total + list.itemCount, 0);
        return listInfo.length;
    };

      // Naviguer vers la page GlobalList
    const navigateToGlobalList = async () => {
        
        //! item stubbé pour tester
        const dummyItem = { id: 'dummyId', title: 'Dummy Item' };
        const updatedList = [...listInfo, dummyItem]; // +=

        try {
            await AsyncStorage.setItem('HomeGetListInfo', JSON.stringify(updatedList));
            setListInfo(updatedList);
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'item dummy', error);
        }

        navigation.navigate('GlobalList', { listInfo: updatedList });
    };

    return (
        <View style={styles.container}>
            <View style={styles.centered}>
                <Text style={styles.title}>LinkName</Text>
                <Text style={styles.txt}>Votre gestionnaire de listes de pseudos</Text>
            </View>
            {/* <View style={styles.listContainer}>
                {lists.map((list, index) => (
                    <View key={index} style={styles.listItem}>
                        <Text>{list.name}</Text>
                        <Text>{list.itemCount} éléments</Text>
                    </View>
                ))}
            </View> */}
            <View style={styles.listContainer}>
                {/* <DisplayListInfo txt="Liste Total : 5 éléments "/> */}
                <DisplayListInfo txt={`Liste Total : ${getTotalItemCount()} éléments`} />

                <DisplayListInfo txt="Nombre de tag : 8 éléments "/>
                <DisplayListInfo txt="Nombre de favoris : 2 éléments "/>
            </View>
            <View style={styles.footer}>
                <TouchableNativeFeedback onPress={navigateToGlobalList}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Voir la liste globale ({getTotalItemCount()} éléments)</Text>
                    </View>
                </TouchableNativeFeedback>


                <View style={styles.addView}>
                    <TouchableNativeFeedback onPress={() => navigation.navigate('AddTag')}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}> Add Tag </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => navigation.navigate('AddItem')}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}> Add Item </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MainTheme.colors.background,
        alignItems: 'center',
    },
    centered: {
        alignItems: 'center',
    },
    title: {
        fontSize: 56,
        fontWeight: 'bold',
        marginTop: 20,
        color: MainTheme.colors.tertiary
    },
    txt: {
        fontSize: 20,
        marginBottom: 20,
    },
    listContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    listItem: {
        alignItems: 'center',
    },
    footer: {
        alignItems: 'center',
    },
    addView: {
        display:'flex',
        justifyContent:'space-evenly',
        flexDirection:'row',
        marginTop:15,
        gap:50
    },

    //* Boutons
    button: {
        backgroundColor: '#F5F5F5',
        borderWidth: 2,
        borderRadius: 15,
        borderColor: MainTheme.colors.primary,
        padding: 20,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
