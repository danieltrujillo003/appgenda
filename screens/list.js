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
				style={styles.list}
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
		flexDirection: 'column',
		alignItems: 'center',
		padding: 20
	},
	createAppointmentButton: {
		backgroundColor: 'teal',
		paddingBottom: 10,
		paddingTop: 10,
		paddingLeft: 20,
		paddingRight: 20,
		borderRadius: 10,
		alignItems: 'center',
		width: 300,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
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
	list: {
		alignSelf: 'stretch'
	}
});

export default ListAppointments;