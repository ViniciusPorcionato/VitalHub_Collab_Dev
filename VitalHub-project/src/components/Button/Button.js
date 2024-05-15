import {
  BabyBlueButtonText,
  ButtonCancelText,
  ButtonSendText,
} from "../Title/TitleStyle";
import { ButtonCancel, ButtonSend, SmallButton } from "./ButtonStyle";
import { MaterialIcons } from "@expo/vector-icons";

export const SmallButtonModal = ({ onPress, selected = false, text }) => {
  return (
    <SmallButton onPress={onPress} selected={selected}>
      <BabyBlueButtonText selected={selected}>{text}</BabyBlueButtonText>
    </SmallButton>
  );
};

export const ButtonSendPrescription = ({ onPress, text }) => {
  return (
    <ButtonSend onPress={onPress}>
      <MaterialIcons name="add-a-photo" size={24} color="white" />
      <ButtonSendText>{text}</ButtonSendText>
    </ButtonSend>
  );
};

export const ButtonCanceled = ({ onPress, text }) => {
  return (
    <ButtonCancel onPress={onPress}>
      <ButtonCancelText>{text}</ButtonCancelText>
    </ButtonCancel>
  );
};
