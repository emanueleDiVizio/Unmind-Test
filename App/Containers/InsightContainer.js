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
    this.state = {data: [{
      day: "4",
      month: "OCT",
      time: "11:10",
      feelings: ["Anxious", "Angrys"],
      comment: "Feeling good...",
      mood: 2
    }, {
      day: "4",
      month: "OCT",
      time: "11:10",
      feelings: ["Anxious", "Angrys"],
      comment: "Feeling good...",
      mood: 7
    }]}
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
      <View style={{ justifyContent: 'center' , flex: 4}}>
      <View >

      <InsightsHeader avgMood={this._calculateAvg(this.state.data)} entries={this.state.data.length}/>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (<InsightItem insight={item} />)}
        />
      </View>

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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InsightContainer)
