import React from 'react'
import {View, Text, Button} from 'react-native'
import {useNavigation, NavigationHelpersContext} from '@react-navigation/native'


export default function Sobre({ route }){
    const navigation = useNavigation()

    navigation.setOptions({
        title: `Olá ${route.params?.nome}`
    })

    function irHome(){
        navigation.goBack()
    }
    function irContato(){
        navigation.navigate('Contato')
    }

    return(
        <View>
            <Text>Bem vindo a tela Sobre</Text>
            <Text>{route.params?.nome}</Text>
            <Text>{route.params?.email}</Text>
            <Button
                title="Ir para home"
                onPress={irHome}
            />
            <Button
                title="Contato"
                onPress={irContato}
            />
        </View>
    )
}