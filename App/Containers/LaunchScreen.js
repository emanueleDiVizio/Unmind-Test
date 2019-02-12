import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Slider, Button } from 'react-native'


// Styles
import styles from './Styles/LaunchScreenStyles'
import UnmindButton from '../Components/UnmindButton'
import InsightContainer from './InsightContainer';
import CheckInContainer from './CheckInContainer';

export default class LaunchScreen extends Component {


  constructor(props) {
    super(props);
    this.state = { checkIn: false, insights: false }
  }

  _checkIn = () => {
    this.setState({ ...this.state, checkIn: true, insights: false })
  }

  _insight = () => {
    this.setState({ ...this.state, insights: true, checkIn: false })
  }

  _onCheckInDone = (status) => {
    this.setState({ ...this.state, checkIn: false, insights: false })
  }


  render() {
    return (
      <View style={[styles.mainContainer, { justifyContent: 'center' }]}>
         {!this.state.checkIn && !this.state.insights ? <View stle={{
          flex: 1,
          justifyContent: 'center',
          bottom: 50,
          marginLeft: 24,
          marginRight: 24
        }}>
          <Text style={{ color: 'rgb(4, 194, 181)', fontSize: 32, textAlign: 'center', marginBottom: 16 }}>Hello there! {"\n"} How are you doing today?</Text>
        </View>: <View/>}
        {this.state.checkIn ? <CheckInContainer onFinishCallback={this._onCheckInDone}/> : <View />}

        {this.state.insights ? <InsightContainer /> : <View />}

        <View>
          {!this.state.checkIn ? <UnmindButton text="Check In" onPress={this._checkIn} /> : <View/>}
          {!this.state.insights ? <UnmindButton text="Insights" onPress={this._insight} /> : <View/>}
        </View>
      </View>
    )
  }
}
