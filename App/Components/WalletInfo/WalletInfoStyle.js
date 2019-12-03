import { StyleSheet, Dimensions } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    paddingVertical: 5,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1B1E26'
  },
  loading: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
  },
  containerHeader: {
    height: 100,
    width: '100%',
    alignItems: 'center'
  },
  containerHeadingInfo: {
    marginVertical: 5,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  containerHeadingPrice: {
    color: '#72F586',
    fontSize: 26,
    paddingHorizontal: 5
  },
  containerHeadingCurrency: {
    color: '#72F586',
    fontSize: 14,
    paddingVertical: 8
  },
  containerHeadingConversions: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    
  },
  containerHeadingConvertionBitcoin: {
    color: 'white',
    paddingHorizontal: 15
  },
  containerHeadingConversionUSD: {
    paddingHorizontal: 10
  },
  containerHeadingConversionsUSDPriceInfo: {
    // justifyContent: 'space-between',
    flexDirection: 'row'
  },
  containerHeadingConversionsUSDPriceInfoPrice: {
    color: 'white',
    paddingRight: 5
  },
  containerHeadingConversionsUSDPriceInfoCurrency: {
    color: 'white'
  },
  containerHeadingConversionsCapo: {
    color: 'lightgray',
    fontSize: 12
  },

  containerTransactions: {
    alignItems: 'center'
  },
  cardTransaction: {
    height: 120,
    width: width - 25,
    justifyContent: 'center',
    borderColor: '#606060',
    borderWidth: 1,
    borderRadius: 10
  },
  cardTransactionsContentContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginHorizontal: 15
  },
  transactionBlockImage: {
    height: '65%',
    marginLeft: -5,
    width: '15%'
  },
  cardTransactionsContent: {
    flexDirection: 'column',
    marginHorizontal: 10,
    width: '85%'
    // justifyContent: 'space-between'
  },
  cardTransactionsContentTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardTransactionsContentType: {
    fontSize: 18,
    color: 'white',
    letterSpacing: 1
  },
  cardTransactionsContentDate: {
    color: 'white',
    fontSize: 12
  },
  cardTransactionsContentAddress: {
    color: 'white',
    fontSize: 12,
    marginVertical: 10,
    letterSpacing: 1
  },
  cardTransactionsBalanceSend: {
    color: '#388264',
    fontSize: 18
  },
  cardTransactionsBalanceReceived: {
    color: '#388264',
    fontSize: 18
  },
})
