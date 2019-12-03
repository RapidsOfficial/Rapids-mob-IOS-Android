import React from 'react';
import { PropTypes } from 'prop-types';
import { View, TouchableHighlight } from 'react-native';

import { Card } from 'react-native-material-ui';
import Style from './CardsStyle';

export const Cards = (props) => {
    const { 
      style,
      cardAction,
      content,
      cardKey
    } = props;
    
    return (
      <TouchableHighlight onPress={cardAction} underlayColor="white" key={cardKey}>
        <View
          style={props.style || Style.card}
        >
          {content}
        </View>
      </TouchableHighlight>
    );
};

Cards.propTypes = {
  cardAction: PropTypes.func,
  style: PropTypes.object,
  content: PropTypes.object,
  cardKey: PropTypes.number
};