import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  widgetContainer: {
    flex: 1,
    justifyContent: 'center',
    bottom: 50,
    marginLeft: 24,
    marginRight: 24

  }
})
