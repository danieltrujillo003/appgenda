import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Validator from '../components/validator'

function CreateAppointments({ route, navigation }) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [clientid, setClientid] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [city, setCity] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [address, setAddress] = useState("");
    const [phonenumber, setPhonenumber] = useState("");

    const createData = async () => {
        let response
        try {
            response = await fetch(`http://localhost:3000/appointment/${id}`, {
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

export default CreateAppointments;