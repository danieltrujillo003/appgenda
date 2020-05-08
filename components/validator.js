import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

function Validator(props){
  const { type, currentValue, handler } = props
  const [value, onChangeText] = useState(currentValue);

  useEffect(()=>{
        setIsRight(inputType[type].test);
    },[value]);

  const inputType = {
    date: {
      test: /^[a-zA-Z]{3,3}\s[0-2][0-9]\s202\d$/.test(value),
      message: 'Please input date in format: jan 00 2000'
    },
    time: {
      test: /^[0,1]?[0-9]:[0-9]{2,2}\s?[aApP][mM]$/.test(value),
      message: 'Please input time in format: 00:00am'
    },
    description: {
      test: /^.{10,60}$/.test(value),
      message: 'Please input description between 10 and 60 characters'
    },
    name: {
      test: /^[A-Z]?[a-z]{3,15}$/.test(value),
      message: 'Please input your name lowercase without numbers, symbols or spaces'
    },
    lastname: {
      test: /^[A-Z]?[a-z]{3,15}$/.test(value),
      message: 'Please input your last name lowercase without numbers, symbols or spaces'
    },
    clientid: {
      test: /^\d{5,}$/.test(value),
      message: 'Please input your document ID'
    },
    birthdate: {
      test: /^[a-zA-Z]{3,3}\s[0-2][0-9]\s[1,2]\d{3,3}$/.test(value),
      message: 'Please input your birthdate in format: jan 00 2000'
    },
    city: {
      test: /^.{3,30}$/.test(value),
      message: 'Please input your city (max 30 characters)'
    },
    neighborhood: {
      test: /^.{3,30}$/.test(value),
      message: 'Please input your neighborhood (max 30 characters)'
    },
    address: {
      test: /^.{3,30}$/.test(value),
      message: 'Please input your address (max 30 characters)'
    },
    phonenumber: {
      test: /\d{10,10}$/.test(value),
      message: 'Please input your phone number'
    }
  }

  const [isRight, setIsRight] = useState(inputType[type].test);

  return (
    <>
      <TextInput
        style={[styles.container,isRight ? styles.rightInput : styles.wrongInput]}
        onChangeText={text => {handler(text),onChangeText(text)}}
        value={value}
      />
      {
        !isRight && <Text style={styles.wrongText}>{inputType[type].message}</Text>
      }
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      width:'80%',
      height: 40,
      borderWidth: 1
    },
    rightInput: {
      borderColor:'green'
    },
    wrongInput: {
      borderColor:'red'
    },
    wrongText: {
      color: 'red',
      fontSize: 10
    }
  });

export default Validator;