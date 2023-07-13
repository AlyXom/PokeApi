import React from "react";
import { View, Text, Image, TouchableOpacity, Touchable } from "react-native";

export default function Header({navigation}) {
    return (
        <View style={{ flexDirection: 'row', width: '95%', justifyContent: 'space-between' }}>
            <View style={{width: 40}}></View>
            <View style={{alignSelf: 'center'}}>
                <Image style={{ width: 200, height: 70 }} source={require('../../../assets/PokedexLogo.png')} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('favScreen')} style={{alignSelf: 'center'}}>
                <Image style={{width: 40, height: 40}} source={require('../../../assets/PokeBall.svg')}/>
            </TouchableOpacity>
        </View>
    )
}