import React, { Component} from 'react';
import {View,Text,Button,TouchableHighlight,Alert,StyleSheet ,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { takeData } from './redux/actions'
import { MaterialComunityIcons as Icon } from 'react-native-vector-icons'


class Play extends Component{
  constructor(){
    super()
    this.state = {
      currentPlayer:1,
      text: ''
    }
    this.addItem = this.addItem.bind(this)
  }
  addItem(){
    if(currentPLayer % 2 !== 0){
      this.setState({
        currentplayer : this.state.currentPlayer += 1,
        text : X
      })
    }else{
      this.setState({
        currentplayer : this.state.currentPlayer += 1,
        text : O
      })
    }
  }
  componentDidMount(){
    
    this.props.ambilData()
  }


  render(){
    return (
      <View style={styles.container}>
        <View style={{flexDirection:"row"}}>
          <View style={styles.tile}>
          </View>
          <View style={styles.tile}>
          </View>
          <View style={styles.tile}/>
        </View>
        <View style={{flexDirection:"row"}}>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
        </View>
        <View style={{flexDirection:"row"}}>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
          <View style={styles.tile}/>
        </View>
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
    ambilData: () => dispatch(takeData()),
    newGame: () => dispatch(initializeGame())
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tile:{
    borderWidth: 1,
    width:100,
    height:100
  },
  x:{
    color:"black",
    fontSize: 60,
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(Play)