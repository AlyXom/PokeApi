import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import axios from "axios";
import { pokemonsInfo } from "../../types/pokemonInfo";

export default function PokemonCard(pokeprops: { pokemon: { name: string, url: string }, index: number, navigation: any }) {

    const [isLoading, setIsLoading] = useState(true)
    const [imageIsLoading, setImageIsLoading] = useState(false)

    const [pokeData, getPokeData] = useState<pokemonsInfo>()

    const pokemons = pokeprops.pokemon
    const navigation = pokeprops.navigation

    useEffect(() => {
        axios.get(pokemons.url)
            .then(response => response.data)
            .then((data: pokemonsInfo) => {
                setIsLoading(false)
                getPokeData(data)
            })
            .catch(error => console.log(error))
    }, [])



    return (
        <View style={{ width: '100%', height: 150, borderRadius: 20 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Details', { infos: pokeData })}>
            {isLoading
                ?
                <ActivityIndicator color={'#c03028'} size='large' />
                :
                <View style={{ backgroundColor: '#cfcfcf', marginLeft: 10, borderRadius: 20, padding: 10, alignItems: 'center' }} key={pokeData?.id}>
                    {imageIsLoading ? <ActivityIndicator size="large" /> : <Image style={{ width: 90, height: 90 }} source={{ uri: pokeData?.sprites?.front_default ?? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData?.id}.png` }} />}
                    <Text>{pokeData?.id}</Text>
                </View>}
            </TouchableOpacity>
        </View>
    )
}