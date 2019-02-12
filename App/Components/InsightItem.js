import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Animated } from 'react-native'
import styles from './Styles/InsightItemStyle'
import MoodFace from './MoodFace';
import Icon from 'react-native-vector-icons/MaterialIcons';

const topIcon = onPress => (<Icon name="keyboard-arrow-up" size={30} color="rgb(203,202,203)" onPress={onPress}  />)
const downIcon = onPress =>  (<Icon name="keyboard-arrow-down" size={30} color="rgb(203,202,203)" onPress={onPress} />)


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

  constructor(props){
    super(props)
    this.state = {expanded: false, animation   : new Animated.Value()    }
  }

  _onIconPress = () => {
    let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
        finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

    this.setState({
        expanded : !this.state.expanded  
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(     
        this.state.animation,
        {
            toValue: finalValue
        }
    ).start();
  }

  _setMaxHeight = (event) => {
    this.setState({
        maxHeight   : event.nativeEvent.layout.height
    });
}

_setMinHeight = (event) => {
    this.setState({
        minHeight   : event.nativeEvent.layout.height
    });
}

  render() {
    return (
      <Animated.View style={[styles.container, {height: this.state.animation}]}>
        <View style={{ backgroundColor: 'white', justifyContent: 'space-around' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 16 }}  onLayout={this._setMinHeight}>
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

            {this.state.expanded ? topIcon(this._onIconPress) : downIcon(this._onIconPress)}

          </View>
          {this.state.expanded ? (<View  onLayout={this._setMaxHeight}>
            
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
          </View>) : (<View/>) }
        </View>
      </Animated.View>
    )
  }
}
