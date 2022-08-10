import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';

import TaskItem from '../TaskItem';

let props;

function getAppComponent(temProps) {
  return <TaskItem {...temProps} />;
}

describe('TaskItem render', () => {
  props = {key: '1', data: {id: '1', subject: 'Learn React Native'}};

  it('should render checkbox Icon', () => {
    render(getAppComponent(props));
    const element = screen.getByTestId('checkbox');
    expect(element).toBeTruthy();
  });
  it('should render subject', () => {
    render(getAppComponent(props));
    const element = screen.getByText('Learn React Native');
    expect(element).toBeTruthy();
  });
  it('should render edit Icon', () => {
    render(getAppComponent(props));
    const element = screen.getByTestId('edit');
    expect(element).toBeTruthy();
  });
  it('should render delete Icon', () => {
    render(getAppComponent(props));
    const element = screen.getByTestId('delete');
    expect(element).toBeTruthy();
  });
});
