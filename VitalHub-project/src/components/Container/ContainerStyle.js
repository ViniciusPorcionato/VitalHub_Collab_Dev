import styled from "styled-components";
import {LinearGradient} from "expo-linear-gradient";


export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: ${props => props.theme.background};
`

export const ContentAccount = styled.SafeAreaView`
    width: 100%;
    gap: 5px;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
`

export const ConteinerIcon = styled.TouchableOpacity `
    width: 10%;
    justify-content: left;
    align-self: flex-start;
    margin-left: 15px;
    padding-top: 10px;
`

export const ContainerInputEmail = styled.SafeAreaView`
    width: 90%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`

export const ScrollProfile = styled.ScrollView`
    height: 80%;

`
export const ScrollViewPrescriptiion = styled.ScrollView`
    height: 80%;

`

export const ContainerInput = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const ContainerMedicalRecord = styled.View`
flex-direction: row;
justify-content: space-around;
`


export const ContainerHeader = styled(LinearGradient).attrs({
    colors: ["#60BFC5", "#496BBA"],
    start: {x: -0.05, y: 1.08 },
    end: {x: 1, y: 0}
})`

width: 100%;
padding: 20px 20px 22px 20px;

border-radius: 0px 0px 15px 15px;
box-shadow: 0px 4px 15px #00000014;

flex-direction: row;
align-items: center;
justify-content: space-evenly;
`

export const ButtonModalContainer = styled.SafeAreaView`
    width:100%;
    flex-direction: row;
    gap: 15px;
`

export const ContainerModalEnd = styled.View`
width: 100%;
align-items: center;
margin-top: 200px;
`

export const ContainerPrescription = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-around;
align-items: center;
`
export const ContainerViewPrescriptiion = styled.View`
width: 50%;
justify-content: space-evenly;
flex-direction: row;
align-items: center;
`

export const ContainerViewPrescriptionButton = styled.View`
width: 90%;
justify-content: space-between;
flex-direction: row;
margin-bottom: 30px;
`

export const ContainerCamera = styled.View`
width: 90%;
flex-direction: row;
justify-content: space-evenly;
padding-left: 60px;
`

