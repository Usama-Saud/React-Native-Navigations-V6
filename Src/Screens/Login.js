import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30, color: '#15f'}}>Login Screen</Text>
      <View>
        <TouchableOpacity style={{margin: 20, backgroundColor: '#190cf3'}}>
          <Text
            style={{color: '#cf4224', fontSize: 30}}
            onPress={() => navigation.navigate('Signup')}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text
            style={{color: '#c4dd24', fontSize: 30}}
            onPress={() => navigation.navigate('DrawerNavigator')}>
            New User Signup
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
