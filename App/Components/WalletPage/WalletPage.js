import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Cards } from 'App/Theme';
import Style from './WalletPageStyle';
import { Images } from 'App/Theme'
import axios from 'axios';
/**
 * This is an Wallet Home Component.
 *
 */

const currencyConvertor = async (amount, currency) => {
  return await axios.get(`https://coinlib.io/api/v1/coin?key=b93778ec3e9bda65&pref=${currency}&symbol=RPD`)
  .then(response => {
    if(response.data && response.data.price) {
      return response.data.price * amount;
    }
  })
  .catch(error => {
    return 0;
  });
};

const WalletPage = ({ wallets, selectedWallet }) => {
  const [ totalBTC, setTotalBTC ] = useState(0);
  const [ totalUSD, setTotalUSD ] = useState(0);
  const [ selectedBTC, setSelectedBTC ] = useState(0);
  const [ selectedUSD, setSelectedUSD ] = useState(0);

  let totalBalance = 0;
  
  useEffect(() => {    
    fetchConvertedCurrency();
  }, [wallets]);
    
  wallets.forEach(wallet => {
    if(wallet.balance && wallet.balance.balance) {
      totalBalance = totalBalance + wallet.balance.balance;
    }
  });

  const fetchConvertedCurrency = async () => {
    let totalBTCValue = await currencyConvertor(totalBalance, 'BTC');
    let totalUSDValue = await currencyConvertor(totalBalance, 'USD');
    let selectedBTCValue = await currencyConvertor(selectedWallet.balance && selectedWallet.balance.balance? selectedWallet.balance.balance: 0, 'BTC');
    let selectedUSDValue = await currencyConvertor(selectedWallet.balance && selectedWallet.balance.balance? selectedWallet.balance.balance: 0, 'USD');
    
    setTotalBTC(totalBTCValue);
    setTotalUSD(totalUSDValue);
    setSelectedBTC(selectedBTCValue);
    setSelectedUSD(selectedUSDValue);
  }

  return (
    <View style={Style.walletPageScreen}>
      
      <View style={Style.headerInfo}>
        <View style={Style.totalBalance}>
          <Text style={Style.totalBalanceText}>{totalBalance}</Text>
          <Text style={Style.totalBalanceInfo}>Total Portfolio</Text>
        </View>
        <View>
          <Text style={Style.totalBalanceBTC}>${totalBTC}</Text>
        </View>
        <View>
          <Text style={Style.totalBalanceCurrency}>${totalUSD}</Text>
        </View>
      </View>

      <View>
        <Cards 
          style={Style.cardMain}
          content={
            <View style={Style.cardContent}>
              <View style={Style.cardCurrentInfo}>
                <Text style={Style.cardCurrentInfoHeading}>{selectedWallet.walletName.split('-').pop()}</Text>
                <View style={Style.cardCurrentInfoBalance}>
                  <Image style={Style.cardCurrentInfoBalanceImage} source={Images.newRapidLogoSmall} resizeMode={'contain'}/>
                  <Text style={Style.cardCurrentInfoBalanceValue}>{`${selectedWallet.balance && selectedWallet.balance.balance ? selectedWallet.balance.balance : 0}`}</Text>
                </View>
                <View style={Style.cardCurrentInfoCurrency}>
                  <Text style={Style.cardCurrentInfoCurrencyValue}>{selectedUSD}</Text>
                  <Text style={Style.cardCurrentInfoCurrencyCode}>USD</Text>
                </View>
                <View style={Style.cardCurrentInfoCurrency}>
                  <Text style={Style.cardCurrentInfoCurrencyValue}>{selectedBTC}</Text>
                  <Text tyle={Style.cardCurrentInfoCurrencyCode}>BTC</Text>
                </View>
              </View>
              <View style={Style.cardRecentInfo}>
                <Text style={Style.cardRecentHead}>Recent</Text>
              </View>
             
            </View>
          } 
        />
        
        <View style={Style.stackView}>
          {wallets.filter(wallet => wallet.walletId !== selectedWallet.walletId).map((wallet, index) => (
            <Cards 
              style={Style[`cardSmall${index}`]}
              content={
                <View style={Style.cardContent}>
                  <View style={Style.cardCurrentInfoSmall}>
                    <Text style={Style.cardCurrentInfoHeading}>{wallet.walletName}</Text>
                  </View>
                  <View style={Style.cardRecentInfoSmall}>
                    <View style={Style.cardCurrentInfoBalanceSmall}>
                      <Image style={Style.cardCurrentInfoBalanceImageSmall} source={Images.newRapidLogoSmall} resizeMode={'contain'}/>
                      <Text style={Style.cardCurrentInfoBalanceValueSmall}>{`${wallet.balance && wallet.balance.balance ? wallet.balance.balance : 0}`}</Text>
                    </View>
                    <View style={Style.cardCurrentInfoCurrencySmall}>
                      <Text style={Style.cardCurrentInfoCurrencyValueSmall}>$12.343</Text>
                      <Text style={Style.cardCurrentInfoCurrencyCodeSmall}>USD</Text>
                    </View>
                  </View>
                </View>
              } 
            />
          ))}
      
        </View>

      </View>
     
    </View>
  );
}

WalletPage.propTypes = {
}

export default WalletPage;