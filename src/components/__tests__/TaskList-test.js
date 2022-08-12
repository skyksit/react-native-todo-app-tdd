import 'react-native';
import React from 'react';
import {render, cleanup} from '@testing-library/react-native';

import TaskList from '../TaskList';

let props;
let wrapper;

function getAppComponent(temprops) {
  return <TaskList {...temprops} />;
}

describe('TaskList render', () => {
  beforeEach(() => {
    props = {
      data: [
        {id: '1', subject: 'Learn React Native', done: false},
        {id: '2', subject: 'Create a React Native app', done: false},
      ],
    };
    wrapper = render(<TaskList {...props} />);
  });
  afterEach(cleanup);

  it('should render first Task', () => {
    const element = wrapper.getByText('Learn React Native');
    expect(element).toBeTruthy();
  });
  //두번째 Task 도 있어야 한다
  it('should render second Task', () => {
    const element = wrapper.getByText('Create a React Native app');
    expect(element).toBeTruthy();
  });
});
