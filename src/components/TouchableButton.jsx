import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {FeatherIcon} from './Icon';

const TouchableButton = ({type, id, onPressOut, isCompleted, size}) => {
  const _OnPressOut = () => {
    onPressOut(id);
  };

  return (
    <TouchableOpacity style={styles.iconbutton} onPressOut={_OnPressOut}>
      <FeatherIcon
        name={type}
        size={size}
        color={isCompleted ? 'blue' : 'red'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconbutton: {
    margin: 10,
  },
});

TouchableButton.defaultProps = {
  onPressOut: () => {},
};

export default TouchableButton;
