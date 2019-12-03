import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, ScrollView, Platform } from 'react-native';
import { Cards } from 'App/Theme';
import { Buttons, Input, Images } from 'App/Theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';

import Style from './PaymentCompletedStyle';

/**
 * This is an Wallet PaymentCompleted Component.
 *
 */

const PaymentCompleted = ({ navigation, transaction }) => {

  const {
    transactionId,
    date,
    amount,
    address,
    walletId,
    recipient,
    label
  } = transaction;

  return (
    <View style={Style.paymentCompletedContainer}>
      <View style={Style.walletNavigator}>
        <Icon style={Style.walletNavIcon} name="menu" size={30} color="#72F586" onPress={() => navigation.openDrawer()} />
        <Text style={Style.logoText}>Payment Complete!</Text>
      </View>

      <ScrollView 
        style={Style.paymentCompleted}
      >
        <View style={Style.paymentCompletedContent}>

          <Text style={Style.paymentCompletedTitle}>PAYMENT INFO</Text>
          
          <View style={Style.paymentCompletedInfoConatiner}>
            <Text style={Style.paymentCompletedInfoHeading}>Status</Text>
            <Text style={Style.paymentCompletedInfoText}>1/12 confirmation</Text>
          </View>

          <View style={Style.paymentCompletedInfoConatiner}>
            <Text style={Style.paymentCompletedInfoHeading}>Date and Time</Text>
            <Text style={Style.paymentCompletedInfoText}>{moment(date).format('DD-MM-YY hh:mm')}</Text>
          </View>

          <View style={Style.paymentCompletedInfoConatiner}>
            <Text style={Style.paymentCompletedInfoHeading}>From</Text>
            <Text style={Style.paymentCompletedInfoText}>Name: {walletId.split('-').pop()}</Text>
            <Text style={Style.paymentCompletedInfoText}>{address}</Text>
          </View>

          <View style={Style.paymentCompletedInfoConatiner}>
            <Text style={Style.paymentCompletedInfoHeading}>To</Text>
            <Text style={Style.paymentCompletedInfoText}>{recipient}</Text>
          </View>

          <View style={Style.paymentCompletedInfoConatiner}>
            <Text style={Style.paymentCompletedInfoHeading}>Label</Text>
            <Text style={Style.paymentCompletedInfoText}>{label}</Text>
          </View>

          <View style={Style.paymentCompletedInfoConatiner}>
            <Text style={Style.paymentCompletedInfoHeading}>Net Amount</Text>
            <Text style={Style.paymentCompletedInfoText}>-{amount} RPD</Text>
            {/* <Text style={Style.paymentCompletedInfoText}>Credit: 2123.2312 RPD</Text> */}
          </View>

          <View style={Style.paymentCompletedInfoConatiner}>
            <Text style={Style.paymentCompletedInfoHeading}>Transaction ID</Text>
            <Text style={Style.paymentCompletedInfoText}>{transactionId}</Text>
          </View>

          <Buttons 
            containerStyle={Style.confirmButton} 
            textStyle={Style.confirmButtonText} 
            text="VIEW TRANSACTION ID" 
            onPress={() => createTransaction(transaction)} 
          />

          <View style={Style.paymentCompletedInfoConatiner}>
            <Text style={Style.paymentCompletedInfoHeading}>Message</Text>
            <Text style={Style.paymentCompletedInfoText}>Send via Rapids {Platform.OS === 'ios'? 'iOS' : 'Android'} {moment(date).format('DD-MM-YYYY hh:mm')}</Text>
          </View>

          <View style={Style.paymentCompletedInfoConatiner}>
            <Text style={Style.paymentCompletedInfoHeading}>Output Index</Text>
            <Text style={Style.paymentCompletedInfoText}>0</Text>
          </View>

          <View style={Style.paymentCompletedInfoConatinerTwo}>
            <Text style={Style.paymentCompletedInfoText}>Powered by </Text>
            <Text style={Style.paymentCompletedInfoLink}>RapidsNetwork.io</Text>
          </View>

          <Buttons 
            containerStyle={Style.confirmButton} 
            textStyle={Style.confirmButtonText} 
            text="Share Payment" 
            onPress={() => createTransaction(transaction)} 
          />
          <Buttons 
            containerStyle={Style.cancelButton} 
            textStyle={Style.cancelButtonText}
            onPress={() => navigation.navigate('WalletHome')}
            text="Home" 
          />
        </View>
      </ScrollView>
    </View>
  );
}

PaymentCompleted.propTypes = {
}

const mapStateToProps = (state) => ({
  transaction: state.transaction.transaction
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentCompleted);