import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/FeelingItemStyle'

export default class FeelingItem extends Component {
  // Prop type warnings
  static propTypes = {
    text: PropTypes.string,
    onToggleSelection: PropTypes.func,
  }
  
  
  // Defaults for props
  static defaultProps = {
    text: "",
    onToggleSelection: (selected) => {}
  }

  constructor(props) {
    super(props);
    this.state = {selected: false}
  }

  _onPressButton = () => {
    this.props.onToggleSelection(this.props.text)
    this.setState({selected: !this.state.selected} )
  }

  render () {
    return (
      <View style={[styles.container, {backgroundColor: this.state.selected ? "rgb(4, 194, 181)" : "white"}]}>
          <TouchableOpacity onPress={this._onPressButton} underlayColor="blue">
        <Text style={[styles.text, this.state.selected ? {color: 'white'} : {}]}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
