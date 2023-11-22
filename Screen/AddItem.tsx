// Import des composants React et React Native nécessaires
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

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
export const AddItem = ({ navigation }) => {
    const handleAddItem = (itemName) => {
    // Ici, tu peux traiter la logique d'ajout de l'élément
    console.log(`Élément ajouté : ${itemName}`);
    // Naviguer vers l'écran souhaité après l'ajout
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

