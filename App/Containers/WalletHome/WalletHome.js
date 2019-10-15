import React from 'react'
import { View, ActivityIndicator, Image } from 'react-native'
import Style from './WalletHomeStyle'
import { Buttons } from 'App/Theme'
import { Images } from 'App/Theme'

/**
 * This is an Create Wallet component.
 *
 */

class WalletHome extends React.Component {
  
  render() {
    return (
      <View style={Style.container}>
        {this.props.userIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>

            <View style={Style.logoContainer}>
              <Image style={Style.logo} source={Images.logo} resizeMode={'contain'} />
            </View>
            
            <View  style={Style.buttonContainer}>
              <Buttons 
                text="Create a new wallet"  
                onPress={() => this.props.navigation.navigate('Wallet', {
                  componentToBeRendered: "Info"
                })}
              />
              <Buttons text="Restore a Wallet" />
            </View>
            
          </View>
        )}
      </View>
    );
  }
  
}

WalletHome.propTypes = {
}

export default WalletHome;