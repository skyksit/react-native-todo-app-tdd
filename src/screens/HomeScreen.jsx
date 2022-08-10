import React from 'react';

import Title from '../components/Title';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const initialData = [
  {id: '1', subject: 'Learn React Native'},
  {id: '2', subject: 'Create a React Native app'},
];

export default function App() {
  return (
    <>
      <Title title="Todo TDD" />
      <TaskInput />
      <TaskList data={initialData} />
    </>
  );
}
