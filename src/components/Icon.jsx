import React from 'react';
import FeatIcon from 'react-native-vector-icons/Feather';
import {IconSizes} from '../utils/constants';

FeatIcon.loadFont();

export const FeatherIcon = ({name, size, color}) => {
  return <FeatIcon name={name} size={IconSizes[size]} color={color} />;
};
