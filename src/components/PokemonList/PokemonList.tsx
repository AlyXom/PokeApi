import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Image, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import { PokemonData } from '../../redux/starReducer/StarSlice'
import axios, { Axios } from 'axios'
import PokemonCard from '../card/PokemonCard'



interface pokemonInfo {
    item: {
        name: string,
        url: string
    },
    index: number,
}

interface Data {
    count?: number,
    next?: null,
    previous?: null,
    results: Array<{name: string, url: string}>
}

export default function PokemonList() {

    const [isLoading, setIsLoading] = useState(true)

    const [pokemons, getPokemons] = useState([])

    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1010')
        .then(response => response.data)
        .then((data: Data) => {
            setIsLoading(false)
            getPokemons(data.results)

        })
        .catch(error => console.log(error))


    return (
        <View style={{height: '80%', flexGrow: 1, alignItems: 'center'}}>
            <ScrollView style={{width: '100%'}}>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', width: '100%'}}>
                    {isLoading ? <ActivityIndicator size='small'/> :  pokemons.map((pokemon, index) => {
                        return (
                            <View style={{width: '33%', padding: 10}} key={pokemon.name}>
                                <PokemonCard pokemon={pokemon} index={index}/>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}