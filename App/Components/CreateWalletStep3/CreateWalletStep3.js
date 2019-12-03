import React, { useState, useEffect, useRef } from 'react';
import { View ,Text } from 'react-native';


import Style from './CreateWalletStep3Style';
import { Buttons, Input } from 'App/Theme';

// import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * This is an Wallet Password component.
 *
 */

const CreateWalletStep3 = ({ createBackup, handleState, statePassword, setStatePassword }) => {
  const [ currentState, setCurrentState ] = useState('password');
  const [ password, setPassword ] = useState(0);
  const [ confirmPassword, setConfirmPassword ] = useState(0);
  const [ error, setError ] = useState('');
  let textInput = null;

  useEffect(() => { 
    if(!statePassword && currentState !== 'password') {
      setCurrentState('password');
      handleState('password', true);
    }
    
    return () => {      
      setCurrentState('password');
      setPassword(''),
      setConfirmPassword('');
      setError('');
    };
  },[statePassword]);

  

  const saveWalletPassword = async (value) => {
    if(value === 'confirm') {
      textInput.clear();
      setCurrentState('confirm');
    } else {
      if(confirmPassword !== password) {
        setError('Password Donot Match');
      } else {
        createBackup(password);
      }
    }
  };

  const onChangePassword = (value) => {
    if(value)
      setPassword(value);      
  };

  const onChangeConfirmPassword = (value) => {
    if(value)
      setConfirmPassword(value)
  }

  return (
    <View style={Style.container}>
      <View style={Style.content}>
        <View style={Style.contentTitle}>
          <Text style={Style.contentStep}>Step {currentState === 'password' ? '2' : '3'} of 3</Text>
        </View>
        <View style={Style.passwordInputConatiner}>
          <Text style={Style.passwordInputText}>{currentState === 'password' ? 'Create' : 'Confirm'} your own Password</Text>
          <View>
            {currentState === 'password' ?
              <Input 
                inputRef={(input) => { textInput = input; }}
                label="Enter your password" 
                onChangeText={onChangePassword}
                error={error}
                textColor="white"
                secureTextEntry={true}
                inlineImageLeft='hide'
                baseColor={'white'}
                tintColor={'white'}
                labelTextStyle={{
                  marginTop: 5
                }}
              />
              :
              <Input 
                label="Enter your password again" 
                onChangeText={onChangeConfirmPassword}
                textColor="white"
                secureTextEntry={true}
                error={error}
                inlineImageLeft='hide'
                baseColor={'white'}
                tintColor={'white'}
                labelTextStyle={{
                  marginTop: 5
                }}
              />
            }
          </View>
        </View>
        
      </View>
      <View style={Style.createButton}>
        <Buttons text={ currentState === 'password' ? "Next" : "Save"} onPress={() => currentState === 'password' ? saveWalletPassword('confirm') : saveWalletPassword()} />
      </View>
    </View>
  )
}

CreateWalletStep3.propTypes = {
}

export default CreateWalletStep3;