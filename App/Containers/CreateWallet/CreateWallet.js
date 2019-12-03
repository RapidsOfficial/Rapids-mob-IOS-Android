import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Style from './CreateWalletStyle';
import { WalletTerms, CreateWalletStep1, CreateWalletStep2, CreateWalletStep3 } from 'App/Components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import WalletActions from 'App/Stores/Wallet/Actions';

/**
 * This is an Wallet Container.
 *
 */

class CreateWallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phrases: '',
      password: true,
      changeState: ''
    };
  }

  componentWillUnMount() {
    this.setState({
      phrases: '',
      password: true,
      changeState: ''
    });
  }

  handleState = (state, value) => {
    this.setState({ [state] : value });
  }

  createBackup = (password) => {
    const { phrases } = this.state;
    const { wallets, selectedWallet, createBackup } = this.props;
    if(!phrases || !password)
      return;
    console.log(phrases, password);
    createBackup({ walletId: selectedWallet.walletId, phrases: phrases, password: password, wallets: wallets });
  }

  handleNavigation = () => {
    const { navigation } = this.props;
    const { changeState, password } = this.state;
    const componentToBeRendered = navigation.getParam('componentToBeRendered');
    if((componentToBeRendered === 'Password' || changeState === 'Password') && !password)
      this.setState({ changeState: 'Mnemonic' });
    else if(componentToBeRendered === 'Password' || changeState === 'Password')
      this.setState({ password: false });
    else
      navigation.goBack();
  }

  render() {
    const { changeState, password } = this.state;
    const { navigation, wallets, createWallet, walletIsLoading, selectedWallet } = this.props;
    const componentToBeRendered = navigation.getParam('componentToBeRendered');

    return (
      <View style={Style.container}>
        {walletIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View style={Style.componentContainer}>
            <View style={Style.walletNavigator}>
              <Icon style={Style.walletNavIcon} name="arrow-back" size={30} color="#72F586" onPress={this.handleNavigation} />
            </View>
            {componentToBeRendered === 'Terms' ?
                <WalletTerms  />
              :
              componentToBeRendered === 'Password' || changeState === 'Password' ?
                <CreateWalletStep3  
                  statePassword={password}
                  createBackup={this.createBackup}
                  handleState={this.handleState}
                />
              :
                componentToBeRendered === 'Mnemonic' || changeState === 'Mnemonic' ?
                  <CreateWalletStep2 
                    selectedWallet={selectedWallet}
                    handleState={this.handleState}
                  />
                :
                componentToBeRendered === 'Info' ?
                  <CreateWalletStep1
                    wallets={wallets}
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
  wallets: state.wallet.wallets,
  walletIsLoading: state.wallet.walletIsLoading,
  selectedWallet: state.wallet.selectedWallet
});

const mapDispatchToProps = (dispatch) => ({
  createWallet: (wallet) => dispatch(WalletActions.createWallet(wallet)),
  createBackup: (data) => dispatch(WalletActions.createBackup(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateWallet);

