import { Modal } from "react-native";
import { LinkCodeModal } from "../Links/Links";
import { ButtonModal } from "../Button/ButtonStyle";
import { ButtonTitle, Title } from "../Title/TitleStyle";
import { ContainerMedicalRecord } from "../Container/ContainerStyle";
import {
  ContainerQueryMedical,
  QueryImageModal,
  QueryModal,
  QueryModalContent,
  QueryModalText,
} from "./Styles";
import { useEffect } from "react";

export const QueryDoctorModal = ({
  consulta,
  roleUsuario,
  navigation,
  visible,
  setShowQueryModal,
  route,
  // setShowModalAppointmentQuery,
  ...rest
}) => {
  function handlePress(rota) {
    setShowQueryModal(false); // fechar o modal

    //acesso a rota passando o id entre as navegações
    navigation.replace(rota, { clinicaId: consulta.medicoClinica.clinicaId });
  }

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      {consulta != null && (
        <QueryModal>
          <QueryModalContent>
            <QueryImageModal source={{uri: consulta.medicoClinica.medico.idNavigation.foto}} />

            <Title>{consulta.medicoClinica.medico.idNavigation.nome}</Title>

            <ContainerQueryMedical>
              <QueryModalText>{consulta.medicoClinica.medico.especialidade.especialidade1}</QueryModalText>
              <QueryModalText>{`CRM - ${consulta.medicoClinica.medico.crm}`}</QueryModalText>
            </ContainerQueryMedical>

            {/* <ButtonModal onPress={() => navigation.replace("ConsultationLocation")}> */}
            <ButtonModal onPress={() => handlePress("ConsultationLocation")}>
              <ButtonTitle>Ver Local da Consulta</ButtonTitle>
            </ButtonModal>

            <LinkCodeModal onPress={() => setShowQueryModal(false)}>
              Cancelar
            </LinkCodeModal>
          </QueryModalContent>
        </QueryModal>
      )}
    </Modal>
  );
};
