import styled from "styled-components";

export const Line = styled.View`
width: 90%;
height: 2px;
border: 1px solid #8C8A97;
border-bottom: 20px;
`

export const ImportImages = styled.View`
height: 180px;
width: 358px;
border-radius: 10px;
margin-top: 10px;
margin-bottom: 12px;
background-color: #E6E6E6;
border-color: transparent;
font-family: "MontserratAlternates_500Medium";
align-items: center;
justify-content: center;
`

export const ImagePrescription = styled.Image`
width: 220px;
height: 24px;
align-self: center;
`


export const BoxViewImageImport = styled.SafeAreaView`
  margin-top: 18px;
  width: 90%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;