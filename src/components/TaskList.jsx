import React from 'react';
import {ScrollView} from 'react-native';
import TaskItem from './TaskItem';

const TaskList = props => {
  const {data, onToggleCheckbox, onDeleteItem} = props;
  return (
    <ScrollView>
      {data.map(item => (
        <TaskItem
          key={item.id}
          item={item}
          onToggleCheckbox={onToggleCheckbox}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </ScrollView>
  );
};

export default TaskList;
