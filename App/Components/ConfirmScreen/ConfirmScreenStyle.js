import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  confirmScreen: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    padding: 12,
    alignItems: 'center'
  },

  confirmScreenImage: {
    height: 50,
    marginVertical: 10
  },

  confirmScreenTitle: {
    fontWeight: '300',
    letterSpacing: 3,
    marginVertical: 10
  },

  confirmScreenValueContainer: {
    borderColor: '#7DCEB9',
    borderWidth: 0.3,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#F7F7F7',
    marginVertical: 15
  },
  confirmScreenValueContainerText: {
    fontWeight: '300',
    letterSpacing: 1,
    fontSize: 14
  },
  confirmScreenTypeText: {
    fontSize: 12,
    letterSpacing: 3,
    fontWeight: '300',
    marginVertical: 20
  },
  confirmScreenAmount: {
    fontWeight: '600',
    fontSize: 18
  },
  confirmScreenTypeFeeText: {
    fontSize: 12,
    fontWeight: '300',
    color: 'black',
    marginVertical: 5,
    letterSpacing: 1
  },
  confirmScreenTypeInfoText: {
    fontSize: 10,
    fontWeight: '300',
    marginBottom: 30,
    letterSpacing: 1
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
    fontWeight: '800',
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
