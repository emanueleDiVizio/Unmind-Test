import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Slider, Button } from 'react-native'
import { Images } from '../Themes'
import InsightsHeader from '../Components/InsightsHeader'
import InsightItem from '../Components/InsightItem'


// Styles
import styles from './Styles/LaunchScreenStyles'
import InsightContainer from './InsightContainer';

export default class LaunchScreen extends Component {


  constructor(props) {
    super(props);
    this.state = { text: "" }
  }

  render() {
    return (
      <View style={[styles.mainContainer, { justifyContent: 'center' }]}>
        <InsightContainer/>
      </View>
    )
  }
}
