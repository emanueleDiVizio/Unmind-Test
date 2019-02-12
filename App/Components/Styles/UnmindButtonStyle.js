import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  button: {
    marginVertical: 5,
    backgroundColor: Colors.snow,
    borderRadius: 4
  },
  buttonText: {
    margin: 16,
    textAlign: 'center',
    color: 'grey',
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold
  }
})
