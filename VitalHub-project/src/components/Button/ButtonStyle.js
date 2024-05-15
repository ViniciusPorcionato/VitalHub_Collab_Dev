import styled, { css } from "styled-components";

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 44px;
  border-radius: 5px;
  background-color: #496bba;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  border: 1px solid #496bba;
`;

export const ButtonEdit = styled(Button)`
  background-color: #acabb7;
  border: 1px solid #acabb7;
`;

export const ButtonExit = styled(Button)`
  background-color: #acabb7;
  border: 1px solid #acabb7;
  width: 50%;
  margin-top: -20px;
  margin-bottom: 20px;
`;

export const ButtonProfile = styled(Button)`
  margin-bottom: 50px;
  height: 44px;
`;

export const ButtonGoogle = styled(Button)`
  background-color: #fafafa;
  gap: 27px;
  flex-direction: row;
  margin-top: 15px;
`;
export const ButtonModal = styled(Button)`
  width: 100%;
`;
// export const ButtonSecondary = styled(Button)`
//     border: none;
//     background-color: transparent;
//     margin-bottom: 30px;
// `

export const SmallButton = styled.TouchableOpacity`
  width: 30%;
  height: 55px;
  padding-top: 5px;
  font-family: "MontserratAlternates_600SemiBold";

  border-radius: 10px;
  display: flex;
  align-items: center;

  ${(props) =>
    props.selected
      ? css`
          background-color: #496bba;
          
        `
      : css`
          background-color: transparent;
          border: 2px solid #60bfc5;
        `}
`;

export const ButtonSend = styled.TouchableOpacity`
  width: 172px;
  height: 44px;
  background-color: #49b3ba;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  flex-direction: row;
`;

export const ButtonCancel = styled.TouchableOpacity`
  width: 172px;
  height: 44px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

export const ButtonCamera = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #fbfbfb;
  background-color: #496bba;
  position: absolute;
  right: 15px;
  bottom: -20px;
`;
