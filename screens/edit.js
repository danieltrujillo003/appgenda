import React, {useEffect, useState, Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

function EditAppointments({ route, navigation }) {
    const isFocused = useIsFocused();
    const { id } = route.params;
    const [appointment, setAppointment] = useState([]);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [description, setDescription] = useState(null);
    const [name, setName] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [clientid, setClientId] = useState(null);
    const [birthdate, setBirthdate] = useState(null);
    const [city, setCity] = useState(null);
    const [neighborhood, setNeighborhood] = useState(null);
    const [address, setAddress] = useState(null);
    const [phonenumber, setPhonenumber] = useState(null);

    const fetchAppointment = async () => {
        let response = await fetch(`http://localhost/appgenda-api-slim/api/appointment/${id}`);
        let jsonResponse = await response.json();
        setAppointment(jsonResponse);
    }

    useEffect(()=>{
        fetchAppointment();
    },[isFocused]);

    useEffect(()=>{
        setDate(appointment.date);
        setTime(appointment.time);
        setDescription(appointment.description);
        setName(appointment.name);
        setLastname(appointment.lastname);
        setClientId(appointment.clientid);
        setBirthdate(appointment.birthdate);
        setCity(appointment.city);
        setNeighborhood(appointment.neighborhood);
        setAddress(appointment.address);
        setPhonenumber(appointment.phonenumber);
    },[appointment]);

    const updateData = async () => {
        let response
        try {
            response = await fetch(`http://localhost/appgenda-api-slim/api/appointment/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({date,time,description,name,lastname,clientid,birthdate,city,neighborhood,address,phonenumber}),
            })
        } catch (error) {
            console.error('Error:', error)
        }
        navigation.navigate('List')

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Prsonal data:</Text>
            <TextInput style={styles.input} value= {date} onChangeText={text=> setDate(text)}/>
            <TextInput style={styles.input} value= {time} onChangeText={text => setTime(text)}/>
            <TextInput style={styles.input} value= {description} onChangeText={text => setDescription(text)}/>

            <Text style={styles.title}>Client data:</Text>
            <TextInput style={styles.input} value= {name} onChangeText={text=> setName(text)}/>
            <TextInput style={styles.input} value= {lastname} onChangeText={text => setLastname(text)}/>
            <TextInput style={styles.input} value= {clientid} onChangeText={text => setClientid(text)}/>
            <TextInput style={styles.input} value= {birthdate} onChangeText={text=> setBirthdate(text)}/>
            <TextInput style={styles.input} value= {city} onChangeText={text => setCity(text)}/>
            <TextInput style={styles.input} value= {neighborhood} onChangeText={text => setNeighborhood(text)}/>
            <TextInput style={styles.input} value= {address} onChangeText={text=> setAddress(text)}/>
            <TextInput style={styles.input} value= {phonenumber} onChangeText={text => setPhonenumber(text)}/>

            <View style={styles.buttons}>
                <TouchableHighlight style={''} onPress={updateData}>
                    <Text>SAVE</Text>
                </TouchableHighlight>
                <TouchableHighlight style={''} onPress={() => navigation.navigate('List')}>
                    <Text>CANCEL</Text>
                </TouchableHighlight>
            </View>
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
        berderWidth: 2,
        marginBottom: 20
    },
    title: {
        fontSize: 32,
    },
});

export default EditAppointments;