import React from 'react';
import {ScrollView} from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({data}) => {
  return (
    <ScrollView>
      {data.map(item => (
        <TaskItem key={item.id} data={item} />
      ))}
    </ScrollView>
  );
};

export default TaskList;
