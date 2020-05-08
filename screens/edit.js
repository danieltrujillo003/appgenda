import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Validator from '../components/validator'

function EditAppointments({ route, navigation }) {
    const { id, appointment } = route.params;
    const [date, setDate] = useState(appointment.date);
    const [time, setTime] = useState(appointment.time);
    const [description, setDescription] = useState(appointment.description);
    const [name, setName] = useState(appointment.name);
    const [lastname, setLastname] = useState(appointment.lastname);
    const [clientid, setClientid] = useState(appointment.clientid);
    const [birthdate, setBirthdate] = useState(appointment.birthdate);
    const [city, setCity] = useState(appointment.city);
    const [neighborhood, setNeighborhood] = useState(appointment.neighborhood);
    const [address, setAddress] = useState(appointment.address);
    const [phonenumber, setPhonenumber] = useState(appointment.phonenumber);

    const updateData = async () => {
        let response
        try {
            response = await fetch(`http://localhost:3000/appointment/${id}`, {
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
            <Text style={styles.title}>Personal data:</Text>
            <Validator type='temp' currentValue={date} handler={setDate}/>
            <Validator type='temp' currentValue={time} handler={setTime}/>
            <Validator type='temp' currentValue={description} handler={setDescription}/>

            <Text style={styles.title}>Client data:</Text>
            <Validator type='temp' currentValue={name} handler={setName}/>
            <Validator type='temp' currentValue={lastname} handler={setLastname}/>
            <Validator type='temp' currentValue={clientid} handler={setClientid}/>
            <Validator type='temp' currentValue={birthdate} handler={setBirthdate}/>
            <Validator type='temp' currentValue={city} handler={setCity}/>
            <Validator type='temp' currentValue={neighborhood} handler={setNeighborhood}/>
            <Validator type='temp' currentValue={address} handler={setAddress}/>
            <Validator type='temp' currentValue={phonenumber} handler={setPhonenumber}/>

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
        borderWidth: 2,
        marginBottom: 20
    },
    title: {
        fontSize: 32,
    },
});

export default EditAppointments;