import { View, Text } from 'react-native'

interface props {
    text: string
}


export default function Card({text}:props) {
    return (
        <View>
            <Text>{text}</Text>
        </View>
    )
}