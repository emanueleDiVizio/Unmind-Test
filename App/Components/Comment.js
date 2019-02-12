import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TextInput, Button } from 'react-native'
import styles from './Styles/CommentStyle'
import UnmindButton from './UnmindButton'

export default class Comment extends Component {
  // // Prop type warnings
  static propTypes = {
     onFinishCallback: PropTypes.func,
  }
  //
  // // Defaults for props
  static defaultProps = {
    onFinishCallback: (text) => {}
 }

  constructor(props) {
    super(props);
    this.state = {text: ""}
  }

  _onFinish = () => {
    this.props.onFinishCallback(this.state.text)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          multiline={true}
          style={styles.input}
          placeholder="Type your optional note here..."
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <UnmindButton styles={{top: 8}} text="Finish" onPress={this._onFinish}/>
      </View>
    )
  }
}
