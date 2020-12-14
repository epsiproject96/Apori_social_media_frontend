import React from 'react'
import { Text, View } from 'react-native'
import { HomeStacknavProps } from '../navigation/HomeParamList';

export function Parametre({navigation}: HomeStacknavProps<'Parametre'>){
    return (
        <View>
            <Text>Parametre</Text>
        </View>
    )
}