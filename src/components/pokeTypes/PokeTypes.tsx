import React from "react";
import { View, Text } from "react-native";
import TypesInfo from "./types";

interface typesInfo{
    slot: number,
    type: {
        name: string,
        url: string
    }
}

export default function PokeTypes(props: {types: [{slot: number, type: {name: string, url: string}}]}) {
    const types = props.types

    return (
        <View style={{flexDirection: 'row'}}>
            {types.map((item: {slot: number, type: {name: string, url: string}}) => {
                return (
                    <TypesInfo typeName={item.type.name}/>
                )
            })}
        </View>
    )
}