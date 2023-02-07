import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomTabNav from '../BottomTabNav/BottomTabNav';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeContainer" component={BottomTabNav} />
      <Drawer.Screen
        name="more"
        component={() => {
          return (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30}}>More Data here</Text>
            </View>
          );
        }}
      />
    </Drawer.Navigator>
  );
}
