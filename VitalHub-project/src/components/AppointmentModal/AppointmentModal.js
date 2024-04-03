import { Modal } from "react-native"
import { AppointmentImageModal, AppointmentModalContent, AppointmentModalText, AppointmentPatientModal } from "./Style"
import { LinkCodeModal } from "../Links/Links"
import { ButtonModal } from "../Button/ButtonStyle"
import { ButtonTitle, Title } from "../Title/TitleStyle"
import { ContainerMedicalRecord } from "../Container/ContainerStyle"

export const AppointmentModal = ({
    navigation,
    consulta,
    roleUsuario,
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
            <AppointmentPatientModal>

                {/* Content */}
                <AppointmentModalContent>

                    <AppointmentImageModal source={require('../../assets/appointmentmodal.png')} />

                    <Title>Niccole Sarga</Title>
                   
                    <ContainerMedicalRecord>
                        
                        <AppointmentModalText>22 anos</AppointmentModalText>
                        <AppointmentModalText>niccole.sarga@gmail.com</AppointmentModalText>

                    </ContainerMedicalRecord>

                    <ButtonModal onPress={() => navigation.replace("MedicalRecord")}>
                        <ButtonTitle>Inserir Prontuário</ButtonTitle>
                    </ButtonModal>

                    <LinkCodeModal onPress={() => setShowModalAppointment(false)}>Cancelar</LinkCodeModal>

                </AppointmentModalContent>

            </AppointmentPatientModal>



        </Modal>
    )
}