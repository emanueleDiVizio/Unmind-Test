import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, FlatList, Button } from 'react-native'
import styles from './Styles/FeelingSelectorStyle'
import FeelingItem from './FeelingItem'

const addOrRemove = (arr, item) => arr.includes(item) ? arr.filter(i => i !== item) : [ ...arr, item ];


export default class FeelingSelector extends Component {
  // // Prop type warnings
  static propTypes = {
    feelings: PropTypes.array
  }

  // Defaults for props
  static defaultProps = {
    feelings: ["Depressed", "Optimistic",
      "Bored", "Happy"]
  }

  constructor(props) {
    super(props);
    this.state = {selectedItems: []}
  }


  _onItemToggled = (item) => {
    this.setState({selectedItems: addOrRemove(this.state.selectedItems, item)})
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ItemSeparatorComponent={({ highlighted }) => (
            <View style={{ height: 0.3, color: 'grey' }} />
          )}
          data={this.props.feelings}
          renderItem={({ item }) => <FeelingItem text={item} onToggleSelection={this._onItemToggled} />}
        />
        <Button title="NEXT" />
      </View>
    )
  }
}


