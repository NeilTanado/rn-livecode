import React, { Component} from 'react';
import {View,Text,Button,TouchableHighlight,Alert} from 'react-native'
import { connect } from 'react-redux'
import { takeData } from './redux/actions'

class Play extends Component{
  constructor(){
    super()

    this.handlePress = this.handlePress.bind(this)
  }
  componentDidMount(){
    this.props.ambilData()
  }
  handlePress(){
    alert('masuk press')
  }
  render(){
    return (
      <View>
      for(let i = 0 ; i < this.props.data.length ; i++){
        <Button title={this.props.data[i].id} onPress={()=>this.handlePress()}/>
      }
      </View>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    data : state
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    ambilData: () => dispatch(takeData())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Play)