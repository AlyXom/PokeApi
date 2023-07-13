import React from "react";
import { Text, View } from "react-native";
import { S } from "../styledComponents/styles";

export default function TypesInfo(props: {typeName: string}) {
    return (
        <View key={props.typeName}>
            {
            props.typeName == 'grass'
            ? <S.types style={{backgroundColor: '#78c850'}}>{props.typeName}</S.types>
            :props.typeName == 'poison'
            ? <S.types style={{backgroundColor: '#a040a0'}}>{props.typeName}</S.types> 
            :props.typeName == 'fire'
            ? <S.types style={{backgroundColor: '#f08030'}}>{props.typeName}</S.types> 
            :props.typeName == 'flying'
            ? <S.types style={{backgroundColor: '#a890f0'}}>{props.typeName}</S.types>
            :props.typeName == 'normal'
            ? <S.types style={{backgroundColor: '#a8a878'}}>{props.typeName}</S.types>
            :props.typeName == 'water'
            ? <S.types style={{backgroundColor: '#6890f0'}}>{props.typeName}</S.types>
            :props.typeName == 'electric'
            ? <S.types style={{backgroundColor: '#f8d030'}}>{props.typeName}</S.types>
            :props.typeName == 'ice'
            ? <S.types style={{backgroundColor: '#98d8d8'}}>{props.typeName}</S.types>
            :props.typeName == 'ground'
            ? <S.types style={{backgroundColor: '#dfc068'}}>{props.typeName}</S.types>
            :props.typeName == 'fighting'
            ? <S.types style={{backgroundColor: '#c03028'}}>{props.typeName}</S.types>
            :props.typeName == 'psychic'
            ? <S.types style={{backgroundColor: '#f85888'}}>{props.typeName}</S.types>
            :props.typeName == 'dark'
            ? <S.types style={{backgroundColor: '#705848'}}>{props.typeName}</S.types>
            :props.typeName == 'rock'
            ? <S.types style={{backgroundColor: '#b8a038'}}>{props.typeName}</S.types>
            :props.typeName == 'bug'
            ? <S.types style={{backgroundColor: '#a8b820'}}>{props.typeName}</S.types>
            :props.typeName == 'ghost'
            ? <S.types style={{backgroundColor: '#705898'}}>{props.typeName}</S.types>
            :props.typeName == 'steel'
            ? <S.types style={{backgroundColor: '#b8b8d1'}}>{props.typeName}</S.types>
            :props.typeName == 'dragon'
            ? <S.types style={{backgroundColor: '#7038f8'}}>{props.typeName}</S.types>
            :props.typeName == 'fairy'
            ? <S.types style={{backgroundColor: '#ffaec9'}}>{props.typeName}</S.types>
            : <S.types style={{backgroundColor: '#f0f0f0'}}>undefined</S.types>}
        </View>
    )
}