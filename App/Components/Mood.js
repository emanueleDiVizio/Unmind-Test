import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Slider } from 'react-native'
import styles from './Styles/MoodStyle'
import MoodFace from './MoodFace'
import UnmindButton from './UnmindButton'

export default class Mood extends Component {

  // // Prop type warnings
  static propTypes = {
    onFinishCallback: PropTypes.func,
 }
 //
 // // Defaults for props
 static defaultProps = {
   onFinishCallback: (happiness) => {}
}



  constructor(props) {
    super(props);
    this.state = { happiness: 4 }
  }

  onValueChange = (value) => {
    this.setState({ happiness: value })
  }

  _onPress = () => {
    this.props.onFinishCallback(this.state.happiness)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mood}>
          <MoodFace happiness={this.state.happiness} width={200} height={200} />
        </View>
        <View style={styles.slider}>
          <Slider maximumTrackTintColor="rgb(187,187,187)" minimumTrackTintColor="rgb(187,187,187)" onValueChange={this.onValueChange}
            value={4}
            step={1}
            minimumValue={1} maximumValue={7} />
        </View>

          <UnmindButton  styles={styles.button} text="Next" onPress={this._onPress} />

      </View>
    )
  }
}
