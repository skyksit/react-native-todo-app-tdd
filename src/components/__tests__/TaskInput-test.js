import 'react-native';
import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react-native';

import TaskInput from '../TaskInput';

describe('TaskInput Component Rendering', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {};
    wrapper = render(<TaskInput {...props} />);
  });
  afterEach(cleanup);

  it('should render placeholder', () => {
    expect(wrapper.getByPlaceholderText('+ Add a Task')).toBeTruthy();
    expect(wrapper.getByPlaceholderText('+ Add a Task')).toBeEnabled();
  });
});

describe('TaskInput Component Interaction', () => {
  let wrapper;
  let props;
  const inputText = 'Build a React Native App';

  beforeEach(() => {
    props = {
      value: '',
      onChangeText: jest.fn(),
      onSubmitEditing: jest.fn(),
    };
    wrapper = render(<TaskInput {...props} />);
  });
  afterEach(cleanup);

  it('Check Input Value empty', () => {
    const element = wrapper.getByPlaceholderText('+ Add a Task');
    expect(element.props.value).toBe('');
  });

  it('Should call onChangeText when typing', () => {
    const element = wrapper.getByPlaceholderText('+ Add a Task');
    fireEvent.changeText(element, inputText);
    expect(props.onChangeText).toHaveBeenCalledTimes(1);
  });

  it('Should send change value when typing', () => {
    const element = wrapper.getByPlaceholderText('+ Add a Task');
    fireEvent.changeText(element, inputText);
    expect(props.onChangeText).toBeCalledWith(inputText);
  });

  it('Should call onSubmitEditing when pressing enter', () => {
    const element = wrapper.getByPlaceholderText('+ Add a Task');
    fireEvent.changeText(element, inputText);
    fireEvent(element, 'onSubmitEditing');
    expect(props.onSubmitEditing).toHaveBeenCalledTimes(1);
  });
});
