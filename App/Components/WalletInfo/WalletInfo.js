import React from 'react'
import { View, Text, Image } from 'react-native'
import Style from './WalletInfoStyle';
import { Cards } from 'App/Theme';
import { Images } from 'App/Theme'

// import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * This is an Wallet Login component.
 *
 */

const WalletInfo = ({ setScreen }) => {
  return (
    <View style={Style.container}>
      <View style={Style.containerHeader}>
        <View style={Style.containerHeadingInfo}>
          <Text style={Style.containerHeadingPrice}>
              71,00,00,00,00.00
          </Text>
          <Text style={Style.containerHeadingCurrency}>
            RPD
          </Text>
        </View>
        <View style={Style.containerHeadingConversions}>
          <Text style={Style.containerHeadingConvertionBitcoin}>
            B 1.58798
          </Text>
          <View style={Style.containerHeadingConversionUSD}>
            <View style={Style.containerHeadingConversionsUSDPriceInfo}>
              <Text style={Style.containerHeadingConversionsUSDPriceInfoPrice}>$10.68k</Text>
              <Text style={Style.containerHeadingConversionsUSDPriceInfoCurrency}>USD</Text>
            </View>
            <Text style={Style.containerHeadingConversionsCapo}>
              MARKET VALUE
            </Text>
          </View>
        </View>
      </View>
      <View style={Style.containerTransactions}>
        <Cards 
          style={Style.cardTransaction}
          key={0}
          cardAction={() => setScreen('TransactionInfo', 'AllTransactions')}
          content={
            <View style={Style.cardTransactionsContentContainer}>
              <Image 
                style={Style.transactionBlockImage} 
                source={Images.send} 
                resizeMode={'contain'} 
              />
              <View style={Style.cardTransactionsContent}>
                <View style={Style.cardTransactionsContentTitle}>
                  <Text style={Style.cardTransactionsContentType}>Sent</Text>
                  <Text style={Style.cardTransactionsContentDate}>11.00 AM</Text>
                </View>
                <Text style={Style.cardTransactionsContentAddress}>
                  Rfdfsdsfhdsjfksjdfskbfgsjvbdfgsdfbhsfsfj
                </Text>
                <Text style={Style.cardTransactionsBalanceSend}>
                  -3,643.434.00
                </Text>
              </View>
            </View>
          } 
        />
        <Cards 
          style={Style.cardTransaction}
          key={0}
          cardAction={() => setScreen('TransactionInfo', 'AllTransactions')}
          content={
            <View style={Style.cardTransactionsContentContainer}>
              <Image 
                style={Style.transactionBlockImage} 
                source={Images.receive} 
                resizeMode={'contain'} 
              />
              <View style={Style.cardTransactionsContent}>
                <View style={Style.cardTransactionsContentTitle}>
                  <Text style={Style.cardTransactionsContentType}>Received</Text>
                  <Text style={Style.cardTransactionsContentDate}>11.00 AM</Text>
                </View>
                <Text style={Style.cardTransactionsContentAddress}>
                  Rfdfsdsfhdsjfksjdfskbfgsjvbdfgsdfbhsfsfj
                </Text>
                <Text style={Style.cardTransactionsBalanceReceived}>
                  +3,643.434.00
                </Text>
              </View>
            </View>
          } 
        />
      </View>
    </View>
  );  
}

WalletInfo.propTypes = {
}

export default WalletInfo;