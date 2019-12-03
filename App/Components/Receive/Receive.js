import React, { useEffect, useState } from 'react';
import { View, Text, Clipboard, Image, CameraRoll , ToastAndroid, Platform } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import { Cards } from 'App/Theme';
import { Buttons, Input, Images } from 'App/Theme';
// import RNFS from "react-native-fs";

import Style from './ReceiveStyle';

/**
 * This is an Wallet Receive Component.
 *
 */

const Receive = ({ navigation, selectedWallet, receiveMoney, setScreen }) => {
  const [ label, setLabel ] = useState('');
  const [ amount, setAmount ] = useState('');
  const [ confirm, setConfirm ] = useState(false);

  const address = selectedWallet && selectedWallet.addresses ? selectedWallet.addresses[0].address : '';

  const copyAddress = () => {
    Clipboard.setString(address);
  };

  const makeAnotherPayment = () => {
    setLabel('');
    setAmount('');
    setConfirm(false);
  };

  // const saveQrToDisk = () => {
  //   this.svg.toDataURL((data) => {
  //     RNFS.writeFile(RNFS.CachesDirectoryPath+"/some-name.png", data, 'base64')
  //       .then((success) => {
  //         return CameraRoll.saveToCameraRoll(RNFS.CachesDirectoryPath+"/some-name.png", 'photo')
  //       })
  //       .then(() => {
  //         this.setState({ busy: false, imageSaved: true  })
  //         ToastAndroid.show('Saved to gallery !!', ToastAndroid.SHORT)
  //       })
  //   })
  // }

  return (
    <View style={Style.receiveScreen}>
      <Text style={Style.selectWalletScreenTitle}>TO ADDRESS</Text>

      <Cards 
        cardKey={selectedWallet.walletName}
        style={Style.cardSmall}
        content={
          <View style={Style.cardContent}>
            <Image 
              style={Style.cardImage} 
              source={Images.walletIcon} 
              resizeMode={'contain'} 
            />
            <View style={Style.cardCurrentInfoSmall}>
              <Text style={Style.cardCurrentInfoHeading}>{selectedWallet.walletId.split('-').pop()}</Text>
              <Text style={Style.cardCurrentInfoBalanceValueSmall}>{selectedWallet.balance && selectedWallet.balance.balance ? selectedWallet.balance.balance: 0}</Text>
              <Text style={Style.cardCurrentInfoCurrencyValueSmall}>{selectedWallet.addresses && selectedWallet.addresses.length ? selectedWallet.addresses[0].address: '' }</Text>
            </View>
            <View style={Style.cardRecentInfoSmall}>
              <Icon style={Style.cardCurrentInfoBalanceImageSmall} name="close" size={30} color="#72F586" onPress={() => navigation.openDrawer()} />
            </View>
          </View>
        }
        onPress={() => {
          selectWallet(selectedWallet);
          setScreen(selectedPaymentType, 'Dashboard');  
        }} 
      />

      <View style={Style.receiveScreenCopyButtonContainer}>
        <Buttons 
          containerStyle={Style.receiveScreenCopyButton} 
          textStyle={Style.receiveScreenCopyButtonText}
          text="Copy Address" 
        />
      </View>
      
      {confirm ?
        <View style={Style.sendScreenConfirmContainer}>
          <View style={Style.qRCode}>
            {!address?
              <Text>QR Code could not be generated</Text>
            :
              <QRCode
                size={150}
                value={address}
              />
            }
            <View style={Style.receiveScreenQRButtons}>
              <Buttons 
                containerStyle={Style.receiveScreenQRButton} 
                textStyle={Style.receiveScreenQRButtonText}
                text="Save uri" 
              />
              <Buttons 
                containerStyle={Style.receiveScreenQRButton} 
                textStyle={Style.receiveScreenQRButtonText}
                // onPress={() => saveQrToDisk()}
                text="Save QR" 
              />
            </View>
          </View>
          
          <Text style={Style.selectWalletScreenTitle}>PAYMENT INFO</Text>

          <View style={Style.receiveScreenInfoConatiner}>
            <Text style={Style.receiveScreenInfoHeading}>Label</Text>
            <Text style={Style.receiveScreenInfoText}>{label}</Text>
          </View>

          <View style={Style.receiveScreenInfoConatiner}>
            <Text style={Style.receiveScreenInfoHeading}>Address</Text>
            <Text style={Style.receiveScreenInfoText}>{address}</Text>
          </View>

          <View style={Style.receiveScreenInfoConatiner}>
            <Text style={Style.receiveScreenInfoHeading}>Amount</Text>
            <Text style={Style.receiveScreenInfoText}>{amount} RPD</Text>
          </View>

          <View style={Style.receiveScreenInfoConatiner}>
            <Text style={Style.receiveScreenInfoHeading}>Message</Text>
            <Text style={Style.receiveScreenInfoText}>Send via Rapids {Platform.OS === 'ios'? 'iOS' : 'Android'} {moment().format('DD-MM-YYYY hh:mm')}</Text>
          </View>

          <Buttons 
            containerStyle={Style.receiveScreenRequestButton} 
            textStyle={Style.receiveScreenRequestButtonText}
            text="Share Payment" 
            onPress={() => setConfirm(true)} 
          />
          <Buttons 
            containerStyle={Style.receiveScreenCancelButton} 
            textStyle={Style.receiveScreenCancelButtonText}
            text="Make Another Payment" 
            onPress={() => makeAnotherPayment()} 
          />
          <Buttons 
            containerStyle={Style.receiveScreenCancelButton} 
            textStyle={Style.receiveScreenCancelButtonText}
            text="Home" 
            onPress={() => setScreen('Dashboard', 'Dashboard')} 
          />

        </View>
      :
        <View style={Style.receiveScreenMainContainer}>
          <Input 
            label="Label(optional)" 
            onChangeText={setLabel}
            value={label}
            textColor={"black"}
          />
          <Input 
            label="Amount" 
            onChangeText={setAmount}
            value={amount}
            textColor={"black"}
          />
          
          <Buttons 
            containerStyle={Style.receiveScreenRequestButton} 
            textStyle={Style.receiveScreenRequestButtonText}
            text="Request Payment" 
            onPress={() => setConfirm(true)} 
          />
          <Buttons 
            containerStyle={Style.receiveScreenCancelButton} 
            textStyle={Style.receiveScreenCancelButtonText}
            text="Cancel" 
            onPress={() => setScreen('Dashboard', 'Dashboard')} 
          />
        </View>
      }
      
    </View>
  );
}

Receive.propTypes = {
}

export default Receive;