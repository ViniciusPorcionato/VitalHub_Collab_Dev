import styled from "styled-components";

export const AlertModalTransparent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const AlertModalContent = styled.View`
  padding: 30px 30px 10px;
  width: 90%;
  border-radius: 10px;
  align-items: center;
  background-color: white;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const AlertText = styled.Text`
  font-size: 16px;
  font-family: "MontserratAlternates_500Medium";
  text-transform: uppercase;
  color: black;
  text-align: center;
`;
