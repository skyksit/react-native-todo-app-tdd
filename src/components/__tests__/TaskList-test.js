import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';

import TaskList from '../TaskList';

let props;

function getAppComponent(temprops) {
  return <TaskList {...temprops} />;
}

describe('TaskList render', () => {
  props = {
    data: [
      {subject: 'Learn React Native'},
      {subject: 'Create a React Native app'},
    ],
  };

  it('should render first Task', () => {
    render(getAppComponent(props));
    const element = screen.getByText('Learn React Native');
    expect(element).toBeTruthy();
  });
  //두번째 Task 도 있어야 한다
  it('should render second Task', () => {
    render(getAppComponent(props));
    const element = screen.getByText('Create a React Native app');
    expect(element).toBeTruthy();
  });
});