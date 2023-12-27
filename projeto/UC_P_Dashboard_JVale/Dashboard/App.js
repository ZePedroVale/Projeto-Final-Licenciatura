import * as React from 'react';
import HomeScreen from "./views/Home";
import LoginScreen from "./views/Login";
import ScanScreen from "./views/Scan";
import DashboardScreen from "./views/Dashboard";
import NoticiasScreen from "./views/Noticias";
import RefeicoesScreen from "./views/Refeicoes";
import InstrucoesScreen from "./views/Instrucoes";
import ConfiguracoesScreen from "./views/Configuracoes";
import { View, Text, Button, Image, StyleSheet  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem,} from '@react-navigation/drawer';

import { AuthContext, user } from './context/AuthContext'; // Import Context



// Get User By Id From DB
const getUserById = async (id) => {
  await fetch(apiConfig.URI + '/users/' + id)
    .then((response) => response.json())
    .then((json) => updateProvider(json))
    .catch((error) => console.error(error));

}

// Update Context Provider Value
const updateProvider = (newUserData) => {
  setUser(newUserData);
  setCurrentContext({
    user: newUserData,
    updateUser: async () => {
      await getUserById(user.Id);
    }
  });
}




const Drawer = createDrawerNavigator();

const CustomDrawer = props =>{
  return(
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          backgroundColor: '#9FE0FF',
          marginBottom : '20',
        }}
      >
            <AuthContext.Consumer>
              {(context) => (
                <View>
                <Text> {context.user.Name} </Text>  
                <Text>example@gmail.com</Text>
                </View>
              )}
            </AuthContext.Consumer>
      <Image
        source={{
          uri: 'https://diegomariano.com/wp-content/uploads/2021/06/react-logo.png',
        }}
        style={{width:60,height:60,borderRadius:30}}
        />
      </View>
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
    </View>
  );
}

function LogoTitle() {
  return (

      <View >
        <Image source={{uri: 'https://projetobioma.pt/wp-content/uploads/2021/05/logo-1-2048x812.png',}}style={{width:130,height:45}}/>
        <View> <Text>Smart Tool Education</Text></View>
     </View> 
    
  );
}


function MyDrawer() {
  return (
    <Drawer.Navigator 
    
    screenOptions={{
      headerStyle:{
        backgroundColor:'white',
        elevation:0,
        shadowOpacity:0,
     },
     headerTitle:(props) => <LogoTitle {...props} />,
     headerTintColor:'#8fccf7',
     headerTitleAlign:'center',
    }}
    drawerContent={(props)=> <CustomDrawer {...props}/>}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notícias" component={NoticiasScreen} />
      <Drawer.Screen name="Instruções" component={InstrucoesScreen} />
      <Drawer.Screen name="Scan" component={ScanScreen} />
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="RefeicoesScreen" component={RefeicoesScreen} />
      <Drawer.Screen name="Configurações" component={ConfiguracoesScreen} />
      
    </Drawer.Navigator>
    
    

  );
}





App.contextType = AuthContext;


export default function App() {
  return (
    <NavigationContainer>
      
      <MyDrawer />
    </NavigationContainer>
  );
}

