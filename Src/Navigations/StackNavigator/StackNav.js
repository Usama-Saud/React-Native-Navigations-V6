import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../../Screens/SplashScreen';
import DrawerNavigator from '../DrawerNav/DrawerNavigator';
import Login from '../../Screens/Login';
import Signup from '../../Screens/Signup';
const Stack = createNativeStackNavigator();

export default function StackNav() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 4000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {showSplashScreen ? (
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: true}}
          />
        ) : null}

        <Stack.Screen
          name="Login"
          component={Login}
          //   options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          //   options={{headerShown: false}}
        />
        <Stack.Screen
          options={{
            // title: 'My home',
            // headerShown: false,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="DrawerNavigator"
          component={DrawerNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
