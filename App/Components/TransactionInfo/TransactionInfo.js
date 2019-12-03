import React from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Style from './TransactionInfoStyle';
import { Buttons, Cards } from 'App/Theme';
import { Images } from 'App/Theme'

// import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * This is an Wallet Login component.
 *
 */

const TransactionInfo = ({ setScreen, navigation }) => {
  console.log(navigation);
  
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
        <View style={Style.containerHeadingConfirmationCount}>
          <Text style={Style.containerHeadingConfirmationCountText}>10 of 10 Confirmations</Text>
        </View>
        <View style={Style.containerHeadingDate}>
          <Text style={Style.containerHeadingDateText}>26 Jan 2019</Text>
          <Text style={Style.containerHeadingDateTime}>11.30 AM</Text>
        </View>
      </View>
      <View style={Style.containerTransactionsInfo}>
        <View style={Style.containerTransactionsConfirmation}>
          <Text style={Style.containerTransactionsConfirmationCountNumber}>746</Text>
          <Text style={Style.containerTransactionsConfirmationCountText}>CONFIRMATIONS</Text>
        </View>
        <View style={Style.containerTransactionsInfoText}>
          <Text style={Style.containerTransactionsInfoTextSend}>Send</Text>
          <Icon style={Style.containerTransactionsInfoIcon} name="arrow-forward" size={20} color="white" />
          <Text style={Style.containerTransactionsInfoReceive}>Received</Text>
        </View>
        <View style={Style.containerTransactionsInfoLine}>
          <View style={Style.containerTransactionsInfoLine1}></View>
          <View style={Style.containerTransactionsInfoLine2}></View>
        </View>
        <View style={Style.containerTransactionsInfoContent}>
          <View style={Style.containerTransactionsInfoContentForiegn}>
            <Text style={Style.containerTransactionsInfoContentForiegnName}>FORIEGN ADDRESS</Text>
            <Text numberOfLines={2} style={Style.containerTransactionsInfoContentForiegnAddress}>sdfsdfsdfssdasdasdsdfsdfsdfsdfsdfs</Text>
          </View>
          <View style={Style.containerTransactionsInfoContentWallet}>
            <Text style={Style.containerTransactionsInfoContentWalletName}>MOBILE WALLET</Text>
            <Text style={Style.containerTransactionsInfoContentWalletAddress}>3sfsdfsdfsdasdasdasdasdwrsfsdfsdSDFsdfs</Text>
          </View>
        </View>
        <View style={Style.containerTransactionsInfoTransaction}>
          <Text style={Style.containerTransactionsInfoTransactionText}>Transaction ID</Text>
          <Text style={Style.containerTransactionsInfoTransactionID}>sdfdskhh34g5hg45jh3g45hj34gj5h3</Text>
        </View>
        <View style={Style.containerTransactionsInfoTransactionCopy}>
          <Buttons 
            containerStyle={Style.containerTransactionsInfoTransactionCopyButton} 
            textStyle={Style.containerTransactionsInfoTransactionCopyButtonText}
            text="Copy" 
          />
        </View>
        <View style={Style.containerTransactionsInfoOptions}>
          <Buttons 
            containerStyle={Style.containerTransactionsInfoOptionsButtonView} 
            textStyle={Style.containerTransactionsInfoOptionsButtonText}
            text="VIEW ON RAPIDS EXPLORER" 
          />

          <Buttons 
            containerStyle={Style.containerTransactionsInfoOptionsButtonClose} 
            textStyle={Style.containerTransactionsInfoOptionsButtonCloseText}
            onPress={() => setScreen("AllTransactions", "Dashboard")}
            text="CLOSE" 
          />
        </View>
      </View>
    </View>
  );  
}

TransactionInfo.propTypes = {
}

export default TransactionInfo;