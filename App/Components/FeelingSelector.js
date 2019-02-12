import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, FlatList, Button } from 'react-native'
import styles from './Styles/FeelingSelectorStyle'
import FeelingItem from './FeelingItem'
import UnmindButton from './UnmindButton'

const addOrRemove = (arr, item) => arr.includes(item) ? arr.filter(i => i !== item) : [ ...arr, item ];


export default class FeelingSelector extends Component {
  // // Prop type warnings
  static propTypes = {
    feelings: PropTypes.array,
    onFinishCallback: PropTypes.func
  }

  // Defaults for props
  static defaultProps = {
    feelings: ["Depressed", "Optimistic",
      "Bored", "Happy"],
      onFinishCallback: (feelings) => {}

  }

  constructor(props) {
    super(props);
    this.state = {selectedItems: []}
  }


  _onItemToggled = (item) => {
    this.setState({selectedItems: addOrRemove(this.state.selectedItems, item)})
  }

  _onFinish =() => {
    this.props.onFinishCallback(this.state.selectedItems)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ItemSeparatorComponent={({ highlighted }) => (
            <View style={{ height: 1.5, color: 'rgb(234, 234, 234)' }} />
          )}
          data={this.props.feelings}
          renderItem={({ item }) => <FeelingItem text={item} onToggleSelection={this._onItemToggled} />}
        />
        <UnmindButton styles={{top: 8}} text="Next" onPress={this._onFinish} />
      </View>
    )
  }
}


