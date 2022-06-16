import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Support from './Support';
import {Text,Image} from 'react-native';
import CustomSidebarMenu from '../../components/CustomSideNavbar';
import Account from './Account';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfUse from './TermsofUse';
import Home from './Home';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';
import { NavigationContainer } from '@react-navigation/native';
import Downloads from './Downloads';
import Favourite from './Favourite';
import RedeemCoupons from './RedeemCoupons'
import WatchList from './WatchList'
const Drawer = createDrawerNavigator();

const MyDrawer=()=>{

    return (
    // <NavigationContainer>
    <><Text>Hi</Text>
    <Drawer.Navigator
        drawerType="front"
        initialRouteName="Account"
        screenOptions={{
            activeTintColor: '#e91e63',
            itemStyle: { marginVertical: 10 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
        {/* <Drawer.Screen
          
            name="HomeVP"
            component={Home}
            
            options={{
            drawerActiveTintColor:'#181725',
            drawerActiveBackgroundColor:'none',
            drawerContentContainerStyle:{display:'none'},
            drawerLabelStyle:{display:'none'},
            headerShown:true,
            header: ({ scene }) => {
                    return (
                        <Header />
                    );
                }

            }}
            
            /> */}
              <Drawer.Screen
                name="Account"
                component={Account}
                options={{
                drawerActiveTintColor:'#181725',
                drawerActiveBackgroundColor:'none',
                drawerLabelStyle:{paddingLeft:'10%'},
                headerShown:false,

                }}
            
            />
    
           {/* <Drawer.Screen
          
          name="Favourite"
          component={Favourite}
          
          options={{
          drawerActiveTintColor:'#181725',
          drawerActiveBackgroundColor:'none',
          drawerContentContainerStyle:{display:'none'},
          drawerLabelStyle:{display:'none'},
          headerShown:false,
        //   drawerIcon: ({focused, size}) => (
        //     <Icon
        //        name="favorite"
        //        size={24}
        //        color={'black'}
        //     />
        //     )

          }}
          
          />
           <Drawer.Screen
                name="Redeem Coupans"
                component={RedeemCoupons}
                options={{
                drawerActiveTintColor:'#181725',
                drawerLabelStyle:{paddingLeft:'10%'},
                drawerActiveBackgroundColor:'none',
                headerShown:false,
                // drawerIcon: ({focused, size}) => (
                //     <Icon
                //        name="redeem"
                //        size={size}
                //        color={focused ? '#7cc' : '#ccc'}
                //     />
                //     )

                }}
            
            />  
              <Drawer.Screen
                name="Watchlist"
                component={WatchList}
                options={{
                drawerActiveTintColor:'#181725',
                drawerLabelStyle:{paddingLeft:'10%'},
                drawerActiveBackgroundColor:'none',
                headerShown:false,
                // drawerIcon: ({focused, size}) => (
                //     <Icon
                //        name="list-alt"
                //        size={size}
                //        color={focused ? '#7cc' : '#ccc'}
                //     />
                //     )

                }}
            
            />  



              <Drawer.Screen
                name="Downloads"
                component={Downloads}
                options={{
                drawerActiveTintColor:'#181725',
                drawerLabelStyle:{paddingLeft:'10%'},
                drawerActiveBackgroundColor:'none',
                headerShown:false,
                // drawerIcon: ({focused, size}) => (
                //     <Icon
                //        name="email"
                //        size={size}
                //        color={focused ? '#7cc' : '#ccc'}
                //     />
                //     )

                }}
            
            />  
            
              <Drawer.Screen
                name="Privacy Policy"
                component={PrivacyPolicy}
                options={{

                drawerActiveTintColor:'#181725',
                drawerLabelStyle:{paddingLeft:'10%'},
                drawerActiveBackgroundColor:'none',
                headerShown:false,
            

                }}
            
            />
              <Drawer.Screen
                name="Terms Of Use"
                component={TermsOfUse}
                options={{

                drawerActiveTintColor:'#181725',
                drawerLabelStyle:{paddingLeft:'10%'},
                drawerActiveBackgroundColor:'none',
                headerShown:false,
                

                }}
            
            />
              <Drawer.Screen
                name="Support"
                component={Support}
                options={{

                drawerActiveTintColor:'#181725',
                drawerLabelStyle:{paddingLeft:'10%'},
                drawerActiveBackgroundColor:'none',
                headerShown:false,

                }}
            
            /> */}

    </Drawer.Navigator>
    </>

    
    )
    };

export default MyDrawer;