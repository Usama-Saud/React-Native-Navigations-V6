import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function HS({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30, color: '#f54', fontWeight: 'bold'}}>
        Home Screen
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text style={{fontSize: 25, color: '#ac4', fontWeight: 'bold'}}>
          GO to Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
}
