import styled from "styled-components"

export const ConfirmModalContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.60);
`

export const ConfirmModalContent = styled.View`
    padding: 30px 30px 10px;
    width: 90%;
    height: 80%;
    padding: 14px;
    border-radius: 10px;
    background-color: #fff;

    justify-content: flex-start;
    gap: 10px;
    align-items: center;
`
export const ConfirmModalText = styled.Text`
    width: 279px;
    font-size: 16px;
    color: black;
    line-height: 22px;
    text-align: center;
    margin-top: 11px;
    font-family: "Quicksand_500Medium";
`
export const ConfirmTitle = styled.Text`
    font-size: 16px;
    color: #33303E;
    line-height: 22px;
    text-align: left;
    margin-top: 20px;
    font-family: "Quicksand_600SemiBold";
`
export const ConfirmSubTitle = styled.Text`
    font-size: 14px;
    color: #4E4B59;
    line-height: 22px;
    font-family: "Quicksand_500Medium";
    text-align: left;
    margin-top: 8px;
`
export const ContainerSub = styled.View`
    width: 90%;
    height: 60%;
`

export const ContainerModalConfirm = styled.View`
width: 100%;
align-items: center;
margin-bottom: 15px;
`