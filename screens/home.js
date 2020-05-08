import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../assets/omg.png')}/>
        <Text style={styles.title}>Appgenda</Text>
      </View>
      <View style={styles.main}>
        <TouchableHighlight style={''} onPress={() => navigation.navigate('List')}>
          <Text style={styles.button}>List Appointments</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    alignItems: 'center',
    marginBottom: 60
  },
  logo: {
    width: 300,
    height: 300,
    borderColor: 'teal',
    borderWidth: 4,
    borderRadius: 5,
    marginBottom: 6
  },
  title: {
    fontSize: 40,
    textTransform: "uppercase",
    color: 'teal',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'teal',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    color: '#F5FCFF',
    textAlign: "center",
    fontWeight: 'bold',
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
    color: '#F5FCFF'
},
  main: {}
});
