import React from 'react';
import { View, Text } from 'react-native';
import { Cards } from 'App/Theme';
import Style from './HomeStyle';

/**
 * This is an Wallet Home Component.
 *
 */

const Home = ({ balance }) => {
  return (
    <View style={Style.homeScreen}>
      <Cards 
        content={
          <View style={Style.cardContent}>
            <Text>Mobile Wallet!</Text>
            <Text>{`${balance}M`}</Text>
          </View>
        } 
      />
    </View>
  );
}

Home.propTypes = {
}

export default Home;