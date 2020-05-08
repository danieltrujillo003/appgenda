import React, {useEffect, useState, Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { TouchableHighlight,  FlatList} from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';

function EditAppointments({ navigation }) {
    const isFocused = useIsFocused();
    const [appointments, setAppointments, value, onChangeText] = useState([]);
    /* Data for the flatlist */
    const fetchAppointments = async () =>{
        let response = await fetch('http://localhost/appgenda-api-slim/api/appointments');
        let jsonResponse = await response.json();
        setAppointments(jsonResponse);
    }
    useEffect(()=>{
        fetchAppointments();
    },[isFocused]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Datos personales:</Text>
            <TextInput style={styles.input} value= {""} onChangeText={text=> onChangeText(text)}/> 
            <TextInput style={styles.input} value= {""} onChangeText={text => onChangeText(text)}/>
            <TextInput style={styles.input} value= {""} onChangeText={text => onChangeText(text)}/>
            
            <Text style={styles.title}>Datos del cliente:</Text>
            <TextInput style={styles.input} value= {""} onChangeText={text=> onChangeText(text)}/> 
            <TextInput style={styles.input} value= {""} onChangeText={text => onChangeText(text)}/>
            <TextInput style={styles.input} value= {""} onChangeText={text => onChangeText(text)}/>
            <TextInput style={styles.input} value= {""} onChangeText={text=> onChangeText(text)}/> 
            <TextInput style={styles.input} value= {""} onChangeText={text => onChangeText(text)}/>
            <TextInput style={styles.input} value= {""} onChangeText={text => onChangeText(text)}/>
            <TextInput style={styles.input} value= {""} onChangeText={text=> onChangeText(text)}/> 
            <TextInput style={styles.input} value= {""} onChangeText={text => onChangeText(text)}/>
            
            <View style={styles.buttons}>
                <Button title='Save' />
                <Button title='Cancel' />
            </View>

            <FlatList
                data={appointments}
                renderItem={({ item }) => <CardComponent appointment={item}/>}
                keyExtractor={item => item.id}>
            </FlatList>   

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 30
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    buttons: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
    input: {
        height: 40,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        marginBottom: 20
    },
    title: {
        fontSize: 32,
    },
});

export default EditAppointments;