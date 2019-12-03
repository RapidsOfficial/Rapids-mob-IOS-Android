import { StyleSheet, Dimensions } from 'react-native';
import ApplicationStyles from 'App/Theme/ApplicationStyles'

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  paymentCompletedContainer: {
    ...ApplicationStyles.screen.container,
    paddingVertical: 30,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#316368',
    alignItems: 'center'
  },

  walletNavIcon: {
    top: 0,
    padding: 20,
    width: '20%'
  },
  walletNavigator: {
    flex: 0.1,
    flexDirection: 'row',
    width: '100%'
  },
  logoText: {
    color: '#68E38C',
    fontSize: 20,
    width: '65%',
    textAlign: 'center',
    marginVertical: 20
  },
  
  
  paymentCompleted: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
  },
  paymentCompletedContent: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    padding: 12,
    alignItems: 'center'
  },

  
  paymentCompletedImage: {
    height: 50,
    marginVertical: 10
  },

  paymentCompletedTitle: {
    fontWeight: '300',
    letterSpacing: 3,
    marginVertical: 10
  },

  paymentCompletedInfoConatiner: {
    margin: 10,
    textAlign: 'left',
    width: '90%'
  },
  paymentCompletedInfoHeading: {
    fontWeight: '600',
    fontSize: 14
  },
  paymentCompletedInfoText: {
    fontWeight: '300',
    fontSize: 14,
    letterSpacing: 1.5
  },

  paymentCompletedInfoConatinerTwo: {
    margin: 10,
    marginBottom: 20,
    textAlign: 'left',
    width: '90%',
    flexDirection: 'row'
  },
  paymentCompletedInfoLink: {
    fontWeight: '600',
    fontSize: 14,
    color: '#51B14E'
  },

  
  confirmButton: {
    height: 50,
    width:  '100%',
    justifyContent: 'center',
    backgroundColor: '#51B14E',
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 10,
    borderColor: '#51B14E',
    borderWidth: 1
  },
  confirmButtonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    letterSpacing: 1,
  },
  cancelButton: {
    height: 50,
    width:  '100%',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 10,
    borderColor: '#51B14E',
    borderWidth: 1
  },
  cancelButtonText: {
    textAlign: 'center',
    color: '#51B14E',
    fontWeight: '800',
    fontSize: 14,
    letterSpacing: 1,
  }
})
