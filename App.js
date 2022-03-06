import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//Screens
import MainTabScreen from './screens/MainTabScreen';


const Stack = createNativeStackNavigator(); //For stack Navigation
const Drawer = createDrawerNavigator(); //For Drawer Navigation
const Tab = createMaterialBottomTabNavigator(); //Bottom Navigation

function App() {
  return (
    <NavigationContainer>
       <Drawer.Navigator screenOptions={{
          headerStyle:{
              backgroundColor:"#c23616"
          },
          headerTintColor:"#f5f6fa",
          headerTitleStyle:{
            fontWeight:"bold"
          }
        }}>
          <Drawer.Screen name="Donor Home" component={MainTabScreen}  options={{title:"All Camps"}}/>
      </Drawer.Navigator>

     {/*  <Stack.Navigator screenOptions={{
          headerStyle:{
              backgroundColor:"#c23616"
          },
          headerTintColor:"#f5f6fa",
          headerTitleStyle:{
            fontWeight:"bold"
          }
        }} >

        <Stack.Screen name="Home" component={HomeScreen}/>

        <Stack.Screen name="DonationHistory"  component={DonationHistory} options={{
          title:"Donation History"
        }} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;