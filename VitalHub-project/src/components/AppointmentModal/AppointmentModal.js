import { Modal } from "react-native";
import {
  AppointmentImageModal,
  AppointmentModalContent,
  AppointmentModalText,
  AppointmentPatientModal,
} from "./Style";
import { LinkCodeModal } from "../Links/Links";
import { ButtonModal } from "../Button/ButtonStyle";
import { ButtonTitle, Title } from "../Title/TitleStyle";
import { ContainerMedicalRecord } from "../Container/ContainerStyle";
import { useEffect } from "react";
import moment from "moment";

export const AppointmentModal = ({
  navigation,
  roleUsuario,
  visible,
  setShowModalAppointment,
  route,
  consulta,
  setSituacao,
  ...rest
}) => {
  // console.log(route.params.consulta);

  //Funcao para lidar com a chamada de notificacao
  const HandleCallNotifications = async () => {
    await api
      .put(`Consultas/Status?idConsulta=${consulta.id}&status=Agendado`)
      .then(() => {
        setSituacao("Canceladas");
      })
      .catch((error) => {
        console.log(error);
      });

    navigation.replace("MedicalRecord", {
      consulta: consulta.id,
    });
  };

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      {consulta != null && (
        //  Container
        <AppointmentPatientModal>
          {/* Content  */}
          <AppointmentModalContent>
            <AppointmentImageModal
              source={{ uri: consulta.paciente.idNavigation.foto }}
            />

            <Title>{consulta.paciente.idNavigation.nome}</Title>

            <ContainerMedicalRecord>
              <AppointmentModalText>
                {`${
                  moment().year() -
                  moment(consulta.paciente.dataNascimento).format("YYYY")
                } anos`}
              </AppointmentModalText>
              <AppointmentModalText>
                {consulta.paciente.idNavigation.email}
              </AppointmentModalText>
            </ContainerMedicalRecord>

            <ButtonModal
              onPress={() => {
                HandleCallNotifications();
              }}
            >
              <ButtonTitle>Inserir Prontuário</ButtonTitle>
            </ButtonModal>

            <LinkCodeModal onPress={() => setShowModalAppointment(false)}>
              Cancelar
            </LinkCodeModal>
          </AppointmentModalContent>
        </AppointmentPatientModal>
      )}
    </Modal>
  );
};
