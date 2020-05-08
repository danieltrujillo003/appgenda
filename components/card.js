import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Alert } from 'react-native';

function deleteAlert(navigation, name, id) {
  Alert.alert(
    'Delete Appointment',
    `Are you sure you want to delete the appointment with ${name}?`,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      {
        text: "YES",
        onPress: async () => {
          try {
            await fetch(`http://localhost/appgenda-api-slim/api/appointment/delete/${id}`, { method: 'DELETE' })
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

function CardComponent({ navigation, appointment }) {
  const { date, description, name, time, id, _id } = appointment
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{date} at {time}</Text>
      <Text>Name: {name}</Text>
      <Text>Description: {description}</Text>
      <View style={styles.buttons}>
        <TouchableHighlight onPress={() => navigation.navigate('Details', { appointment })}>
          <Text style={styles.button}>VIEW MORE</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Edit', { appointment, id: _id || id })}>
          <Text style={styles.button}>EDIT</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => deleteAlert(navigation, name, id)}>
          <Text style={styles.button}>DELETE</Text>
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
  },
  button: {
    backgroundColor: 'teal',
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  }
});

export default CardComponent;