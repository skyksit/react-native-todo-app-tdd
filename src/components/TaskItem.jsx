import React from 'react';
import FeatIcon from 'react-native-vector-icons/Feather';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

FeatIcon.loadFont();

const FeatherIcon = ({name, size, color, testId}) => {
  return (
    <FeatIcon
      name={name}
      size={IconSizes[size]}
      color={color}
      testID={testId}
    />
  );
};

const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
};

const TaskItem = ({item, onToggleCheckbox}) => {
  const {subject, done: isDone} = item;

  const handleToggleCheckbox = () => {
    onToggleCheckbox(item);
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
      <Text style={isDone ? styles.subject.checked : styles.subject.unchecked}>
        {subject}
      </Text>
      {!isDone && (
        <FeatherIcon name="edit-2" size="medium" color="blue" testId="edit" />
      )}
      <FeatherIcon name="delete" size="medium" color="red" testId="delete" />
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
});

export default TaskItem;
