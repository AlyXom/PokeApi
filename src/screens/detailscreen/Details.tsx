import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { pokemonsInfo } from "../../types/pokemonInfo";
import { S } from '../../components/styledComponents/styles'
import PokeTypes from "../../components/pokeTypes/PokeTypes";
import Ability from "../../components/abilities/Abilities";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../../redux/starReducer/StarSlice";

export default function Details({ route, navigation }: any) {
    const routeInfos = route.params
    const pokemonInfos: pokemonsInfo = routeInfos.infos
    const dispatch = useDispatch()
    const [exist, setExist] = useState<boolean>(false)

    const favs = useSelector(state => state.stars)


    function addPokemonFavorite() {
        const favFilter = favs.filter((item: { name: string }) => item.name == pokemonInfos.name)
        if (favFilter[0] == null) {
            dispatch(addFavorite(
                {
                    abilities: pokemonInfos.abilities,
                    forms: pokemonInfos.forms,
                    height: pokemonInfos.height,
                    heldItems: pokemonInfos.heldItems,
                    id: pokemonInfos.id,
                    isDefault: pokemonInfos.isDefault,
                    locationAreaEncounters: pokemonInfos.locationAreaEncounters,
                    moves: pokemonInfos.moves,
                    name: pokemonInfos.name,
                    order: pokemonInfos.order,
                    pastTypes: pokemonInfos.pastTypes,
                    species: pokemonInfos.species,
                    sprites: {
                        front_default: pokemonInfos.sprites?.front_default
                    },
                    stats: pokemonInfos.stats,
                    types: pokemonInfos.types,
                    weight: pokemonInfos.weight
                }))
        } else if (favFilter[0].name === pokemonInfos.name) {
            setExist(true)
        }
    }

    return (
        <S.MainContainer>
            <S.Container key={pokemonInfos?.id}>
                <S.detailsImage source={{ uri: pokemonInfos.sprites?.front_default }} />
                <Text style={{ fontSize: 20, marginBottom: 10 }}>{pokemonInfos.name?.replace(/-/g, " ")}</Text>
                <PokeTypes types={pokemonInfos?.types} />
                <Ability abilities={pokemonInfos?.abilities} />
                <Text onPress={() => addPokemonFavorite()}>Adicionar</Text>
                {exist ? <Text>Já existe</Text> : <Text></Text>}
            </S.Container>
        </S.MainContainer>
    )
}