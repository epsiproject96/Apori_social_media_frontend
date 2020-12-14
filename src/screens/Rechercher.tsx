import React from 'react'
import { Text, View } from 'react-native'
import { HomeStacknavProps } from '../navigation/HomeParamList';

export function Rechercher({navigation}: HomeStacknavProps<'Rechercher'>){
    return (
        <View>
            <Text>Rechercher</Text>
        </View>
    )
}