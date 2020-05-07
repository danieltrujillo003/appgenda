import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

function Validator(props){
  const { type } = props
  const [value, onChangeText] = useState('');

  useEffect(()=>{
        setIsRight(inputType[type].test);
    },[value]);

  const inputType = {
    date: {
      test: /^[a-zA-Z]{3,3}\s[0-2][0-9]\s202\d$/.test(value),
      message: "Please input date in format: jan 00 2000"
    },
    time: {
      test: /^[0,1]?[0-9]:[0-9]{2,2}\s?[aApP][mM]$/.test(value),
      message: "Please input time in format: 00:00am"
    },
    // description,
    // name,
    // lastName,
    // clientid,
    // birthdate,
    // city,
    // neighborhood,
    // address,
    // phonenumber
  }

  const [isRight, setIsRight] = useState(inputType[type].test);

  return (
    <>
    <TextInput
      style={[styles.container,isRight ? styles.rightInput : styles.wrongInput]}
      onChangeText={text => onChangeText(text)}
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
      borderColor:'green',
      '&:focus': {
        borderColor:'blue'
      }
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