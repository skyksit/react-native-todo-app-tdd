import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';

import TaskInput from '../TaskInput';

let props;

function getAppComponent(temprops) {
  return <TaskInput {...temprops} />;
}

describe('TaskInput Component', () => {
  props = {};
  render(getAppComponent(props));

  it('should render placeholder', () => {
    const element = screen.getByPlaceholderText('+ Add a Task');
    expect(element).toBeTruthy();
  });
});
