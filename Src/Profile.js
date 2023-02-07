import {View, Text} from 'react-native';
import React from 'react';

export default function Profile() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30, color: '#ac4', fontWeight: 'bold'}}>
        Profile Screen
      </Text>
    </View>
  );
}
