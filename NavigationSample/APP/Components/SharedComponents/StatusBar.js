import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Navigator,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class StatusBar extends Component{
    render(){
        return(

            <View style={{
                flexDirection : 'row',
                marginTop : 20
            }}>

                <TouchableOpacity style={{
                    flex : 1 , 
                    backgroundColor : '#687282', 
                    height : 50,
                    alignItems :'center',
                    justifyContent : 'center'
                }}
                onPress = {()=> {
                    this.props.navigator.pop()
                }}
                >
                <Icon name={this.props.icon} size={20} color="#edeeef" />
                </TouchableOpacity>
                
                
                
                <View style={{
                    flex : 6 , 
                    backgroundColor : 'green', 
                    height : 50, 
                    alignItems : 'center',
                    justifyContent : 'center'
                
                }}>
                <Text>{this.props.title}</Text>
                </View>

                <View style={{flex : 1 , backgroundColor : 'blue', height : 50}}>
                <Text>Right Icon !</Text>
                
                </View>
                
                




            </View>

        );
    }

}


export default StatusBar