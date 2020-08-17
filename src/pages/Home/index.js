import React from 'react'
import { View, Text, Button } from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default function Home(){
    const navigation = useNavigation()

    function irSobre(){
        navigation.navigate('Sobre', {nome: 'Marilia', email: 'marilia@marlia'})
    }
    return(
        <View>
            <Text>Bem Vindo a Home</Text>
            <Button
                title="Ir para Sobre"
                onPress={irSobre}
            />
        </View>
    )
}