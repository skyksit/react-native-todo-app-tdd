import React from 'react';
import FeatIcon from 'react-native-vector-icons/Feather';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

FeatIcon.loadFont();

const FeatherIcon = React.memo(({name, size, color, testId}) => {
  return (
    <FeatIcon
      name={name}
      size={IconSizes[size]}
      color={color}
      testID={testId}
    />
  );
});

const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
};

const TaskItem = ({item, onToggleCheckbox, onDeleteItem, onUpdateItem}) => {
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [newSubject, setNewSubject] = React.useState(item.subject);
  const {subject, done: isDone} = item;

  const handleToggleCheckbox = () => {
    onToggleCheckbox(item);
  };
  const handleDeleteItem = () => {
    onDeleteItem(item);
  };
  const handleEditItem = () => {
    setIsEditMode(true);
  };
  const handleFinishEdit = () => {
    setIsEditMode(false);
    onUpdateItem(item, newSubject);
  };

  return (
    <View style={styles.taskItemContainer}>
      <TouchableOpacity
        style={isDone ? styles.checkBox.checked : styles.checkBox.unchecked}
        activeOpacity={0.8}
        onPressOut={handleToggleCheckbox}
        testID="checkbox">
        <FeatherIcon
          name={isDone ? 'check-square' : 'square'}
          size="medium"
          color={isDone ? 'blue' : 'green'}
        />
      </TouchableOpacity>
      {isEditMode ? (
        <TextInput
          value={newSubject}
          onChangeText={text => setNewSubject(text)}
          onSubmitEditing={handleFinishEdit}
          style={styles.taskInput}
          placeholder="Edit a Task"
        />
      ) : (
        <Text
          style={isDone ? styles.subject.checked : styles.subject.unchecked}>
          {subject}
        </Text>
      )}

      {!isDone && (
        <TouchableOpacity
          style={styles.editButton}
          activeOpacity={0.8}
          onPress={handleEditItem}
          testID="edit">
          <FeatherIcon name="edit-2" size="medium" color="blue" />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.deleteButton}
        activeOpacity={0.8}
        onPress={handleDeleteItem}
        testID="delete">
        <FeatherIcon name="delete" size="medium" color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: 8,
    width: Dimensions.get('window').width - 15,
  },
  checkBox: {
    unchecked: {
      color: 'green',
      margin: 10,
    },
    checked: {
      color: 'blue',
      margin: 10,
    },
  },
  subject: {
    unchecked: {
      fontSize: 20,
      flex: 1,
      color: 'black',
    },
    checked: {
      fontSize: 20,
      flex: 1,
      color: 'gray',
      textDecorationLine: 'line-through',
    },
  },
  deleteButton: {
    margin: 10,
  },
  editButton: {
    margin: 10,
  },
  taskInput: {
    width: Dimensions.get('window').width - 140,
    fontSize: 20,
    margin: 5,
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    alignItems: 'center',
  },
});

export default React.memo(TaskItem);
