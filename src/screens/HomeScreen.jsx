import React from 'react';

import Title from '../components/Title';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import shortid from 'shortid';

const initialData = [
  {id: shortid.generate(), subject: 'Learn React Native'},
  {id: shortid.generate(), subject: 'Create a React Native app'},
];

export default function App() {
  const [data, setData] = React.useState(initialData);
  const [newTask, setNewTask] = React.useState('');

  const handleInputTextChange = text => {
    setNewTask(text);
  };

  const handleAddTask = () => {
    setData([...data, {id: shortid.generate(), subject: newTask}]);
    setNewTask('');
  };

  return (
    <>
      <Title title="Todo TDD" />
      <TaskInput
        value={newTask}
        onChangeText={handleInputTextChange}
        onSubmitEditing={handleAddTask}
      />
      <TaskList data={data} />
    </>
  );
}
