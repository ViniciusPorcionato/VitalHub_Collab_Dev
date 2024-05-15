import { Modal } from "react-native";
import {
  AppointmentImageModal,
  AppointmentModalContent,
  AppointmentModalText,
  AppointmentPatientModal,
} from "../AppointmentModal/Style";
import { LinkCodeModal } from "../Links/Links";
import { Button, ButtonModal } from "../Button/ButtonStyle";
import { ButtonTitle, LabelButtonModal, Title } from "../Title/TitleStyle";
import {
  ButtonModalContainer,
  ContainerMedicalRecord,
  ContainerModalEnd,
} from "../Container/ContainerStyle";
import { BookModalContainer, ModalContent } from "./BookModalStyles";
import { SmallButtonModal } from "../Button/Button";
import { LargeInputBoxModal } from "../BoxInput/BoxInput";
import { useState } from "react";
import { AlertModal } from "../AlertModal/AlertModal";

export const BookModal = ({
  navigation,
  visible,
  setShowModalAppointment,
  ...rest
}) => {
  const [agendamento, setAgendamento] = useState(null);

  const [showAlertModal, setShowAlertModal] = useState(false);

  async function handleContinue() {
    if (agendamento.prioridadeId && agendamento.localizacao) {
      await setShowModalAppointment(false);
      navigation.replace("SelectClinic", { agendamento: agendamento });
    }
  }

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      {/* Container */}
      <BookModalContainer>
        {/* Content */}
        <ModalContent>
          <Title>Agendar consulta</Title>

          <LabelButtonModal>Qual o nível da consulta ?</LabelButtonModal>

          <ButtonModalContainer>
            <SmallButtonModal
              text={"Rotina"}
              onPress={() =>
                setAgendamento({
                  ...agendamento, //Manter as informações que ja existe dentro do state
                  prioridadeId: "39854132-73A5-441A-946B-6rADDEB6A5CE4",
                  prioridadeLabel: "Rotina",
                })
              }
              selected={agendamento && agendamento.prioridadeLabel === "Rotina"}
            />
            <SmallButtonModal
              text={"Exame"}
              onPress={() =>
                setAgendamento({
                  ...agendamento, //Manter as informações que ja existe dentro do state
                  prioridadeId: "56591A49-0E1F-4D04-AB0D-71D06C21CFEE",
                  prioridadeLabel: "Exame",
                })
              }
              selected={agendamento && agendamento.prioridadeLabel === "Exame"}
            />
            <SmallButtonModal
              text={"Urgência"}
              onPress={() =>
                setAgendamento({
                  ...agendamento, //Manter as informações que ja existe dentro do state
                  prioridadeId: "D8141A81-A185-45BD-AEEE-A9E416669BF7",
                  prioridadeLabel: "Urgência",
                })
              }
              selected={agendamento && agendamento.prioridadeLabel === "Urgência"}
            />
          </ButtonModalContainer>

          <LargeInputBoxModal
            fieldWidth={100}
            placeholderTextColor={"#34898F"}
            textLabel={"Informe a localização desejada"}
            placeholder={"Informe a localização"}
            editable={true}
            onChangeText={(txt) =>
              setAgendamento({
                ...agendamento, //Manter as informações que ja existe dentro do state
                localizacao: txt,
              })
            }
            fieldValue={agendamento ? agendamento.localizacao : null}
          />

          <ContainerModalEnd>
            <Button onPress={() => handleContinue()}>
              <ButtonTitle>Continuar</ButtonTitle>
            </Button>

            <LinkCodeModal onPress={() => setShowModalAppointment(false)}>
              Cancelar
            </LinkCodeModal>
          </ContainerModalEnd>
        </ModalContent>
      </BookModalContainer>
    </Modal>
  );
};
