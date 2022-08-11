import 'react-native';
import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react-native';

import HomeScreen from '../HomeScreen';

describe('HomeScreen Component Rendering', () => {
  let wrapper;
  let props;
  const inputText = 'Build a React Native App';

  beforeEach(() => {
    props = {};
    wrapper = render(<HomeScreen {...props} />);
  });

  afterEach(cleanup);

  it('should render Title', () => {
    expect(wrapper.getByText('Todo TDD')).toBeTruthy();
  });

  it('should add a new task', async () => {
    const element = wrapper.getByPlaceholderText('+ Add a Task');
    fireEvent.changeText(element, inputText);
    fireEvent(element, 'onSubmitEditing');
    await expect(wrapper.getByText(inputText)).toBeTruthy();
  });

  it('should toggle status when checkbox is clicked', async () => {
    const elements = wrapper.getAllByTestId('checkbox');
    expect(elements.length).toBe(2);
    fireEvent(elements[0], 'onPressOut');
  });
});
