import React from 'react';
import { PropTypes } from 'prop-types';
import { View } from 'react-native';

import { Card } from 'react-native-material-ui';
import Style from './CardsStyle';

export const Cards = (props) => {
    const { 
      style,
      onPress,
      content
    } = props;

    return (
      <View
        style={Style.card}
      >
        {content}
      </View>
    );
};

Cards.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.object
};