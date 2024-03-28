import { Modal } from "react-native"
import { AppointmentImageModal, AppointmentModalContent, AppointmentModalText, AppointmentPatientModal } from "../AppointmentModal/Style"
import { LinkCodeModal } from "../Links/Links"
import { Button, ButtonModal } from "../Button/ButtonStyle"
import { ButtonTitle, LabelButtonModal, Title } from "../Title/TitleStyle"
import { ButtonModalContainer, ContainerMedicalRecord, ContainerModalEnd } from "../Container/ContainerStyle"
import { BookModalContainer, ModalContent } from "./BookModalStyles"
import { SmallButtonModal } from "../Button/Button"
import { LargeInputBoxModal } from "../BoxInput/BoxInput"

export const BookModal = ({
    navigation,
    visible,
    setShowModalAppointment,
    ...rest
}) => {
    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animationType="fade"
        >
            {/* Container */}
            <BookModalContainer>

                {/* Content */}
                <ModalContent>

                    <Title>Agendar consulta</Title>

                    <LabelButtonModal>Qual o nível da consulta ?</LabelButtonModal>

                    <ButtonModalContainer>

                        <SmallButtonModal text={'Rotina'} />
                        <SmallButtonModal text={'Exame'} />
                        <SmallButtonModal text={'Urgência'} />

                    </ButtonModalContainer>


                    <LargeInputBoxModal
                        fieldWidth={100}
                        placeholderTextColor={"#34898F"}
                        textLabel={"Informe a localização desejada"}
                        placeholder={"Informe a localização"}
                        editable={true}
                    />

                    <ContainerModalEnd>

                        <Button onPress={() => navigation.replace("SelectClinic")}>
                            <ButtonTitle>Continuar</ButtonTitle>
                        </Button>

                        <LinkCodeModal onPress={() => setShowModalAppointment(false)}>Cancelar</LinkCodeModal>

                    </ContainerModalEnd>


                </ModalContent>

            </BookModalContainer>



        </Modal>
    )
}