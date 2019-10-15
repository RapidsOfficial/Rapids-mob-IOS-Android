import React from 'react'
import { View, ActivityIndicator, Image } from 'react-native'
import Style from './WalletStyle';
import { WalletTerms, WalletPassword, WalletInfo } from 'App/Components'
import Icon from 'react-native-vector-icons/MaterialIcons';

/**
 * This is an Wallet component.
 *
 */

class Wallet extends React.Component {
  render() {
    const { navigation } = this.props;
    const componentToBeRendered = navigation.getParam('componentToBeRendered');

    return (
      <View style={Style.container}>
        {this.props.userIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View style={Style.componentContainer}>
            <View style={Style.walletNavigator}>
              <Icon style={Style.walletNavIcon} name="arrow-back" size={30} color="#51B04D" />
            </View>
            {componentToBeRendered === 'Terms' ?
                <WalletTerms  />
              :
              componentToBeRendered === 'Password' ?
                <WalletPassword  />
              :
                componentToBeRendered === 'Info' ?
                  <WalletInfo />
                :
                  <View />
            }
          </View>
        )}
      </View>
    );
  }
  
}

Wallet.propTypes = {
}

export default Wallet;