import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';

function CardComponent({ navigation, appointment }){
    const {date, description, name, time, id, _id} = appointment

    function deleteAlert () {
      Alert.alert(
        'Delete Appointment',
        `Are you sure you want to delete the appointment with ${name}?`,
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          {
            text: "YES",
            onPress: async () => {
              try {
                await fetch(`https://localhost/appgenda-api-slim/api/appointment/delete/${id}`, { method: 'DELETE' })
                navigation.navigate('Home')
              } catch (error) {
                console.error('Error:', error)
              }
            }
          }
        ],
        { cancelable: false }
      )
    }

    return(
        <View style={styles.container}>
          <Text style={styles.title}>{date} at {time}</Text>
          <Text>Name: {name}</Text>
          <Text>Description: {description}</Text>
          <View style={styles.buttons}>
            <TouchableHighlight style={''} onPress={() => navigation.navigate('Details', { appointment })}>
              <Text>VIEW MORE</Text>
            </TouchableHighlight>
            <TouchableHighlight style={''} onPress={() => navigation.navigate('Edit', { appointment, id: _id || id })}>
              <Text>EDIT</Text>
            </TouchableHighlight>
            <TouchableHighlight style={''} onPress={() => deleteAlert()}>
              <Text>DELETE</Text>
            </TouchableHighlight>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderColor: 'black',
      borderRadius: 10,
      borderWidth: 1,
      padding: 10,
      marginTop: 10
    },
    buttons: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5
    }
  });

export default CardComponent;