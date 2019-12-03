import React, { Component } from 'react';
import { View, Text, ScrollView, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Buttons, Images } from 'App/Theme'
import PINCode, { hasUserSetPinCode, deleteUserPinCode, resetPinCodeInternalStates } from '@haskkor/react-native-pincode'
import SwitchToggle from '@dooboo-ui/native-switch-toggle';
import { Header } from 'App/Components';
import SecurityActions from 'App/Stores/Security/Actions';

import Style from './ScreenlockStyle';

/**
 * This is an Screen Lock component.
 *
 */

class Screenlock extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      status: '',
    };
  }

  async componentDidMount() {
    // await deleteUserPinCode();
    // this.props.setSecurity({
    //   sixDigitPin: false,
    //   sixDigitPinLogin: false,
    //   touchIdLogin: false,
    //   touchIdInApp: false
    // })
    const userLockStatus = await hasUserSetPinCode();
    
    const { security } = this.props;

    this.setState({
      sixDigitPin: security.sixDigitPin,
      sixDigitPinLogin: security.sixDigitPinLogin,
      touchIdLogin: security.touchIdLogin,
      touchIdInApp: security.touchIdInApp
    });

    this.setState({ status: userLockStatus ? 'enter' : 'choose' })
  }

  handleError = (error) => {
    console.log(error, '=-=-=-=-=-=->');
  }
 
  finishProcess = (pincode) => {
    console.log(pincode);
  }

  handleSwitch = (switchType, switchValue) => {
    let { security, setSecurity } = this.props;    
    security[switchType] = switchValue;
    setSecurity(security);
    this.setState({ [switchType]: switchValue });    
    if(switchType === 'sixDigitPin')
      this.setState({ status: 'enter' });
  }

  resetPin = async () => {
    this.handleSwitch('sixDigitPin', false);
    this.setState({
      status: 'choose',
      sixDigitPin: false,
      sixDigitPinLogin: false,
      touchIdLogin: false,
      touchIdInApp: false
    });
    await resetPinCodeInternalStates();
  }

  render() {    
    const { 
      status,
      sixDigitPin,
      sixDigitPinLogin,
      touchIdLogin,
      touchIdInApp
    } = this.state;

    let { navigation, security } = this.props;
    
    return (
      !status ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) :
        status === 'enter'?
        <View style={Style.screenLockContainer}>
          <Header 
            screen="ManageSecurity"
            setScreen={() => navigation.navigate('WalletHome')}
            lastScreen="Dashboard"
          />

          <ScrollView 
            style={Style.screenLock}
          >
            <View style={Style.screenLockContent}>
               <Text style={Style.screenLockTitle}>Manage Security</Text>

              <View style={Style.screenLockOptions}>
                <Text style={Style.screenLockOptionsText}>Enable 6-Digit PIN</Text>
                <SwitchToggle
                  switchOn={sixDigitPin}
                  onPress={() => this.handleSwitch('sixDigitPin', !sixDigitPin)}
                  containerStyle={{
                    marginTop: 16,
                    width: 55,
                    height: 20,
                    borderRadius: 25,
                    backgroundColor: '#ccc',
                    padding: 0,
                  }}
                  circleStyle={{
                    width: 30,
                    height: 30,
                    borderRadius: 19,
                    backgroundColor: 'blue', // rgb(102,134,205)
                    color: 'blue'
                  }}
                  circleColorOff="#F1F1F1"
                  circleColorOn="#4FAE58"
                  backgroundColorOn="#58C281"
                  backgroundColorOff="#e5e1e0"
                />
              </View>

              <View style={Style.screenLockOptions}>
                <Text style={Style.screenLockOptionsText}>Enable 6-Digit PIN Login</Text>
                <SwitchToggle
                  switchOn={sixDigitPinLogin}
                  onPress={() => this.handleSwitch('sixDigitPinLogin', !sixDigitPinLogin)}
                  containerStyle={{
                    marginTop: 16,
                    width: 55,
                    height: 20,
                    borderRadius: 25,
                    backgroundColor: '#ccc',
                    padding: 0,
                  }}
                  circleStyle={{
                    width: 30,
                    height: 30,
                    borderRadius: 19,
                    backgroundColor: 'blue', // rgb(102,134,205)
                    color: 'blue'
                  }}
                  circleColorOff="#F1F1F1"
                  circleColorOn="#4FAE58"
                  backgroundColorOn="#58C281"
                  backgroundColorOff="#e5e1e0"
                />
              </View>

              <View style={Style.screenLockOptions}>
                <Text style={Style.screenLockOptionsText}>Enable Touch ID Login</Text>
                <SwitchToggle
                  switchOn={touchIdLogin}
                  onPress={() => this.handleSwitch('touchIdLogin', !touchIdLogin)}
                  containerStyle={{
                    marginTop: 16,
                    width: 55,
                    height: 20,
                    borderRadius: 25,
                    backgroundColor: '#ccc',
                    padding: 0,
                  }}
                  circleStyle={{
                    width: 30,
                    height: 30,
                    borderRadius: 19,
                    backgroundColor: 'blue', // rgb(102,134,205)
                    color: 'blue'
                  }}
                  circleColorOff="#F1F1F1"
                  circleColorOn="#4FAE58"
                  backgroundColorOn="#58C281"
                  backgroundColorOff="#e5e1e0"
                />
              </View>

              <View style={Style.screenLockOptions}>
                <Text style={Style.screenLockOptionsText}>Touch ID In-App Authentication</Text>
                <SwitchToggle
                  switchOn={touchIdInApp}
                  onPress={() => this.handleSwitch('touchIdInApp', !touchIdInApp)}
                  containerStyle={{
                    marginTop: 16,
                    width: 55,
                    height: 20,
                    borderRadius: 25,
                    backgroundColor: '#ccc',
                    padding: 0,
                  }}
                  circleStyle={{
                    width: 30,
                    height: 30,
                    borderRadius: 19,
                    backgroundColor: 'blue', // rgb(102,134,205)
                    color: 'blue'
                  }}
                  circleColorOff="#F1F1F1"
                  circleColorOn="#4FAE58"
                  backgroundColorOn="#58C281"
                  backgroundColorOff="#e5e1e0"
                />
              </View>

              <TouchableOpacity onPress={this.resetPin}>
                <View style={Style.resetContainer} >
                  <Image 
                    style={Style.resetImage} 
                    source={Images.walletIcon} 
                    resizeMode={'contain'} 
                  />
                  <View style={Style.resetCurrentInfoSmall}>
                    <Text style={Style.resetCurrentInfoHeading}>Reset PIN</Text>
                    <Text style={Style.resetCurrentInfoCurrencyValueSmall}>Last Created - </Text>
                  </View>
                  <View style={Style.resetRecentInfoSmall}>
                    <Icon style={Style.resetCurrentInfoBalanceImageSmall} name="keyboard-arrow-right" size={30} color="#72F586"/>
                  </View>
                </View>
              </TouchableOpacity>

              
            </View>
            <Buttons 
              containerStyle={Style.cancelButton} 
              textStyle={Style.cancelButtonText}
              onPress={() => navigation.navigate('WalletHome')}
              text="Close" 
            />
          </ScrollView>
        </View>
       
        :

        <View style={Style.screenLockContainer}>
          <Header 
            screen="SetupPin!"
            setScreen={() => navigation.navigate('WalletHome')}
            lastScreen="Dashboard"
          />
          <PINCode 
            status={status}
            passcodeFallback={false}
            finishProcess={() => this.handleSwitch('sixDigitPin', true)}
            callbackErrorTouchId={this.handleError}
          />
        </View>
          
    );
  }
  
}

Screenlock.propTypes = {
}

const mapStateToProps = (state) => ({
  security: state.security.security
});

const mapDispatchToProps = (dispatch) => ({
  setSecurity: (security) => dispatch(SecurityActions.setSecurity(security))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screenlock);

