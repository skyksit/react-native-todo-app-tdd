import React from 'react';
import {Dimensions, StyleSheet, TextInput} from 'react-native';

const Input = ({value, onChangeText, onSubmitEditing}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="+ Add a task"
      maxLength={50}
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: Dimensions.get('window').width - 15,
    fontSize: 20,
    margin: 5,
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    alignItems: 'center',
  },
});

export default Input;
