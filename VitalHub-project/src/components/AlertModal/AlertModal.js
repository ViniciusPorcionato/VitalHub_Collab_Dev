import { Modal } from "react-native";
import {
  AlertModalContent,
  AlertModalTransparent,
  AlertText,
  TitleContainer,
} from "./Style";
import { Title } from "../Title/TitleStyle";
import { Feather } from "@expo/vector-icons";
import { LinkCodeModal } from "../Links/Links";

export const AlertModal = ({
  visible,
  setShowAlertModal,
  AlertAdvise,
  ...rest
}) => {

  return (
    <Modal visible={visible} animationType="fade" transparent={true} {...rest}>
      <AlertModalTransparent>
        <AlertModalContent>
          <TitleContainer>
            <Title>AVISO</Title>
            <Feather name="alert-octagon" size={24} color="red" />
          </TitleContainer>
          <AlertText>{AlertAdvise}</AlertText>

          <LinkCodeModal onPress={() => setShowAlertModal(false)}>Fechar</LinkCodeModal>

        </AlertModalContent>
      </AlertModalTransparent>
    </Modal>
  );
};
