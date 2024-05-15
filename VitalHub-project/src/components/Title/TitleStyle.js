import styled, { css } from "styled-components";

export const Title = styled.Text`
  font-size: 20px;
  font-family: MontserratAlternates_600SemiBold;
  margin-bottom: 5px;
`;
export const TitleSelect = styled(Title)`
  margin-top: 72px;
  margin-bottom: 35px;
`;
export const TitleProfile = styled(Title)`
  margin-top: 20px;
`;
export const TitleViewPrescriptiion = styled(Title)`
  margin-top: 20px;
`;

export const ButtonTitle = styled.Text`
  font-family: MontserratAlternates_700Bold;
  font-size: 14px;
  color: white;
  padding: 12px;
  text-transform: uppercase;
`;

export const ButtonTitleGoogle = styled(ButtonTitle)`
  color: #496bba;
`;

export const TextAccount = styled.Text`
  font-family: MontserratAlternates_600SemiBold;
  font-size: 14px;
  color: #4e4b59;
`;

export const Subtitle = styled.Text`
  width: 80%;
  font-family: Quicksand_500Medium;
  font-size: 16px;
  color: #5f5c6b;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const SubtitleProfile = styled(Subtitle)`
  margin-bottom: 25px;
`;
export const SubtitleViewPrescription = styled(Subtitle)`
  margin-bottom: 25px;
  font-size: 14px;
`;

export const SubtitleMedicalRecord = styled(Subtitle)`
  margin-bottom: 25px;
`;
export const SubtitlePrescription = styled(Subtitle)`
  margin-bottom: 25px;
`;

export const BabyBlueButtonText = styled(ButtonTitle)`
  text-transform: capitalize;
  font-size: 16px;
  font-family: MontserratAlternates_600SemiBold;

  ${(props) =>
    props.selected
      ? css`
          color: white;
        `
      : css`
          color: #34898f;
        `}
`;

export const ButtonSendText = styled(ButtonTitle)`
  color: #ffffff;
  text-transform: capitalize;
  font-size: 14px;
  font-family: MontserratAlternates_700Bold;
`;

export const ButtonCancelText = styled.Text`
  color: #c81d25;
  font-size: 12px;
  font-family: MontserratAlternates_500Medium;
  text-transform: capitalize;
`;

export const InputLabel = styled.Text`
  margin-left: 41px;
  text-align: left;
  width: 100%;
  font-size: 18px;
  font-family: Quicksand_600SemiBold;
  color: #33303e;
`;

export const InputLabelModal = styled(InputLabel)`
  font-size: 18px;
  color: #000000;
  margin-left: 0%;
`;

export const LabelButtonModal = styled(InputLabel)`
  margin-top: 25px;
  font-size: 18px;
  margin-bottom: 16px;
  color: #000000;
  margin-left: 0%;
`;

export const LabelSelect = styled.Text`
  width: 90%;
  font-family: Quicksand_600SemiBold;
  font-size: 14px;
  color: black;
  margin-bottom: 10px;
  margin-top: 30px;
`;
