import React from 'react';
import FeatIcon from 'react-native-vector-icons/Feather';
import {Dimensions, StyleSheet, View, Text} from 'react-native';

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

const TaskItem = props => {
  const {data} = props;
  return (
    <View style={styles.taskItem}>
      <FeatherIcon name="square" size="small" color="green" testId="checkbox" />
      <Text style={styles.subject}>{data.subject}</Text>
      <FeatherIcon name="edit-2" size="medium" color="blue" testId="edit" />
      <FeatherIcon name="delete" size="medium" color="red" testId="delete" />
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: 8,
    width: Dimensions.get('window').width - 15,
  },
  subject: {
    fontSize: 20,
    flex: 1,
    color: 'black',
  },
});

export default TaskItem;
