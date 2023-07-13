import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { S } from "../../components/styledComponents/styles";
import { pokemonsInfo } from "../../types/pokemonInfo";
import FavCard from "../../components/card/FavCard";

export default function FavScreen({route, navigation}: any) {

    const favs: pokemonsInfo[] = useSelector((state: {stars: pokemonsInfo[]}) => state.stars)

    return (
        <S.MainContainer>
            <S.Container>
                {favs.map((item) => {
                    return (
                        <FavCard key={item.id} navigation={navigation} pokemon={item}/>
                    )
                })}
            </S.Container>
        </S.MainContainer>
    )
}