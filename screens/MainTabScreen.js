import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Screens
import HomeScreen from './HomeScreen';
import DonationHistory from './DonationHistory';
import OrganizerScreen from './OrganizerScreen';
import Messages from './MessagesScreen';
import Settings from './Settings';

const Tab = createMaterialBottomTabNavigator();

export default MyTabs =({navigation})=>{
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor="#fbc531"
      barStyle={{ backgroundColor: '#c23616' }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Camps',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen
        name="DonationHistory"
        component={DonationHistory}
        options={{
          tabBarLabel: 'Donations',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="water" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen
        name="OrganizerScreen"
        component={OrganizerScreen}
        options={{
          tabBarLabel: 'Organizer',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}