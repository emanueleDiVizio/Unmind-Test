import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';


import Mood from '../Components/Mood'
import Comment from '../Components/Comment'
import FeelingSelector from '../Components/FeelingSelector'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import Actions from '../Redux/MoodStoreRedux'

// Styles
import styles from './Styles/CheckInContainerStyle'

class CheckInContainer extends Component {

  // // Prop type warnings
  static propTypes = {
    onFinishCallback: PropTypes.func,
 }
 //
 // // Defaults for props
 static defaultProps = {
   onFinishCallback: (result) => {}
}


  constructor(props){
    super(props)
    this.state = {mood: {completed: false, value: 0, show: true}, feeling: {completed: false, value: [], show: false}, comment: {completed: false, value: "", show: false} }
  }

  _onMoodFinish = (happiness) => {
    this.setState({...this.state, mood: {completed: true, value: happiness, show: false}, feeling: {...this.state.feeling, show: true}})
  }

  _onFeelingFinish = (feeling) => {
    this.setState({...this.state, feeling: {completed: true, value: feeling, show: false}, comment: {...this.state.comment, show: true}})
  }

  _onCommentFinish = (comment) => {

    var newState = {...this.state, comment: {completed: true, value: comment, show: false}};
    this.setState(newState)

      this.props.onFinishCallback(newState)
      this.props.onFinish(newState)

  }

  render () {
    return (

      <View style={styles.widgetContainer}>
      { this.state.mood.show && 
        <Mood onFinishCallback={this._onMoodFinish}/>
      }
      { this.state.feeling.show && 
        <FeelingSelector onFinishCallback={this._onFeelingFinish}/>
      }
      { this.state.comment.show && 
        <Comment onFinishCallback={this._onCommentFinish}/>
      }
      </View>
      
      )
    }
  }
  
  const mapStateToProps = (state) => {
    return {
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onFinish: (data) => dispatch(Actions.checkIn(data))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CheckInContainer)
  