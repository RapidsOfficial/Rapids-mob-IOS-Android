import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Style from './CreateWalletStyle';
import { WalletTerms, WalletPassword, WalletInfo } from 'App/Components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import WalletActions from 'App/Stores/Wallet/Actions';

/**
 * This is an Wallet Container.
 *
 */

class CreateWallet extends React.Component {

  render() {
    const { navigation, wallet, createWallet, walletIsLoading } = this.props;
    const componentToBeRendered = navigation.getParam('componentToBeRendered');

    return (
      <View style={Style.container}>
        {this.props.walletIsLoading ? (
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
                  <WalletInfo
                    wallet={wallet}
                    walletIsLoading={walletIsLoading}
                    createWallet={createWallet}
                  />
                :
                  <View />
            }
          </View>
        )}
      </View>
    );
  }
  
}

CreateWallet.propTypes = {
}

const mapStateToProps = (state) => ({
  wallet: state.wallet.wallet,
  walletIsLoading: state.wallet.walletIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  createWallet: (wallet) => dispatch(WalletActions.createWallet(wallet)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateWallet);

