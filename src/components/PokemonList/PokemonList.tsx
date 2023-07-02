import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Image, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
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

    const [isLoading, setIsLoading] = useState(true)
    const [infos, getInfos] = useState<Data>()
    const [pokemonCount, setCount] = useState<string>('https://pokeapi.co/api/v2/pokemon/?offset=915&limit=61')
    const [pokemons, getPokemons] = useState<[{name: string, url: string}]>([])

    useEffect(() => {
         axios.get(pokemonCount)
        .then(response => response.data)
        .then((data: Data) => {
            if(data) {
                setIsLoading(false)
                getInfos(data)
                getPokemons(data.results)
            }

        })
        .catch(error => console.warn(error))
    }, [pokemonCount, isLoading])



    return (
        <View style={{ height: '80%', flexGrow: 1, alignItems: 'center' }}>
            {infos?.next == null ? (
                <View></View>
            ) : (
                <Text onPress={async () => {
                    setIsLoading(true)
                    console.log('Apertou')
                    await setCount(infos?.next ?? "")
                }}>Próximo</Text>
            )
            }
            {infos?.previous == null ? (
                <View></View>
            ) : (infos.next == null ? (
                <View>
                    <Text onPress={() => {
                        setIsLoading(true)
                        setCount('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=61')
                    }}>Voltar pro inicio</Text>
                    <Text onPress={() => {
                        setIsLoading(true)
                        setCount(infos.previous ?? "")
                    }}>Voltar</Text>
                </View>
            ) : (
                <Text onPress={() => {
                    setIsLoading(true)
                    setCount(infos.previous ?? "")
                }}>Voltar</Text>)
            )
            }

            <ScrollView style={{ width: '100%' }}>
                <View style={isLoading ? { alignItems: 'center' } : { flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
                    {isLoading ? <ActivityIndicator size='large' /> : pokemons.map((pokemon, index: number) => {
                        return (
                            <View style={{ width: '33%', padding: 10 }} key={pokemon.name}>
                                <PokemonCard pokemon={pokemon} index={index} />
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}