import React, { useEffect, useState} from "react";
import { View, Text, FlatList, ScrollView, Image, ActivityIndicator } from "react-native";
import axios from "axios";


interface pokemonsInfo {
    abilities?: []
    baseExperience?: number
    forms?: []
    gameIndices?: []
    height?: number
    heldItems?: []
    id?: number
    isDefault?: boolean
    locationAreaEncounters?: string
    moves?: []
    name?: string
    order?: number
    pastTypes?: []
    species?: {}
    sprites?: {
        backDefault?: string,
        backFemale?: string,
        backShiny?: string,
        backShinyFemale?: string,
        frontDefault?: string,
        frontFemale?: string,
        frontShiny?: string,
        frontShinyFemale?: string,
    }
}

export default function PokemonCard(pokeprops) {

    const [isLoading, setIsLoading] = useState(true)
    const [imageIsLoading, setImageIsLoading] = useState(false)

    const [pokeData, getPokeData] = useState<pokemonsInfo>()
    
    const pokemons = pokeprops.pokemon
    const index = pokeprops.index

    useEffect(() => {
        axios.get(pokemons.url)
        .then(response => response.data)
        .then((data: pokemonsInfo) => {
            setIsLoading(false)
            getPokeData(data)
        })
        .catch(error => console.log(error))
    }, [pokeData])


    return (
        <View style={{width: '100%', height: 150, borderRadius: 20}}>
            {isLoading
                ?
                <ActivityIndicator size='small' />
                :
                <View style={{backgroundColor: 'blue', marginLeft: 10, borderRadius: 20, padding: 10, alignItems: 'center'}} key={pokeData?.id}>
                    <Text style={{fontSize: 12}}>{pokeData?.name}</Text>
                    {imageIsLoading ? <ActivityIndicator size="large"/> : <Image style={{width: 100, height: 100}} source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData?.id}.png`}}/>}
                    <Text>{pokeData?.id}</Text>
                </View>}
        </View>
    )
}