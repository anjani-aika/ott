import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';

const Home=({navigation})=>{
    return(
        <ScrollView contentContainerStyle={{backgroundColor:'white',paddingTop:60,padding:25}}>
            <Text style={{fontWeight:'600',fontSize:18,color:'black',fontFamily:'Poppins-Regular'}}>Privacy And Policies</Text>
            <Text style={{textAlign:'justify',marginTop:10,fontSize:15,color:'black'}}>
                
            </Text>
        </ScrollView>
    )
}

export default Home;