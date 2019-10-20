import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Style from './DashbaordStyle';
import { Header, BottomMenu, Home, Send } from 'App/Components';
import { Receive } from '..';

/**
 * This is an Wallet Dashboard Component.
 *
 */

const Dashboard = (props) => {
  const [ screen, setScreen ] = useState('Dashboard');
  const balance = Object.keys(props.balance).length ? props.balance.balance : 0;

  useEffect(() => {
    if(props.walletId)
      props.fetchBalance({walletId: props.walletId});
  }, [props.walletId]);

  renderScreen = () => {
    switch(screen) {
      case 'Dashboard':
        return <Home balance={balance} />;
      case 'Receive':
        return <Receive balance={balance} setScreen={setScreen} {...props} />;
      case 'Send':
          return <Send balance={balance} setScreen={setScreen} {...props} />; 
    } 
  };

  return (
    <View style={Style.container}>
      <Header {...props} />
      {renderScreen()}
      <BottomMenu setScreen={setScreen} {...props} />
    </View>
  );
}

Dashboard.propTypes = {
}

export default Dashboard;