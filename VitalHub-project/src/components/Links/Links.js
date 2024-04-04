import styled from "styled-components";

export const LinkMedium = styled.Text`
    font-family: MontserratAlternates_500Medium;
    font-size: 14px;
    color: #8C8A97;
    margin-top: 10px;
    text-decoration: underline;
    align-self: flex-start;
    margin-left: 20px;
`
export const LinkAccount = styled.Text`
     font-family: MontserratAlternates_600SemiBold;
     font-size: 14px;
     color: #4D659D;
     text-decoration: underline;
`

export const LinkCode = styled(LinkAccount)`
    margin-top: 30px;
    margin-bottom: 50px;
`
export const LinkCodeModal = styled(LinkAccount)`
    margin-top: 30px;
    margin-bottom: 26px;
`

export const LinkLocation = styled(LinkAccount)`
margin-top: 50px;
`

export const LinkBack = styled(LinkAccount)`
margin-top: 20px;
margin-bottom: 30px;
`
