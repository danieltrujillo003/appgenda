import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Validator from '../components/validator'

function CreateAppointment({ route, navigation }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [clientid, setClientid] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [city, setCity] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [address, setAddress] = useState('');
    const [phonenumber, setPhonenumber] = useState('');

    const createData = async () => {
        let response
        try {
            response = await fetch(`http://localhost/appgenda-api-slim/api/appointment/add`, {
                method: 'POST',
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
            <Validator type='date' currentValue={date} handler={setDate}/>
            <Validator type='time' currentValue={time} handler={setTime}/>
            <Validator type='description' currentValue={description} handler={setDescription}/>

            <Text style={styles.title}>Client data:</Text>
            <Validator type='name' currentValue={name} handler={setName}/>
            <Validator type='lastname' currentValue={lastname} handler={setLastname}/>
            <Validator type='clientid' currentValue={clientid} handler={setClientid}/>
            <Validator type='birthdate' currentValue={birthdate} handler={setBirthdate}/>
            <Validator type='city' currentValue={city} handler={setCity}/>
            <Validator type='neighborhood' currentValue={neighborhood} handler={setNeighborhood}/>
            <Validator type='address' currentValue={address} handler={setAddress}/>
            <Validator type='phonenumber' currentValue={phonenumber} handler={setPhonenumber}/>

            <View style={styles.buttons}>
                <TouchableHighlight style={''} onPress={createData}>
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

export default CreateAppointment;