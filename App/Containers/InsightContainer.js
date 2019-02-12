import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'

import InsightsHeader from '../Components/InsightsHeader'
import InsightItem from '../Components/InsightItem'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/InsightContainerStyle'

class InsightContainer extends Component {
  constructor (props) {
    super(props)
  }

  _calculateAvg = (arr) => {
    var count = 0;
    arr.forEach(element => {
      count = count + element.mood
    })
    return (count / arr.length)
  }

  render() {
    return (
      <View style={{  flex: 4}}>
      <View style={{marginTop: 64}} >
      <InsightsHeader avgMood={this._calculateAvg(this.props.data)} entries={this.props.data.length}/>
      </View>
      <View>
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => (<InsightItem insight={item} />)}
        />
      </View>

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.mood.moodHistory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InsightContainer)
