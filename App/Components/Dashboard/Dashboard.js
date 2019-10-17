import React from 'react';
import { View, Text } from 'react-native';
import Style from './DashbaordStyle';

/**
 * This is an Wallet Dashboard container.
 *
 */

const Dashboard = () => {
  return (
    <View style={Style.container}>
      <Text>Hello Wallet Dashboard</Text>
    </View>
  );
}

Dashboard.propTypes = {
}

export default Dashboard;