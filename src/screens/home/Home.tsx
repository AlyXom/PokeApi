import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { S } from '../../components/styledComponents/styles'
import PokemonList from '../../components/PokemonList/PokemonList'

export default function Home({navigation}: any) {

    return (
        <S.MainContainer>
            <S.Container>
                <Text>Bom dia</Text>
                <PokemonList navigation={navigation}/>
            </S.Container>
        </S.MainContainer>
    )
}