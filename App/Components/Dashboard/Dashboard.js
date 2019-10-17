import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Cards } from 'App/Theme';
import Style from './DashbaordStyle';
import { Header, BottomMenu } from 'App/Components';

/**
 * This is an Wallet Dashboard Component.
 *
 */

const Dashboard = (props) => {
  
  useEffect(() => {
    if(props.walletId)
      props.fetchBalance({walletId: props.walletId});
  }, [props.walletId]);

  console.log(props.balance, '=--=-=-=-=-=-=-=>balance12');

  return (
    <View style={Style.container}>
      <Header />
      <View style={Style.contentContainer}>
        <Cards 
          content={
            <View style={Style.cardContent}>
              <Text>Mobile Wallet!</Text>
              <Text>{'0M'}</Text>
            </View>
          } 
        />
      </View>
      <BottomMenu />
    </View>
  );
}

Dashboard.propTypes = {
}

export default Dashboard;