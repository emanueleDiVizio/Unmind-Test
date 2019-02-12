import React, { Component } from 'react'
import { View, Slider, Button } from 'react-native'
import styles from './Styles/MoodStyle'
import MoodFace from './MoodFace'

export default class Mood extends Component {

  constructor(props) {
    super(props);
    this.state = {happiness: 4}
  }

  onValueChange = (value) => {
    this.setState({happiness: value})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ left: 90 }}>
          <MoodFace isHappy={this.state.happiness > 4} isSad={this.state.happiness < 4} />
        </View>
        <Slider maximumTrackTintColor="grey" minimumTrackTintColor="grey" onValueChange={this.onValueChange}
          value={4}
          step={1}
          minimumValue={1} maximumValue={7} />
        <Button title="NEXT" />
      </View>
    )
  }
}
