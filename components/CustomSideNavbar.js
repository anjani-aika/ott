import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from "axios";
import {Button, Icon} from 'react-native-elements';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

 
const CustomSidebarMenu = (props) => {
  const [name,setName]=useState('');
  useEffect(() => {
   
  },[]);
//   const getUserInfo = async () =>{

//     let res = await AsyncStorage.getItem("user_info");
//     let arr = JSON.parse(res);
//     console.log("ARRRRR ------",arr);
//     if(arr!= null || arr === [] || arr == ""){
       
//         let headers={
//             'token':arr.token
//         }
//         axios
//           .get('https://pushpdiamonds.com/Door_Devp/index.php/api/Users/user_detail?user_id='+arr.user_id,{headers:headers})
//           .then((responseData) => {
//             console.log('POST Response: ' + JSON.stringify(responseData.data.data));
//             if(responseData.data.status === 200){
             
               
//                 let userArr =  responseData.data.data[0];
//                 let Name = userArr['full_name'];
//                 setName(Name);
//                 console.log("USER DAYA --",name );

//             }
           
//           })
//           .catch((error) => {
          
//             console.log(error);
           
//           });
//     }
//   }

//   const onLogOut = async () =>{

//     console.log("LOG OUT ----");
//         axios
//           .post('https://pushpdiamonds.com/Door_Devp/index.php/api/Users/app_logout')
//           .then((responseData) => {
//             console.log('POST Response: ' + JSON.stringify(responseData.data.data));
//             if(responseData.data.status === 200){
//               AsyncStorage.removeItem("user_info");
//               props.navigation.navigate('Login');

//             }
           
//           })
//           .catch((error) => {
          
//             console.log('error ----',error);
           
//           });
//     }
  

  // console.log("Custom sidebar",props.navigation);
//   const BASE_PATH =
//     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
//   const proileImage = 'react_logo.png';
 
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'black'}}>
      {/*Top Large Image */}
      <View style={{flexDirection:'column',height:120}}>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Home');}}>
        {/* <Image 
          style={{height:45,width:45,resizeMode:'stretch',marginTop:60,marginLeft:20}} 
          source={require('../../static/sidebar/dp.png')}
        /> */}
      </TouchableOpacity>
     
        <Text style={{fontSize:16,fontWeight:'600',color:'white',marginTop:70,alignSelf:'center'}}>Guest User</Text>
        <Button title="Go Premium" style={{alignSelfL:'center',width:211,height:46,backgroundColor:'#6644B8',borderWidth:1,borderRadius:15}} />
      </View>
      <View style={{width:'97%',height:5,backgroundColor:'#E7E7E7',position:'absolute',top:140}}></View>
      <DrawerContentScrollView {...props} style={{marginTop:-25}}>
        <DrawerItemList {...props} />
       
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
 
export default CustomSidebarMenu;