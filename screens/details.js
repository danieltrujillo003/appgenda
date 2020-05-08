import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function DetailstAppointments({ route }) {
  const {date, description, name, time, lastname, clientid, birthdate, city, neighborhood, address, phonenumber} = route.params.appointment;

	return (
    <View style={styles.container}>
      <Text style={styles.title}>Details</Text>
      <Text style={styles.subtitle}>appointment data</Text>
			<View style={styles.subContainer}>
				<Text>Date: {date}</Text>
				<Text>Time: {time}</Text>
				<Text>Name: {name}</Text>
				<Text>Description: {description}</Text>
			</View>

			<Text style={styles.subtitle}>Client data</Text>
			<View style={styles.subContainer}>
				<Text>Name: {name}</Text>
				<Text>Last name: {lastname}</Text>
				<Text>Document number: {clientid}</Text>
				<Text>birthday: {birthdate}</Text>
				<Text>city: {city}</Text>
				<Text>neighborhood: {neighborhood}</Text>
				<Text>Address: {address}</Text>
				<Text>Phone number: {phonenumber}</Text>
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
		margin: 30,
		justifyContent: 'center',
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
		marginBottom: 10
	},
	subtitle: {
		fontSize: 19,
		marginBottom: 10,
		marginTop: 10,
		fontWeight: 'bold',
		color: 'teal',
		textDecorationLine: 'underline'
	},
	buttons: {
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	subContainer: {
		borderColor: 'teal',
		borderWidth: 2,
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: 6,
		padding: 10
	}
});

export default DetailstAppointments