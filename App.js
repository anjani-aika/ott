/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler'
 import React, { useState,useEffect } from 'react';
 import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text, useColorScheme,View,ActivityIndicator} from 'react-native';
 import { useMemo } from 'react';
 import {Colors} from 'react-native/Libraries/NewAppScreen';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import { AuthContext } from './components/Context';
//  import Start from './screens/credentialsScreen/Start';
 import Login from './screens/credentials/Login';
 import GetOTP from './screens/credentials/GetOTP';
 import Start from './screens/credentials/Start';
 import SubscribeSlider from './screens/credentials/Subscribe';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import Account from './screens/home/Account';
import MyDrawer from './screens/home/Drawer';
import Support from './screens/home/Support';
import PrivacyPolicy from './screens/home/PrivacyPolicy';
import WatchList from './screens/home/WatchList';
import Downloads from './screens/home/Downloads';
 
 const Stack = createStackNavigator();
 const globalScreenOptions = {
   headerShown: false,
   cardStyle: { backgroundColor: '#FFFFFF' },
 };
 
 
 const App= () => {
   const [initialRouteName,setinitialRouteName] = useState(false);
   const [loading,setIsLoading]=useState(false)
   useEffect(() => {
    //  SplashScreen.hide();
    // getUserInfo();
   },[]);
   
  //  const getUserInfo = async () =>{
 
  //    let res = await AsyncStorage.getItem("user_info");
  //    let arr = JSON.parse(res);
  //    console.log("ARRRRR ------",arr);
  //   if(arr === null || arr === "null"){
  //    console.log("IF LOGIN ------");
  //    setinitialRouteName((initialRouteName)=>{
  //      return "Start"
  //    });
  //   }
  //   else{
  //     console.log("ELSE HOME ------");
  //     setinitialRouteName((initialRouteName)=>{
  //      return "Home"
  //    });
  //    console.log("intialROUTE NAME ----",initialRouteName)
  //   }
  //    setIsLoading(false)
  //   }
 
           
   return (
     <>
       <ActivityIndicator style={{position:'absolute',top:'40%',alignSelf:'center'}} size='large' color="#F55633"  animating={loading}/>
       {loading==false?(
           <>
        <AuthContext.Provider value={'authContext'}> 
              <NavigationContainer >
                <Stack.Navigator screenOptions={globalScreenOptions} initialRouteName={'Downloads'}>
                  
                <> 
                <Stack.Screen name="WatchList" component={WatchList} /> 
                <Stack.Screen name="Downloads" component={Downloads} /> 
                <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} /> 
                <Stack.Screen name="Account" component={Account} /> 
                <Stack.Screen name="Support" component={Support} /> 
                <Stack.Screen name="GetOTP" component={GetOTP} /> 
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Start" component={Start} />
                <Stack.Screen name="Home" component={MyDrawer}/>
                <Stack.Screen name="Subscribe" component={SubscribeSlider} />
                {/* <Stack.Screen name="GetOTP" component={GetOTP} />  */}
                {/* <Stack.Screen name="Login" component={Login} /> */}
                </>
              </Stack.Navigator>
            </NavigationContainer>
    </AuthContext.Provider>
           </>
       ):null}
     
     </>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 