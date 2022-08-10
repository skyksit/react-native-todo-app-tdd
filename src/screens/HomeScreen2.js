import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Title from '../components/Title';
import Input from '../components/Input';
import Task from '../components/Task';

const initialData = [
  {id: '1', text: 'Learn React Native', completed: false},
  {id: '2', text: 'Create a React Native app', completed: false},
  // {id: '3', text: 'Build an app', completed: false},
  // {id: '4', text: 'Release app', completed: false},
  // {id: '5', text: 'Publish app', completed: false},
];

export default function HomeScreen() {
  const [data, setData] = useState(initialData);
  const [newTask, setNewTask] = useState('');

  const _addTask = () => {
    const ID = Date.now().toString();
    const newTaskObject = {
      id: ID,
      text: newTask,
      completed: false,
    };
    setNewTask('');
    setData([newTaskObject, ...data]);
  };

  const handleRemoveTaskItem = id => {
    console.log(`id = ${id}`);
    const currentTasks = [...data];
    delete currentTasks[id];
    setData(currentTasks);
  };

  const _toggleTask = id => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[id].completed = !currentTasks[id].completed;
    setTasks(currentTasks);
  };

  const _updateTask = task => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[task.id] = task;
    setTasks(currentTasks);
  };

  const _handleTextChange = text => {
    setNewTask(text);
  };

  return (
    <>
      <Title title="Todo TDD" />
      <Input
        value={newTask}
        onChangeText={_handleTextChange}
        onSubmitEditing={_addTask}
      />
      {console.log(data)}
      <ScrollView>
        {data.map(task => (
          <Task
            key={task.id}
            item={task}
            deleteTask={handleRemoveTaskItem}
            toggleTask={_toggleTask}
            updateTask={_updateTask}
          />
        ))}
      </ScrollView>
    </>
  );
}
