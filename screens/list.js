import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import CardComponent from '../components/card';

function ListAppointments({ navigation }) {
  const isFocused = useIsFocused();
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () =>{
    let response = await fetch('https://localhost/appgenda-api-slim/api/appointments');
    let jsonResponse = await response.json();
    setAppointments(jsonResponse);
  }
  useEffect(()=>{
    fetchAppointments();
  },[isFocused]);

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.createAppointmentButton} onPress={() => navigation.navigate('Create')}>
        <Text style={styles.buttonTextStyle}>Create Appointment</Text>
      </TouchableHighlight>
      <FlatList
        data={appointments}
        renderItem={({ item }) => <CardComponent
          appointment={item}
          navigation={navigation}/>}
        keyExtractor={item => item.id}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  createAppointmentButton: {
    backgroundColor: 'purple',
    padding: 20,
    alignItems: 'center',
  },
  buttonTextStyle: {
    color: 'white'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ListAppointments;