import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';

import Title from '../Title';

let props;

function getAppComponent(temprops) {
  return <Title {...temprops} />;
}

describe('Title Component', () => {
  props = {title: 'Todo TDD'};
  render(getAppComponent(props));

  it('should render title Todo TDD', () => {
    const title = screen.getByText('Todo TDD');
    expect(title).toBeTruthy();
  });
});
