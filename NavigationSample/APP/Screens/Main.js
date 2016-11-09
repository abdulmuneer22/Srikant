import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Navigator,
  TouchableOpacity,
  WebView
} from 'react-native';


import StatusBar from '../Components/SharedComponents/StatusBar'

class Main extends Component{

    render(){

        return(
            <View>
            <StatusBar title="Main Screen" icon="arrow-left" navigator={this.props.navigator}/>
            
            
            <WebView
            source={{uri: 'http://www.sreebroadband.com'}}
            style={{marginTop: 20}}
            />
            </View>

        );



        /*
        return(

            <View>

            <StatusBar title="Main Screen" icon="arrow-left" navigator={this.props.navigator}/>
            <View style={{
                marginTop : 40,
                justifyContent : 'center',
                alignItems : 'center',
                
            }}>

            <Text>
            Main Screen --  Launched after splash Screen
            </Text>

            <TouchableOpacity
            onPress = {()=>{
                //alert("test !!!")
                this.props.navigator.push({name:'login'})
            }}
            >
            <Text>
            Login Screen
            </Text>
            </TouchableOpacity>
            </View>


            </View>
        );
        */
    }


}


export default Main