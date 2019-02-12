import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/MoodFaceStyle'
import Svg, {
  Circle,
  Path,
  Rect
} from 'react-native-svg';

let straightFacePath = "M30 90 L90 90";
let sadFacePath = "M30 90 Q 60 80 90 90";
let happyFacePath = "M30 90 Q 60 100 90 90";

export default class MoodFace extends Component {
  // Prop type warnings
  static propTypes = {
    isHappy: PropTypes.bool,
    isSad: PropTypes.bool,
  }

  // Defaults for props
  static defaultProps = {
    isHappy: false,
    isSad: false
  }

  render() {
    return (
      <View style={styles.container}>
        <Svg height="100" width="100">
          <Path
            d="M10 20 Q 30 10 50 20"
            fill="none"
            strokeLinecap="round"
            stroke="grey"
            strokeWidth="5"
          />
          <Path
            d="M70 20 Q 90 10 110 20"
            fill="none"
            strokeLinecap="round"
            stroke="grey"
            strokeWidth="5"
          />
          <Circle
            cx="30"
            cy="35"
            r="5"
            fill="turquoise"
          />
          <Circle
            cx="90"
            cy="35"
            r="5"
            fill="turquoise"
          />
          <Rect
            x="55"
            y="50"
            width="10"
            height="10"
            fill="grey"
          />
          <Path
            d={this.props.isSad ? sadFacePath : (this.props.isHappy ? happyFacePath : straightFacePath)}
            fill="none"
            stroke="turquoise"
            strokeLinecap="round"
            strokeWidth="5"
          />
        </Svg>
      </View>
    )
  }
}
