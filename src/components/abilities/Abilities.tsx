import React from "react";
import { View, Text } from "react-native";

export default function Ability(props: {abilities: [{}]}) {
    const abilitys = props.abilities


    return (
        <View>
            <View style={{ flexDirection: 'row', gap: 10, marginTop: 10, flexWrap: "wrap", width: '80%' }}>
                {abilitys.map((item: { ability?: { name: string, url: string } }, index: number) => {
                    return (
                        <Text
                            style={{
                                backgroundColor: '#efeeef',
                                borderRadius: 5,
                                padding: 19,
                                fontSize: 15
                            }}
                            key={index}>
                            {item?.ability?.name.replace(/-/g, " ")}
                        </Text>
                    )
                })}
            </View>
        </View>
    )
}