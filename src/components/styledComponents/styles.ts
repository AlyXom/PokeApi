import styled from "styled-components/native";

export const S = {
    MainContainer: styled.View`
        flex: 1;
        justify-content: center;
        align-items: center;
        background-color: #ce1515;
    `,
    Container: styled.View`
        width: 95%;
        background-color: #fff;
        align-items: center;
        border-radius: 10px;
    `,
    NextAndPrevious: styled.Text`
        border-radius: 15px;
        padding: 8px;
        margin-left: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
        text-align: center;
        justify-content: center;
        color: #fff;
        font-weight: 500;
    `,
    types: styled.Text`
        border-radius: 10px;
        padding: 10px;
        margin-left: 10px;
    `,
    detailsImage: styled.Image`
        width: 150px;
        height: 150px;
    `
}