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
  const [newItem, setNewItem] = React.useState('');

  const handleInputTextChange = text => {
    setNewItem(text);
  };

  const handleAddItem = () => {
    setData([...data, {id: shortid.generate(), subject: newItem, done: false}]);
    setNewItem('');
  };

  const handleToggleItem = item => {
    setData(prevData => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);
      newData[index] = {...item, done: !item.done};
      return newData;
    });
  };

  return (
    <>
      <Title title="Todo TDD" />
      <TaskInput
        value={newItem}
        onChangeText={handleInputTextChange}
        onSubmitEditing={handleAddItem}
      />
      <TaskList data={data} onToggleCheckbox={handleToggleItem} />
    </>
  );
}
