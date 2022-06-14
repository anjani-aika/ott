import React,{useState,useEffect} from "react";
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text, useColorScheme,View,ActivityIndicator,Image} from 'react-native';
import MoviesWatch from '../../components/moviesWatch.js'
import { Button } from "react-native-elements";


const Start=({navigation})=>{
    const onPress=()=>{
        console.log("pressed")
        navigation.navigate('Login');
    }
    return (
        <View style={{backgroundColor:'black',flex:1}}>
            <View style={{flex:0.5}}></View>
            <View style={{flex:1}}>
                <MoviesWatch/>
                <Button onPress={()=>onPress()} buttonStyle={{width:'80%', borderRadius:15,alignSelf:'center',height:58,backgroundColor:'#6644B8',marginBottom:20}} title="Login & Subscribe" />
                <Button buttonStyle={{width:'80%', borderRadius:15,alignSelf:'center',height:58,backgroundColor:'#37274B'}} title="Try as guest!" />
            </View>
          
        </View>
    )
}

export default Start;