import React from 'react';
import {ScrollView, Text} from 'react-native';

const TaskList = ({data}) => {
  return (
    <ScrollView>
      {data.map(item => (
        <Text>{item.subject}</Text>
      ))}
    </ScrollView>
  );
};

export default TaskList;
