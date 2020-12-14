import React from 'react'
import { Button, Text, View } from 'react-native'
import { AuthNavProps } from '../navigation/AuthParamList';

export function Register({navigation}: AuthNavProps<'Register'>){
    return (
        <View>
            <Button
            title = 'Login'
            onPress={() => {
                navigation.navigate('Login')
            }}></Button>
        </View>
    )
}