import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthNavProps } from '../navigation/AuthParamList';
import { AuthContext } from '../navigation/AuthProvider';

export function Login({navigation}: AuthNavProps<'Login'>){
    const {login} = useContext(AuthContext);
    return (
        <View>
            <Text>Login</Text>
            <Button
            title = 'Register'
            onPress={() => {
                navigation.navigate('Register')
            }}></Button>
            <Button
            title = 'Se Connecter'
            onPress={() => {
                login();
            }}></Button>

        </View>
    )
}