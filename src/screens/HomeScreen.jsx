import React from 'react';

import Title from '../components/Title';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import shortid from 'shortid';

const initialData = [
  {id: shortid.generate(), subject: 'Learn React Native', done: false},
  {id: shortid.generate(), subject: 'Create a React Native app', done: false},
];

export default function App() {
  const [data, setData] = React.useState(initialData);
  const [newTask, setNewTask] = React.useState('');

  const handleInputTextChange = text => {
    setNewTask(text);
  };

  const handleAddTask = () => {
    setData([...data, {id: shortid.generate(), subject: newTask, done: false}]);
    setNewTask('');
  };

  const handleToggleItem = item => {
    setData(prevData => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);
      newData[index] = {...item, done: !item.done};

      console.log(JSON.stringify(newData));
      return newData;
    });
  };

  return (
    <>
      <Title title="Todo TDD" />
      <TaskInput
        value={newTask}
        onChangeText={handleInputTextChange}
        onSubmitEditing={handleAddTask}
      />
      <TaskList data={data} onToggleCheckbox={handleToggleItem} />
    </>
  );
}
