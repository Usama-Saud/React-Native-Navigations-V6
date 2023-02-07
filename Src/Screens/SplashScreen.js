import {View, Text, Image, StatusBar} from 'react-native';
import React from 'react';

export default function SplashScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar hidden={true} />
      <Image
        source={require('../assets/images/Motive.jpg')}
        style={{width: 300, height: 300, borderRadius: 50}}
      />
      <Text style={{fontSize: 50}}>SplashScreen</Text>
    </View>
  );
}
