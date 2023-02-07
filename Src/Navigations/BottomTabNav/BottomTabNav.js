import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HS from '../../Home';
import Profile from '../../Profile';
import Settings from '../../Settings';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNav() {
  return (
    <Tab.Navigator
      shifting={false}
      activeColor="#fa5354"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#69ffad'}}>
      <Tab.Screen
        name="Home"
        component={HS}
        options={{
          tabBarIcon: () => <Icon name="home" size={22} color="#345" />,
          tabBarColor: '#54f',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <Icon name="user" size={22} color="#345" />,
          tabBarColor: '#5cf',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: () => <Icon name="setting" size={22} color="#345" />,
          tabBarColor: '#917643',
        }}
      />
    </Tab.Navigator>
  );
}
