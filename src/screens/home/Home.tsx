import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { S } from '../../components/imgStyle'
import PokemonList from '../../components/PokemonList/PokemonList'

export default function Home() {

    return (
        <S.MainContainer>
            <S.Container>
                <Text>Bom dia</Text>
                <PokemonList/>
            </S.Container>
        </S.MainContainer>
    )
}