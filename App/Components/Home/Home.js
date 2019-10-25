import React from 'react';
import { View, Text, Image } from 'react-native';
import { Cards } from 'App/Theme';
import Style from './HomeStyle';
import { Images } from 'App/Theme'

/**
 * This is an Wallet Home Component.
 *
 */

const Home = ({ balance }) => {
  return (
    <View style={Style.homeScreen}>
      
      <View style={Style.headerInfo}>
        <View style={Style.totalBalance}>
          <Text style={Style.totalBalanceText}>71.0M</Text>
          <Text style={Style.totalBalanceInfo}>Total Portfolio</Text>
        </View>
        <View>
          <Text style={Style.totalBalanceBTC}>$ 1.2342342342</Text>
        </View>
        <View>
          <Text style={Style.totalBalanceCurrency}>$45.59k</Text>
        </View>
      </View>

      <View>
        <Cards 
          style={Style.cardMain}
          content={
            <View style={Style.cardContent}>
              <View style={Style.cardCurrentInfo}>
                <Text style={Style.cardCurrentInfoHeading}>Mobile Wallet</Text>
                <View style={Style.cardCurrentInfoBalance}>
                  <Image style={Style.cardCurrentInfoBalanceImage} source={Images.newRapidLogoSmall} resizeMode={'contain'}/>
                  <Text style={Style.cardCurrentInfoBalanceValue}>{`${balance}`}</Text>
                </View>
                <View style={Style.cardCurrentInfoCurrency}>
                  <Text style={Style.cardCurrentInfoCurrencyValue}>$12.343</Text>
                  <Text style={Style.cardCurrentInfoCurrencyCode}>USD</Text>
                </View>
                <View style={Style.cardCurrentInfoCurrency}>
                  <Text style={Style.cardCurrentInfoCurrencyValue}>123</Text>
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
          <Cards 
            style={Style.cardSmall1}
            content={
              <View style={Style.cardContent}>
                <View style={Style.cardCurrentInfoSmall}>
                  <Text style={Style.cardCurrentInfoHeading}>Mobile Wallet 2</Text>
                </View>
                <View style={Style.cardRecentInfoSmall}>
                  <View style={Style.cardCurrentInfoBalanceSmall}>
                    <Image style={Style.cardCurrentInfoBalanceImageSmall} source={Images.newRapidLogoSmall} resizeMode={'contain'}/>
                    <Text style={Style.cardCurrentInfoBalanceValueSmall}>{`${balance}`}</Text>
                  </View>
                  <View style={Style.cardCurrentInfoCurrencySmall}>
                    <Text style={Style.cardCurrentInfoCurrencyValueSmall}>$12.343</Text>
                    <Text style={Style.cardCurrentInfoCurrencyCodeSmall}>USD</Text>
                  </View>
                </View>
              </View>
            } 
          />
          <Cards 
            style={Style.cardSmall2}
            content={
              <View style={Style.cardContent}>
                <View style={Style.cardCurrentInfoSmall}>
                  <Text style={Style.cardCurrentInfoHeading}>Mobile Wallet 3</Text>
                </View>
                <View style={Style.cardRecentInfoSmall}>
                  <View style={Style.cardCurrentInfoBalanceSmall}>
                    <Image style={Style.cardCurrentInfoBalanceImageSmall} source={Images.newRapidLogoSmall} resizeMode={'contain'}/>
                    <Text style={Style.cardCurrentInfoBalanceValueSmall}>{`${balance}`}</Text>
                  </View>
                  <View style={Style.cardCurrentInfoCurrencySmall}>
                    <Text style={Style.cardCurrentInfoCurrencyValueSmall}>$12.343</Text>
                    <Text style={Style.cardCurrentInfoCurrencyCodeSmall}>USD</Text>
                  </View>
                </View>
              </View>
            } 
          />
          <Cards 
            style={Style.cardSmall3}
            content={
              <View style={Style.cardContent}>
                <View style={Style.cardCurrentInfoSmall}>
                  <Text style={Style.cardCurrentInfoHeading}>Mobile Wallet 4</Text>
                </View>
                <View style={Style.cardRecentInfoSmall}>
                  <View style={Style.cardCurrentInfoBalanceSmall}>
                    <Image style={Style.cardCurrentInfoBalanceImageSmall} source={Images.newRapidLogoSmall} resizeMode={'contain'}/>
                    <Text style={Style.cardCurrentInfoBalanceValueSmall}>{`${balance}`}</Text>
                  </View>
                  <View style={Style.cardCurrentInfoCurrencySmall}>
                    <Text style={Style.cardCurrentInfoCurrencyValueSmall}>$12.343</Text>
                    <Text style={Style.cardCurrentInfoCurrencyCodeSmall}>USD</Text>
                  </View>
                </View>
              </View>
            } 
          />
        </View>
        
      </View>
     
    </View>
  );
}

Home.propTypes = {
}

export default Home;