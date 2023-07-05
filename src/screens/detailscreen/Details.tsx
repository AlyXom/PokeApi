import React from "react";
import { View, Text, Image } from "react-native";
import { pokemonsInfo } from "../../types/pokemonInfo";
import { S } from '../../components/styledComponents/styles'
import PokeTypes from "../../components/pokeTypes/PokeTypes";

export default function Details({ route, navigation }: any) {
    const routeInfos = route.params
    const pokemonInfos: pokemonsInfo = routeInfos.infos
    return (
        <S.MainContainer>
            <S.Container>
                <Text>{pokemonInfos.name?.replace(/-/g, " ")}</Text>
                <Image style={{ width: 100, height: 100 }} source={{ uri: pokemonInfos.sprites?.front_default }} />
                <PokeTypes types={pokemonInfos.types}/>
            </S.Container>
        </S.MainContainer>
    )
}