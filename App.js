import React from 'react';

import { AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Component,
} from 'react-native'
import Toast from 'react-native-simple-toast';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.addData=this.addData.bind(this);
    this.state={
      value:20,
    }
  }

  addData(value){
      lim=50
      setInterval(function(){
        if(value<lim){
        value+=1
        }
        Toast.show(""+value,Toast.SHORT);
},1000);
  }

// Toast.show('This is a toast.');      },


  render() {
    return (
      <View style={styles.mainContainer}>
      <View style={styles.toolbar}>
          <Text style={styles.toolbarButton}>Home</Text>
          <Text style={styles.toolbarTitle}>Grab Money</Text>
          <Text style={styles.toolbarButton}>Menu</Text>
      </View>
        <View style={styles.container}> 
        <View style={{flexDirection:'row',alignItems:'center',position:'absolute',bottom:250,marginLeft:120,justifyContent:'center'}}>
        <Text style={{color:'black', fontSize: 50,alignItems:'center',}}>$</Text>
        <Text style={{color:'black', fontSize: 50,alignItems:'center',}}>{this.state.value}</Text>
          </View>
        <View style={ styles.bottomView} >
        <Button style={styles.textStyle} title='GRAB!' onPress={()=>this.addData(this.state.value)}></Button>

          </View>
          </View></View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  container: {
    backgroundColor: '#fff',
   paddingTop:470,

  },toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:50,
        paddingBottom:10,
        flexDirection:'row',
    },
    toolbarButton:{
        width: 50,            
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1,
        fontSize:20,
    },
    bottomView:{
 
      width: '100%', 
      height: 80, 
      backgroundColor: '#FFFFFF', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 50,
    },
    textStyle:{
      color: '#fff',
      fontSize:22
    }
});
