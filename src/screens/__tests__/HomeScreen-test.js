import 'react-native';
import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react-native';

import HomeScreen from '../HomeScreen';

describe('HomeScreen', () => {
  let wrapper;
  let props;
  const inputText = 'Build a React Native App';

  beforeEach(() => {
    props = {};
    wrapper = render(<HomeScreen {...props} />);
  });

  afterEach(cleanup);

  describe('Render', () => {
    it('should render Title', () => {
      expect(wrapper.getByText('Todo TDD')).toBeTruthy();
    });
  });

  describe('Add Task', () => {
    it('should add a new task', async () => {
      const element = wrapper.getByPlaceholderText('+ Add a Task');
      fireEvent.changeText(element, inputText);
      fireEvent(element, 'onSubmitEditing');
      await expect(wrapper.getByText(inputText)).toBeTruthy();
    });
  });

  describe('Click Checkbox', () => {
    it('should first task style is blue and second task style is green when first task is done', () => {
      const elements = wrapper.getAllByTestId('checkbox');
      expect(elements.length).toBe(2);
      fireEvent(elements[0], 'onPressOut');
      expect(elements[0]).toHaveStyle({color: 'blue'});
      expect(elements[1]).toHaveStyle({color: 'green'});
    });
  });

  describe('Delete Task', () => {
    it('should delete first task', () => {
      const elements = wrapper.getAllByTestId('delete');
      expect(elements.length).toBe(2);
      fireEvent.press(elements[0]);
      const elementsAfterDelete = wrapper.getAllByTestId('delete');
      expect(elementsAfterDelete.length).toBe(1);
    });
  });

  describe('Edit Task', () => {
    it('should edit first task', () => {
      const expectText = 'submit your app to the App Store';
      const elements = wrapper.getAllByTestId('edit');
      expect(elements.length).toBe(2);
      fireEvent.press(elements[0]);
      const textInput = wrapper.getByPlaceholderText('Edit a Task');
      fireEvent.changeText(textInput, expectText);
      fireEvent(textInput, 'onSubmitEditing');
      expect(wrapper.getByText(expectText)).toBeTruthy();
    });
  });
});
