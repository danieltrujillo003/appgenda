import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../assets/logo.png')}/>
        <Text style={styles.title}>Appointments</Text>
      </View>
      <View style={styles.main}>
        <TouchableHighlight style={''} onPress={() => navigation.navigate('List')}>
          <Text>List Appointments</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 60
  },
  logo: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 30,
    textTransform: "uppercase"
  },
  main: {}
});
