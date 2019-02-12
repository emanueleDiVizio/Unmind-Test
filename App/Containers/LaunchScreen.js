import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Slider, Button } from 'react-native'
import { Images } from '../Themes'
import CheckInContainer from './CheckInContainer'


// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {text: ""}
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <CheckInContainer/>
      </View>
    )
  }
}
