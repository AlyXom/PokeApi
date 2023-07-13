import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { pokemonsInfo } from "../../types/pokemonInfo";

export default function FavCard(props: { pokemon: pokemonsInfo, navigation: any }) {
    const navigation = props.navigation
    const pokemon = props.pokemon

    console.log(pokemon.sprites)
    return (
        <View>
            <Text onPress={() => navigation.navigate('Details', {pokemon})}>{pokemon.name}</Text>
        </View>
    )
}