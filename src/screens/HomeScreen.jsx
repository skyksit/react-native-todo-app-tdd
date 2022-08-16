import React, {useState, useCallback} from 'react';

import Title from '../components/Title';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import shortid from 'shortid';

const initialData = [
  {id: shortid.generate(), subject: 'Learn React Native', done: false},
  {id: shortid.generate(), subject: 'Create a React Native app', done: false},
];

export default function App() {
  const [data, setData] = useState(initialData);
  const [newItem, setNewItem] = useState('');

  const handleInputTextChange = useCallback(text => {
    setNewItem(text);
  }, []);

  const handleAddItem = useCallback(() => {
    setData(preData => {
      return [
        {id: shortid.generate(), subject: newItem, done: false},
        ...preData,
      ];
    });
    setNewItem('');
  }, [newItem]);

  const handleToggleItem = useCallback(item => {
    setData(prevData => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);
      newData[index] = {...item, done: !item.done};
      return newData;
    });
  }, []);

  const handleDeleteItem = useCallback(item => {
    setData(prevData => {
      const newData = prevData.filter(i => i !== item);
      return newData;
    });
  }, []);

  const handleUpdateItem = useCallback((item, newSubject) => {
    setData(prevData => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);
      newData[index] = {...item, subject: newSubject};
      return newData;
    });
  }, []);

  return (
    <>
      <Title title="Todo TDD" />
      <TaskInput
        value={newItem}
        onChangeText={handleInputTextChange}
        onSubmitEditing={handleAddItem}
      />
      <TaskList
        data={data}
        onToggleCheckbox={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
      />
    </>
  );
}
