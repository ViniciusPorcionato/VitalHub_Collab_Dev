import styled from "styled-components";

export const ContainerCardList = styled.TouchableOpacity`
width: 90%;
margin: 0px auto;
margin-bottom: 12px;
padding: 10px;
border-radius: 5px;
background-color: #FFFFFF;
flex-direction: row;
height: 105px;
gap: 10px;
elevation: 5px;
/* box-shadow: 4px 4px 15px rgba(0,0,0, 0.08); */
`

export const ContainerCardListClinic = styled(ContainerCardList)`
height: 84px;
justify-content: space-around;
`

export const ProfileImage = styled.Image`
width: 77px;
height: 80px;
border-radius: 5px;
`

export const ContentCard = styled.View`
    width: 70%;
    gap: 11px;
`
export const ContentMedCard = styled(ContentCard)`
    justify-content: center;
    width: 65%;
`

export const DataProfileCard = styled.View`
gap: 6px;
`
export const DataClinicCard = styled.View`
gap: 10px;
margin-left: 18px;
`

export const ProfileName = styled.Text`
font-size: 16px;
font-family: MontserratAlternates_600SemiBold;
`

export const ProfileData = styled.View`
flex-direction: row;
gap: 15px;
`

export const TextAge = styled.Text`
font-size: 14px;
font-family: Quicksand_400Regular;
`

export const TextBold = styled.Text`
font-family: Quicksand_600SemiBold;
font-size: 14px;    
color: ${(props) => props.situacao == "pendente" ? "#49B3BA" : "#8C8A97"};
`
export const TextBoldClinic = styled(TextBold)`
color: #4E4B59 ;
`

export const ViewRow = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
justify-content: space-between;
`

export const ClockCard = styled.View`
flex-direction: row;
gap: 6px;
padding: 4px 23px;
border-radius: 5px;
align-items: center;
background-color: ${(props) => props.situacao == "pendente" ? "#E8FCFD" : "#F1F0F5"};
`

export const ButtonCard = styled.TouchableOpacity`

`
export const ButtonTextCard = styled.Text`
font-size: 12px;
font-family: MontserratAlternates_500Medium;
color: ${(props) => props.situacao == "pendente" ? "#C81D25" : "#344F8F"};
`

// CARD SELECT CLINIC

export const ContainerRateTime = styled.SafeAreaView`
width: 100px;
height: 56px;
margin-top: 5px;
/* border: 1px solid black; */
align-items: flex-end;
justify-content: space-between;
`
export const ContainerRate = styled.SafeAreaView`
width: 42px;
height: 20px;
/* border: 1px solid black; */
flex-direction: row;
justify-content: space-between;
`
export const RateText = styled.Text`
font-family: Quicksand_600SemiBold;
font-size: 14px;
color: #F9A620;
`
export const HourText = styled(RateText)`
color: #49B3BA;
margin-right: 10px;

`
export const ContainerDate = styled.SafeAreaView`
width: 100%;
height: 26px;
background-color: #E8FCFD;
flex-direction: row;
align-items: center;
justify-content: flex-end;
gap: 2px;
border-radius: 5px;


/* border: 1px solid black; */
/* align-items: flex-end; */
`
