import React from 'react';
import {Dimensions, StyleSheet, TextInput} from 'react-native';

const TaskInput = () => {
  return <TextInput style={styles.taskInput} placeholder="+ Add a Task" />;
};

const styles = StyleSheet.create({
  taskInput: {
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

export default TaskInput;
