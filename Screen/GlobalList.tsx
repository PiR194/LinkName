
import React, { useState}  from 'react';
import {  StyleSheet, Text, View, FlatList, TouchableNativeFeedback, TouchableHighlight, TextInput } from 'react-native';


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
export default function GlobalList({navigation}){
    
    

    //@ts-ignore
    //var nList = useSelector(state => state.appReducer.cards);

    //* Search : 
    const [searchValue, setSearchValue] = useState('');

    //@ts-ignore
    //const filteredList = nList.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));

    // const dispatch = useDispatch()
    // const HandleAddFav = (props : CardProps) => {
    //     dispatch(setFavList(props));
    // }

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.textInput}
                value={searchValue}
                onChangeText={text => setSearchValue(text)}
                placeholder="Rechercher une carte..."
            />


            <FlatList
                    data={Mylist}
                    renderItem={({item}) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />
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
