import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import { S } from '../styledComponents/styles'
import axios from 'axios'
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

export default function PokemonList({ navigation }: any) {

    const [isLoading, setIsLoading] = useState(true)
    const [infos, getInfos] = useState<Data>()
    const [pokemonCount, setCount] = useState<string>('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=183')
    const [pokemons, getPokemons] = useState<[{ name: string, url: string }]>([{ name: '', url: '' }])

    useEffect(() => {
        axios.get(pokemonCount)
            .then(response => response.data)
            .then((data: Data) => {
                if (data) {
                    setIsLoading(false)
                    getInfos(data)
                    getPokemons(data.results)
                }

            })
            .catch(error => console.warn(error))
    }, [pokemonCount, isLoading])



    return (
        <View style={{ height: '80%', flexGrow: 1, alignItems: 'center' }}>

            <ScrollView style={{ width: '100%' }}>
                <View style={isLoading ? { alignItems: 'center' } : { flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
                    {isLoading ? <ActivityIndicator color={'#c03028'} size='large' /> : pokemons.map((pokemon, index: number) => {
                        return (
                            <View style={{ width: '33%', padding: 10 }} key={pokemon.name}>
                                <PokemonCard navigation={navigation} pokemon={pokemon} index={index} />
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
            <View style={{justifyContent: 'center', flexDirection: 'row-reverse'}}>
            {infos?.next == null ? (
                <View></View>
            ) : (
                <S.NextAndPrevious style={{backgroundColor: '#c03028'}} onPress={async () => {
                    setIsLoading(true)
                    await setCount(infos?.next ?? "")
                }}>Próximo</S.NextAndPrevious>
            )
            }
            {infos?.previous == null ? (
                <View></View>
            ) : (infos.next == null ? (
                <View style={{flexDirection: 'row-reverse', marginLeft: 5}}>
                    <S.NextAndPrevious style={{backgroundColor: '#7038f8'}} onPress={() => {
                        setIsLoading(true)
                        setCount('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=183')
                    }}>Voltar pro inicio</S.NextAndPrevious>
                    <S.NextAndPrevious style={{backgroundColor: '#f8d030'}} onPress={() => {
                        setIsLoading(true)
                        setCount(infos.previous ?? "")
                    }}>Voltar</S.NextAndPrevious>
                </View>
            ) : (
                <S.NextAndPrevious style={{backgroundColor: '#f8d030'}} onPress={() => {
                    setIsLoading(true)
                    setCount(infos.previous ?? "")
                }}>Voltar</S.NextAndPrevious>)
            )
            }
            </View>
        </View>
    )
}