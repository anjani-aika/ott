import React from 'react';

import Swiper from 'react-native-swiper';
import {View,StyleSheet,Text} from 'react-native';
import { Button } from 'react-native-elements';

const SubscribeSlider=({navigation})=>{

    return (
        <Swiper
            style={styles.wrapper}
            activeDotColor="red"
            activeDot={<View style={{backgroundColor: '#A900BD', width: 25, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
            dot={<View style={{backgroundColor: '#4E4060' , width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
        >
            <View style={styles.slide1}>
                <Text style={{color:'white',fontSize:16,fontFamily:'Poppins-Regular',fontWeight:'600',marginLeft:'10%',marginTop:'15%'}}>SUBSCRIPTION PLAN</Text>
                <Text style={{color:'white',fontSize:34,fontFamily:'Poppins-Regular',fontWeight:'600',width:'50%',marginLeft:'18%',marginTop:'30%'}}>3 Months  of Premium for R.299</Text>
                <Text style={{color:'white',fontSize:16,fontFamily:'Poppins-Regular',fontWeight:'300',width:220,marginLeft:'18%',marginTop:'8%'}}>watch 1 screen on any device anywhere anytime</Text>
                <Button title="Subscribe" onPress={()=>navigation.navigate('Home')} buttonStyle={{backgroundColor:'#352449',width:164,height:50,borderWidth:1,marginLeft:'18%',borderColor:'#6D44B8',borderRadius:15,marginTop:'9%'}} />
            </View>
            <View style={styles.slide2}>
            <Text style={{color:'white',fontSize:16,fontFamily:'Poppins-Regular',fontWeight:'600',marginLeft:'10%',marginTop:'15%'}}>SUBSCRIPTION PLAN</Text>
                <Text style={{color:'white',fontSize:34,fontFamily:'Poppins-Regular',fontWeight:'600',width:'50%',marginLeft:'18%',marginTop:'30%'}}>6 Months  of Premium 
for Rs.549</Text>
                <Text style={{color:'white',fontSize:16,fontFamily:'Poppins-Regular',fontWeight:'300',width:220,marginLeft:'18%',marginTop:'8%'}}>watch 2 screen on any device anywhere anytime</Text>
                <Button title="Subscribe" buttonStyle={{backgroundColor:'#352449',width:164,height:50,borderWidth:1,marginLeft:'18%',borderColor:'#6D44B8',borderRadius:15,marginTop:'9%'}} />
            </View>
            <View style={styles.slide3}>
            <Text style={{color:'white',fontSize:16,fontFamily:'Poppins-Regular',fontWeight:'600',marginLeft:'10%',marginTop:'15%'}}>SUBSCRIPTION PLAN</Text>
                <Text style={{color:'white',fontSize:34,fontFamily:'Poppins-Regular',fontWeight:'600',width:'50%',marginLeft:'18%',marginTop:'30%'}}>12 Months  of Premium 
for Rs.1199</Text>
                <Text style={{color:'white',fontSize:16,fontFamily:'Poppins-Regular',fontWeight:'300',width:220,marginLeft:'18%',marginTop:'8%'}}>watch 4 screen on any device anywhere anytime</Text>
                <Button title="Subscribe" buttonStyle={{backgroundColor:'#352449',width:164,height:50,borderWidth:1,marginLeft:'18%',borderColor:'#6D44B8',borderRadius:15,marginTop:'9%'}} />
            </View>
      </Swiper>
    )
}

export default SubscribeSlider;

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      backgroundColor: 'black'
    },
    slide2: {
      flex: 1,
      backgroundColor: 'black'
    },
    slide3: {
      flex: 1,
      backgroundColor: 'black'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })