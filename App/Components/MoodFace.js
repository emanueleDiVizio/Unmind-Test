import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/MoodFaceStyle'
import Svg, {
  Circle,
  Path,
  Rect
} from 'react-native-svg';

let straightFacePath = "M30 70 L70 70";
let sadFacePath = "M30 70 Q 50 60 70 70";
let happyFacePath = "M30 70 Q 50 75 70 70";

export default class MoodFace extends Component {
  // Prop type warnings
  static propTypes = {
    happiness: PropTypes.number,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }

  // Defaults for props
  static defaultProps = {
    happiness: 4,
  }

  render() {
    return (
      <View style={styles.container}>
        <Svg height={this.props.height} width={this.props.width} viewBox="0 0 100 100">
          <Path
            d="M10 20 Q 25 10 40 20"
            fill="none"
            strokeLinecap="round"
            stroke="rgb(223, 223, 223)"
            strokeWidth="5"
          />
          <Path
            d="M60 20 Q 75 10 90 20"
            fill="none"
            strokeLinecap="round"
            stroke="rgb(223, 223, 223)"
            strokeWidth="5"
          />
          <Circle
            cx="25"
            cy="30"
            r="5"
            fill="rgb(4, 194, 181)"
          />
          <Circle
            cx="75"
            cy="30"
            r="5"
            fill="rgb(4, 194, 181)"
          />
          <Rect
            x="45"
            y="40"
            width="10"
            height="10"
            fill="rgb(223, 223, 223)"
          />
          <Path
            d={this.props.happiness < 4 ?  sadFacePath : (this.props.happiness > 4 ? happyFacePath : straightFacePath)}
            fill="none"
            stroke="rgb(4, 194, 181)"
            strokeLinecap="round"
            strokeWidth="5"
          />
        </Svg>
      </View>
    )
  }
}
