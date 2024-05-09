import { Modal } from "react-native";
import { ButtonTitle, Title } from "../Title/TitleStyle";
import { LinkCodeModal } from "../Links/Links";
import { ModalContent, ModalText, PatientModal } from "./Style";
import { ButtonModal, ButtonSecondary } from "../Button/ButtonStyle";
import { HandleCallNotifications } from "../Notification/Notification";
import api from "../../Service/Service";

export const CancellationModal = ({
  navigation,
  visible,
  setShowModalCancel,
  setSituacao,
  consulta,
  ...rest
}) => {
    
  //Funcao para lidar com a chamada de notificacao
  const HandleCallNotifications = async () => {
    await api
      .put(`Consultas/Status?idConsulta=${consulta.id}&status=Cancelado`)
      .then(() => {
        setSituacao("Canceladas");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      {/* Container */}
      <PatientModal>
        {/* Content */}
        <ModalContent>
          <Title>Cancelar consulta</Title>

          <ModalText>
            Ao cancelar essa consulta, abrirá uma possível disponibilidade no
            seu horário, deseja mesmo cancelar essa consulta?
          </ModalText>

          <ButtonModal
            onPress={() => {
              setShowModalCancel(false), HandleCallNotifications();
            }}
          >
            <ButtonTitle>Confirmar</ButtonTitle>
          </ButtonModal>

          {/* <ButtonSecondary>
                        <ButtonTitleSecondary>Cancelar</ButtonTitleSecondary>
                    </ButtonSecondary> */}

          <LinkCodeModal onPress={() => setShowModalCancel(false)}>
            Cancelar
          </LinkCodeModal>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};
