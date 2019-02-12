import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Slider, Button } from 'react-native'
import { Images } from '../Themes'
import Mood from '../Components/Mood'
import FeelingSelector from '../Components/FeelingSelector'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <FeelingSelector/>
          </View>

        </ScrollView>
      </View>
    )
  }
}
