import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const cardCommonStyle ={
  height: 95,
  width: width - 25,
  justifyContent: 'center',
  borderRadius: 10,
  marginTop: 10,
  marginBottom: -25
};

export default StyleSheet.create({
  homeScreen: {
    flex: 1,
    alignItems: 'center'
  },
  headerInfo: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    width: '100%'
  },
  totalBalance: {
    alignItems: 'center'
  },
  totalBalanceText: {
    fontSize: 30,
    color: '#72F586'
  },
  totalBalanceInfo: {
    fontSize: 14,
    color: '#72F586'
  },
  totalBalanceBTC: {
    paddingTop: 15,
    fontSize: 18,
    color: 'white'
  },
  totalBalanceCurrency: {
    paddingTop: 15,
    fontSize: 18,
    color: 'white'
  },

  cardMain: {
    height: 180,
    width: width - 25,
    justifyContent: 'center',
    backgroundColor: '#50C0D2',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10
  },

  cardContent: {
    // padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15
  },
  cardCurrentInfo: {
    // justifyContent: 'space-between',
    flexDirection: 'column'
  },
  cardCurrentInfoHeading: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    letterSpacing: 1.5
  },

  cardCurrentInfoBalance: {
    flexDirection: 'row',
    paddingVertical: 10
  },
  cardCurrentInfoBalanceImage: {
    width: '30%',
    height: 25,
    marginVertical: 9
  },
  cardCurrentInfoBalanceValue: {
    fontSize: 36,
    color: 'white'
  },
  cardCurrentInfoCurrency: {
    flexDirection: 'row',
    paddingVertical: 5
  },
  cardCurrentInfoCurrencyValue: {
    fontSize: 16,
    color: 'white',
    paddingRight: 5
  },
  cardCurrentInfoCurrencyCode: {
    color: 'black',
    fontSize: 16
  },

  cardRecentInfo: {
    marginVertical: 15
  },
  cardRecentHead: {
    letterSpacing: 3,
    fontSize: 16
  },

  stackView: {

  },
  
  cardSmall1: {
    ...cardCommonStyle,
    backgroundColor: '#1F4F30'
  },
  cardSmall2: {
    ...cardCommonStyle,
    backgroundColor: '#4DAA60'
  },
  cardSmall3: {
    ...cardCommonStyle,
    backgroundColor: '#52C1C9'
  },
  cardSmall4: {
    ...cardCommonStyle,
    backgroundColor: '#439970'
  },
  cardSmall5: {
    ...cardCommonStyle,
    backgroundColor: '#5FCC42'
  },
  cardSmall6: {
    ...cardCommonStyle,
    backgroundColor: '#F1843B'
  },
  cardSmall7: {
    ...cardCommonStyle,
    backgroundColor: '#B344CA'
  },
  cardSmall8: {
    ...cardCommonStyle,
    backgroundColor: '#80DBFA'
  },

  cardCurrentInfoSmall: {
    marginVertical: 19
  },


  cardRecentInfoSmall: {
    marginVertical: 10,
    alignItems: 'flex-end'
  },
  cardCurrentInfoBalanceSmall: {
    flexDirection: 'row'
  },
  cardCurrentInfoBalanceImageSmall: {
    width: '30%',
    height: 18,
    marginVertical: 3
  },
  cardCurrentInfoBalanceValueSmall: {
    fontSize: 20,
    color: 'white'
  },
  cardCurrentInfoCurrencySmall: {
    flexDirection: 'row'
  },
  cardCurrentInfoCurrencyValueSmall: {
    fontSize: 12,
    color: 'white',
    paddingRight: 5
  },
  cardCurrentInfoCurrencyCodeSmall: {
    color: 'black',
    fontSize: 12
  }

})
