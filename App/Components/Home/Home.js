import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import { Cards } from 'App/Theme';
import Style from './HomeStyle';
import { Images } from 'App/Theme'
import axios from 'axios';
/**
 * This is an Wallet Home Component.
 *
 */

function selectColor(colorNum, colors){
  if (colors < 1) colors = 1; // defaults to one color - avoid divide by zero
  return "hsl(" + (colorNum * (360 / colors) % 360) + ",100%,50%)";
}

function adjust(color, amount) {
  return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

const cardCommonStyle ={
  height: 95,
  width: width - 25,
  justifyContent: 'center',
  borderRadius: 10,
  marginTop: 10,
  marginBottom: -25
};

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

const Home = ({ wallets, selectedWallet, selectWallet, setScreen }) => {
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
    
    setTotalBTC(Number(totalBTCValue).toFixed(2));
    setTotalUSD(Number(totalUSDValue).toFixed(2));
    setSelectedBTC(Number(selectedBTCValue).toFixed(2));
    setSelectedUSD(Number(selectedUSDValue).toFixed(2));
  }

  const getUSD = async (balance) => {
    return await currencyConvertor(balance, 'USD');
  }

  const renderCards = (wallets) => {    
    return (
      wallets.filter(wallet => wallet.walletId !== selectedWallet.walletId).map((wallet, index) => (
        <Cards 
          key={index+1}
          cardKey={wallet.id}
          style={
            Style[`cardSmall${index+1}`]
            // {
            //   ...cardCommonStyle,
            //   backgroundColor: `${selectColor(Math.floor(Math.random() * 999), 10)}`
            // }
          }
          cardAction={() => selectWallet(wallet)}
          content={
            <View style={Style.cardContent}>
              <View style={Style.cardCurrentInfoSmall}>
                <Text style={Style.cardCurrentInfoHeading}>{wallet.walletId ? wallet.walletId.split('-').pop(): ''}</Text>
              </View>
              <View style={Style.cardRecentInfoSmall}>
                <View style={Style.cardCurrentInfoBalanceSmall}>
                  <Image style={Style.cardCurrentInfoBalanceImageSmall} source={Images.newRapidLogoSmall} resizeMode={'contain'}/>
                  <Text style={Style.cardCurrentInfoBalanceValueSmall}>{`${wallet.balance && wallet.balance.balance ? Number(wallet.balance.balance).toFixed(2) : 0}`}</Text>
                </View>
                <View style={Style.cardCurrentInfoCurrencySmall}>
                  {/* {console.log(await getUSD(wallet.balance && wallet.balance.balance ? wallet.balance.balance.toFixed(2) : 0))} */}
                  <Text style={Style.cardCurrentInfoCurrencyValueSmall}>${0}</Text>
                  <Text style={Style.cardCurrentInfoCurrencyCodeSmall}>USD</Text>
                </View>
              </View>
            </View>
          } 
        />
      ))
    )
  }
console.log(wallets);

  return (
    <View style={Style.homeScreen}>
      
      <View style={Style.headerInfo}>
        <View style={Style.totalBalance}>
          <Text style={Style.totalBalanceText}>{Number(totalBalance).toFixed(2)}</Text>
          <Text style={Style.totalBalanceInfo}>Total Portfolio</Text>
        </View>
        <View>
          <Text style={Style.totalBalanceBTC}>₿{totalBTC}</Text>
        </View>
        <View>
          <Text style={Style.totalBalanceCurrency}>${totalUSD}</Text>
        </View>
      </View>

      <View>
        <Cards 
          style={Style.cardMain}
          key={0}
          cardAction={() => setScreen('AllTransactions', 'Dashboard')}
          content={
            <View style={Style.cardContent}>
              <View style={Style.cardCurrentInfo}>
                <Text style={Style.cardCurrentInfoHeading}>{selectedWallet.walletId? selectedWallet.walletId.split('-').pop(): ''}</Text>
                <View style={Style.cardCurrentInfoBalance}>
                  <Image style={Style.cardCurrentInfoBalanceImage} source={Images.newRapidLogoSmall} resizeMode={'contain'}/>
                  <Text style={Style.cardCurrentInfoBalanceValue}>{`${selectedWallet.balance && selectedWallet.balance.balance ? Number(selectedWallet.balance.balance).toFixed(2) : 0}`}</Text>
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
          {renderCards(wallets)}
        </View>

      </View>
     
    </View>
  );
}

Home.propTypes = {
}

export default Home;