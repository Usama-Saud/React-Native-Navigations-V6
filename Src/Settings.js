import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Settings({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30, color: '#298', fontWeight: 'bold'}}>
        Settings Screen
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={{fontSize: 25, color: '#ac4', fontWeight: 'bold'}}>
          GO to Home
        </Text>
      </TouchableOpacity>
    </View>
  );
}
