import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/MoodFaceStyle'
import Svg, {
  Circle,
  Path,
  Rect
} from 'react-native-svg';

let straightFacePath = "M20 85 L80 85";
let sadFacePath = "M20 85 Q 50 78 80 85";
let happyFacePath = "M20 85 Q 50 98 80 85";

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
            d="M0 20 Q 20 10 40 20"
            fill="none"
            strokeLinecap="round"
            stroke="rgb(223, 223, 223)"
            strokeWidth="5"
          />
          <Path
            d="M60 20 Q 80 10 100 20"
            fill="none"
            strokeLinecap="round"
            stroke="rgb(223, 223, 223)"
            strokeWidth="5"
          />
          <Circle
            cx="20"
            cy="35"
            r="5"
            fill="rgb(4, 194, 181)"
          />
          <Circle
            cx="80"
            cy="35"
            r="5"
            fill="rgb(4, 194, 181)"
          />
          <Rect
            x="45"
            y="50"
            width="10"
            height="10"
            fill="rgb(223, 223, 223)"
          />
          <Path
            d={this.props.isSad ? sadFacePath : (this.props.isHappy ? happyFacePath : straightFacePath)}
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
