import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Image, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import { PokemonData } from '../../redux/starReducer/StarSlice'
import axios, { Axios } from 'axios'
import PokemonCard from '../card/PokemonCard'

interface Data {
    count?: number,
    next?: string,
    previous?: string,
    results: [{
        name: string,
        url: string
    }]
}

export default function PokemonList() {
    const link = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50'

    const [isLoading, setIsLoading] = useState(true)
    const [infos, getInfos] = useState<Data>()
    const [urls, setUrls] = useState<Data>()
    const [pokemonCount, setCount] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50')
    const [pokemons, getPokemons] = useState([{}])

    useEffect(() => {
        axios.get(pokemonCount)
        .then(response => response.data)
        .then((data: Data) => {
            setIsLoading(false)
            getInfos(data)
            getPokemons(data.results)

        })
        .catch(error => console.warn(error))
    }, [pokemonCount])



    return (
        <View style={{height: '80%', flexGrow: 1, alignItems: 'center'}}>
            <Text onPress={() => {
                setIsLoading(true)
                setCount(infos?.next)
            }}>Próximo</Text>
            <Text onPress={() => {
                setIsLoading(true)
                if( infos?.previous === null) {
                    console.log('Nao da pra voltar mais')
                    setCount('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50')
                } else {
                    setCount(infos?.previous)
                }
                
            }}>Voltar</Text>
            <ScrollView style={{width: '100%'}}>
                <View style={isLoading? {alignItems: 'center'} : {flexDirection: 'row', flexWrap: 'wrap', width: '100%'}}>
                    {isLoading ? <ActivityIndicator size='large'/> :  pokemons.map((pokemon, index) => {
                        console.log(pokemon.name)
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