
import React,{useState,useEffect,useRef} from "react";
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text, useColorScheme,View,TextInput} from 'react-native';
import MoviesWatch from '../../components/moviesWatch.js'
import { Button } from "react-native-elements";
import OTPTextView from 'react-native-otp-textinput'


const Login=({navigation})=>{
    const [isEnterNamePressed,setIsEnterNamePressed]=useState(false);

    return (
        <View style={{backgroundColor:'black',flex:1,justifyContent:'space-evenly'}}>
           <MoviesWatch/>

           {isEnterNamePressed==false?(

                <TextInput
                    style={{width:'80%',borderWidth:0,borderRadius:8,borderColor:'#352449', color: 'black',alignSelf:'center',backgroundColor:'#352449'}}
                    multiline={true}
                    editable={true}
                    
                    //onChangeText={(text)=>{setEmail(text)}}
                    //value={email}
                    placeholderTextColor = "gray"
                    placeholder="                               Enter Full Name"
                ></TextInput>
           ):(
            <>
                <TextInput
                    style={{width:'80%',borderWidth:0,borderRadius:8,borderColor:'#352449', color: 'black',backgroundColor:'#352449',alignSelf:'center'}}
                    multiline={true}
                    editable={true}
                    //onChangeText={(text)=>{setEmail(text)}}
                    //value={email}
                    placeholderTextColor = "gray"
                    placeholder="                               Enter Email Address"
                ></TextInput>
            </>
           )}
           {isEnterNamePressed==false?(
                <Button onPress={()=>setIsEnterNamePressed(true)} buttonStyle={{width:'80%', borderRadius:15, alignSelf:'center',height:58,backgroundColor:'#6D44B8'}} title="Next" />
           ):(
                <Button onPress={()=>{console.log("Next2 is presssed")}} buttonStyle={{width:'70%', borderRadius:15, alignSelf:'center',height:58,backgroundColor:'#6D44B8'}} title="Next"/>
           )}
          
        </View>
    )
}

export default Login;