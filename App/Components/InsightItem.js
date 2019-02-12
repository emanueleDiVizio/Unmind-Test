import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/InsightItemStyle'
import MoodFace from './MoodFace';

export default class InsightItem extends Component {
  // // Prop type warnings
  static propTypes = {
    day: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    feelings: PropTypes.array.isRequired,
    comment: PropTypes.string.isRequired,
    mood: PropTypes.number.isRequired
  }
  //
  // // Defaults for props
  static defaultProps = {
    day: "4",
    month: "OCT",
    time: "11:10",
    feelings: ["Anxious", "Angrys"],
    comment: "Feeling good...",
    mood: 4
  }

  render() {
    return (

      <View style={styles.container}>
        <View style={{ backgroundColor: 'white', justifyContent: 'space-around', paddingTop: 16, paddingBottom: 8 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ flex: 1, alignItems: 'center' }}>

              <Text>{this.props.day}</Text>
              <Text>{this.props.month}</Text>
            </View>
            <View style={{ flex: 3 }}>
              <Text >{this.props.time}</Text>

            </View>
            <View style={{ flex: 1, top: -5 }}>
              <MoodFace width={60} height={60} happiness={this.props.mood} />
            </View>

          </View>
          <View style={{ flexDirection: 'row', marginLeft: 8 }}>
            {this.props.feelings.map(feeling => (
              <View style={{ backgroundColor: 'rgb(235,233,235)', paddingTop: 8, paddingBottom: 8, paddingLeft: 8, paddingRight: 8, borderRadius: 5, marginRight: 8 }}>
                <Text> {feeling}</Text>
              </View>
            ))}
          </View>
          <View style={{ marginTop: 16, marginBottom: 16, marginLeft: 8 }}>
            <Text>{this.props.comment}</Text>
          </View>
        </View>
      </View>
    )
  }
}
