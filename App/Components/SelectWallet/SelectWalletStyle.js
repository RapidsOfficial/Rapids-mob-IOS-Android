import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  selectWalletScreen: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    padding: 12
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15
  },
  selectedWallet: {
    height: 95,
    width: width - 25,
    justifyContent: 'center',
    backgroundColor: '#50C0D2',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  cardSmall: {
    height: 95,
    width: width - 25,
    justifyContent: 'center',
    backgroundColor: '#50C0D2',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10
  },
  cardCurrentInfoSmall: {
    marginVertical: 19,
    width: '50%'
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
