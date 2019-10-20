import React from 'react';
import { PropTypes } from 'prop-types';
import { Text, View, ViewPropTypes } from 'react-native';

import { Button } from 'react-native-material-ui';
import Style from './ButtonsStyle';

export const Buttons = (props) => {
    const { 
      raised,
      primary,
      accent,
      onPress,
      onLongPress,
      text,
      upperCase,
      icon,
      iconSet,
      disabled
    } = props;

    return (
      <Button 
        raised={raised}
        primary={primary}
        accent={accent}
        onPress={onPress}
        onLongPress={onLongPress}
        text={text}
        upperCase={upperCase}
        icon={icon}
        iconSet={iconSet}
        disabled={disabled}
        style={{
          container: Style.container,
          text: Style.text,
        }}
      />
    );
};

Buttons.propTypes = {
  disabled: PropTypes.bool,
  raised: PropTypes.bool,
  primary: PropTypes.bool,
  accent: PropTypes.bool,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  text: PropTypes.string,
  upperCase: PropTypes.bool,
  icon: PropTypes.oneOfType([
      PropTypes.string, 
      PropTypes.element
  ]),
  iconSet: PropTypes.string,
  style: PropTypes.shape({
    container: ViewPropTypes.style,
    text: Text.propTypes.style,
  })
};