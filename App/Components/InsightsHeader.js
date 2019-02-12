import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import { PieChart } from 'react-native-svg-charts'
import MoodFace from './MoodFace'

import styles from './Styles/InsightsHeaderStyle'

export default class InsightsHeader extends Component {
  // // Prop type warnings
  static propTypes = {
    percent: PropTypes.number,
    entries: PropTypes.number
  }
  //
  // Defaults for props
  static defaultProps = {
    percent: 60,
    entries: 0
  }

  render() {
      const data = [{
        key: 1,
        value: 100 - this.props.percent,
        svg: { fill: 'rgb(118,116,118)' },
        arc: { outerRadius: '90%'  }
    },
    {
        key: 2,
        value: this.props.percent,
        svg: { fill: 'rgb(4, 194, 181)' },
        arc: { outerRadius: '100%'  }

    }]

    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: 'white',  flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 24, paddingBottom: 24}}>
        <View style={{flex: 1, marginLeft: 24}}> 
        <PieChart
            style={{ height: 150}}
            data={data}
            innerRadius="70%"
          >
            <View style={{ justifyContent: 'center', alignItems: 'center', top: 5 }}>
              <MoodFace width={80} height={80} />
            </View>
          </PieChart>
        </View>
        <View  style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingRight: 32}}>
        <Text style={{color: "rgb(4, 194, 181)", fontSize: 42, marginBottom: 4}} >{this.props.percent}%</Text>
        <Text>Based on {this.props.entries} entries</Text>
        </View>
        </View>
      </View>
    )
  }
}
