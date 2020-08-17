import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation, StackActions } from  '@react-navigation/native'
export default function Contato() {
const navigation = useNavigation()

function irHome(){
    navigation.dispatch(StackActions.popToTop()) 
}
    return(
        <View>
            <Text>Contato</Text>
            <Button
                title="Voltar para Home"
                onPress={irHome}
            />
        </View>
    )
}