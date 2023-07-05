import styled from "styled-components/native";

export const S = {
    MainContainer: styled.View`
        flex: 1;
        justify-content: center;
        align-items: center;
        background-color: #f43c2c;
    `,
    Container: styled.View`
        width: 95%;
        background-color: aquamarine;
        align-items: center;
    `,
    NextAndPrevious: styled.Text`
        border-radius: 15px;
        background-color: beige;
        padding: 8px;
        margin-left: 10px;
        text-align: center;
        justify-content: center;
    `,
    types: styled.Text`
        border-radius: 10px;
        padding: 10px;
        margin-left: 10px;
    `
}