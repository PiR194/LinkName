// Import des composants React et React Native nécessaires
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
//import { v4 as uuidv4 } from 'uuid'; //! ne marche pas avec react native
import uuid from 'react-native-uuid';



//? séparer les composants malgré le fait qu'ils soient très similaires pour plus de clarté ?
// Composant de formulaire générique
const AddForm = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = () => {
        // Valider l'entrée si nécessaire
        // Appeler la fonction onSubmit avec la valeur de l'entrée
        onSubmit(inputValue);
    };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Ajouter un élément</Text>
        <TextInput
            style={styles.input}
            placeholder="Entrez le nom ici"
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Ajouter</Text>
        </TouchableOpacity>
        </View>
    );
    };

    // Exemple de page de formulaire pour ajouter un tag
    export const AddTag = ({ navigation }) => {
        const handleAddTag = (tagName) => {
            // Ici, tu peux traiter la logique d'ajout du tag (ex. appel à l'API, mise à jour de l'état, etc.)
            console.log(`Tag ajouté : ${tagName}`);
            // Naviguer vers l'écran souhaité après l'ajout
            navigation.goBack();
        };

        return <AddForm onSubmit={handleAddTag} />;
    };





// Exemple de page de formulaire pour ajouter un élément
export const AddItem = ({ navigation, route }) => {
    const { setListInfo, listInfo } = route.params;

    console.log(`lst de base : ${listInfo}`);
    const handleAddItem = async (itemName : string) => {
        const newItem = { id: uuid.v4(), title: itemName };
        const updatedList = [...listInfo, newItem];
        console.log(`Élément ajouté : ${itemName}`);

        try {
            await AsyncStorage.setItem('HomeGetListInfo', JSON.stringify(updatedList));
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'élément', error);
        }

        setListInfo(updatedList); // on met à jour la liste principale
        console.log(`liste principale : ${listInfo}`);
        navigation.goBack();
    };

    return <AddForm onSubmit={handleAddItem} />;
};

// Styles pour les composants
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
