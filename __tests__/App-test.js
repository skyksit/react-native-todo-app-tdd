import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';

import App from '../src/App';

let props;
let component;

function getAppComponent(temprops) {
  return <App {...temprops} />;
}

describe('App render', () => {
  beforeEach(() => {
    props = {};
    component = render(getAppComponent(props));
  });

  // it('snapshot test', () => {
  //   const snapshot = component.toJSON();
  //   expect(snapshot).toMatchSnapshot();
  // });

  it('should render title Todo TDD', () => {
    const title = screen.getByText('Todo TDD');
    expect(title).toBeTruthy();
  });

  it('should render AddTask', () => {
    const element = screen.getByPlaceholderText('+ Add a Task');
    expect(element).toBeTruthy();
  });

  it('should render TaskList', () => {
    const element = screen.getByText('Learn React Native');
    expect(element).toBeTruthy();
  });
});
