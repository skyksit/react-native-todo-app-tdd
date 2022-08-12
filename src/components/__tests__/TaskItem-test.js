import 'react-native';
import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react-native';

import TaskItem from '../TaskItem';

let wrapper;
let props;

describe('TaskItem render', () => {
  beforeEach(() => {
    props = {
      key: '1',
      item: {id: '1', subject: 'Learn React Native', done: false},
    };
    wrapper = render(<TaskItem {...props} />);
  });
  afterEach(cleanup);

  it('should render checkbox Icon', () => {
    const element = wrapper.getByTestId('checkbox');
    expect(element).toBeTruthy();
  });
  it('should render subject', () => {
    const element = wrapper.getByText('Learn React Native');
    expect(element).toBeTruthy();
  });
  it('should render edit Icon', () => {
    const element = wrapper.getByTestId('edit');
    expect(element).toBeTruthy();
  });
  it('should render delete Icon', () => {
    const element = wrapper.getByTestId('delete');
    expect(element).toBeTruthy();
  });
});

describe('TaskItem interaction', () => {
  beforeEach(() => {
    props = {
      key: '1',
      item: {id: '1', subject: 'Learn React Native', done: false},
      onToggleCheckbox: jest.fn(),
    };
    wrapper = render(<TaskItem {...props} />);
  });
  afterEach(cleanup);

  it('should call toggle method when checkbox is clicked', () => {
    const element = wrapper.getByTestId('checkbox');
    fireEvent(element, 'pressOut');
    expect(props.onToggleCheckbox).toHaveBeenCalledTimes(1);
  });

  it('should checkbox Style color is blue when done is true', () => {
    props.item.done = true;
    wrapper = render(<TaskItem {...props} />);
    const element = wrapper.getByTestId('checkbox');
    expect(element).toHaveStyle({color: 'blue'});
  });
});
