import React from 'react';
import { View, TouchableOpacity, Image, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Images } from 'App/Theme'
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';

import Style from './BottomMenuStyle';

/**
 * This is an Dashboard Bottom Menu component.
 *
 */

const BottomMenu = ({ setScreen, setSelectedPaymentType, setTransactionModal, transactionModal, navigation }) => {
  
  const modalAction = (type) => {
    setTransactionModal(!transactionModal);
    setSelectedPaymentType('Receive');
    setScreen('SelectWallet');
  };

  return (
    <View style={Style.dashboardMenuContainer}>
      <Dialog
        visible={transactionModal}
        dialogAnimation={new SlideAnimation({
          slideFrom: 'bottom',
        })}
        dialogStyle={Style.dialogStyle}
        height={.23}
        width={1}
        onTouchOutside={() => setTransactionModal(false)}
      >
        <DialogContent style={Style.dialogContent}>
          <Text style={Style.dialogTitle}>Pay To</Text>
          <View  style={Style.modalContent}>
            <TouchableHighlight
              style={Style.transactionBlocks}
              onPress={() => modalAction('None')}
            >
              <View style={Style.transactionBlocksContent}>
                <Image 
                  style={Style.transactionBlockImage} 
                  source={Images.transfer} 
                  resizeMode={'contain'} 
                />
                <Text style={Style.transactionBlockTitle}>Transfer</Text>
                <Text style={Style.transactionBlockInfo}>Within Own Address</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={Style.transactionBlocks}
              onPress={() => modalAction('Send')}
            >
              <View style={Style.transactionBlocksContent}>
                <Image 
                  style={Style.transactionBlockImage} 
                  source={Images.send} 
                  resizeMode={'contain'} 
                />
                <Text style={Style.transactionBlockTitle}>Send</Text>
                <Text style={Style.transactionBlockInfo}>To External Address</Text>
              </View>
            </TouchableHighlight>
          
            <TouchableHighlight
              style={Style.transactionBlocks}
              onPress={() => modalAction('Receive')}
            >
              <View style={Style.transactionBlocksContent}>
                <Image 
                  style={Style.transactionBlockImage} 
                  source={Images.receive} 
                  resizeMode={'contain'} 
                />
                <Text style={Style.transactionBlockTitle}>Receive</Text>
                <Text style={Style.transactionBlockInfo}>To Own Address</Text>
              </View>
            </TouchableHighlight>
          </View>
          
        </DialogContent>
       
      </Dialog>

      {!transactionModal?
        <View style={Style.dashboardMenu}>
          <TouchableOpacity 
            style={Style.dashboardMenuIcon} 
            onPress={() => setScreen('Dashboard')}>
            <Image 
              style={Style.dashboardMenuIconImage} 
              source={Images.walletBottom} 
              resizeMode={'contain'} 
            />
          </TouchableOpacity>

          <TouchableOpacity style={Style.logo} onPress={() => setTransactionModal(true)}> 
            <Image 
              style={Style.logoImage} 
              source={Images.menuLogo} 
              resizeMode={'contain'} 
            />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={Style.dashboardMenuIcon} 
            onPress={() => setScreen('Dashboard')}>
            <Image 
              style={Style.dashboardMenuIconImage} 
              source={Images.checkBottom} 
              resizeMode={'contain'} 
            />
          </TouchableOpacity>
        </View>
      :
        <View style={Style.dashboardMenuClose}>
          <TouchableOpacity 
            style={Style.closeButton} 
            onPress={() => setTransactionModal(false)}>
            <Image 
              style={Style.closeButtonImage} 
              source={Images.bottomClose} 
              resizeMode={'contain'} 
            />
          </TouchableOpacity>
        </View>
      }
      
    </View>
  );
}

BottomMenu.propTypes = {
}

export default BottomMenu;