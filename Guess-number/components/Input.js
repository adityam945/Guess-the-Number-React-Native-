import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Input = props => {
    return(
        <TextInput {...props} style={{...styles.textInputStyle, ...props.style}} />
    );
};

const styles = StyleSheet.create({
  textInputStyle:{
      height: 30,
      borderBottomColor: 'grey',
      borderBottomWidth: 2,
      marginVertical: 10,
  }
});

export default Input;