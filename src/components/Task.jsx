import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dimensions} from 'react-native';
import TouchableButton from './TouchableButton';
import Input from './Input';
import {IconTypes} from '../utils/constants';

const Task = ({item, deleteTask, toggleTask, updateTask}) => {
  const [isEdting, setIsEdting] = useState(false);
  const [text, setText] = useState(item.text);

  const _handleUpdateButtonPress = () => {
    setIsEdting(true);
  };

  const _onSubmitEditing = () => {
    if (isEdting) {
      const editedTask = Object.assign({}, item, {text});
      setIsEdting(false);
      updateTask(editedTask);
    }
  };

  return isEdting ? (
    <Input
      value={text}
      onChangeText={changeText => setText(changeText)}
      onSubmitEditing={_onSubmitEditing}
    />
  ) : (
    <View style={styles.container}>
      <TouchableButton
        type={item.completed ? IconTypes.COMPLETED : IconTypes.UNCOMPLETED}
        id={item.id}
        onPressOut={toggleTask}
        isCompleted={item.completed}
        size="medium"
      />
      <Text style={item.completed ? styles.completed : styles.text}>
        {item.text}
      </Text>
      {item.completed || (
        <TouchableButton
          type={IconTypes.EDIT}
          onPressOut={_handleUpdateButtonPress}
        />
      )}
      <TouchableButton
        type={IconTypes.DELETE}
        id={item.id}
        onPressOut={deleteTask}
        isCompleted={item.completed}
        size="medium"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: 8,
    width: Dimensions.get('window').width - 15,
  },
  text: {
    fontSize: 20,
    flex: 1,
    color: 'black',
  },
  completed: {
    fontSize: 20,
    flex: 1,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
});

export default Task;
