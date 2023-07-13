import React, {useState} from 'react'
import { Image } from 'react-native'
import { S } from '../../components/styledComponents/styles'
import PokemonList from '../../components/PokemonList/PokemonList'
import Header from '../../components/header/Header'

export default function Home({navigation}: any) {

    return (
        <S.MainContainer>
            <Header navigation={navigation}/>
            <S.Container>
                <PokemonList navigation={navigation}/>
            </S.Container>
        </S.MainContainer>
    )
}