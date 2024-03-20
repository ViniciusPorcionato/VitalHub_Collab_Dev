import { Modal } from "react-native"
import { LinkCodeModal } from "../Links/Links"
import { ButtonModal } from "../Button/ButtonStyle"
import { ButtonTitle, Title } from "../Title/TitleStyle"
import { ContainerMedicalRecord } from "../Container/ContainerStyle"
import { ContainerQueryMedical, QueryImageModal, QueryModal, QueryModalContent, QueryModalText } from "./Styles"

export const QueryDoctorModal = ({
    navigation,
    visible,
    setShowQueryModal,
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
            <QueryModal>

                {/* Content */}
                <QueryModalContent>

                    <QueryImageModal source={require('../../assets/MedImage.png')} />

                    <Title>Dr. Claudio</Title>
                   
                    <ContainerQueryMedical>
                        
                        <QueryModalText>Clinico Geral</QueryModalText>
                        <QueryModalText>CRM-15286</QueryModalText>

                    </ContainerQueryMedical>
 
                    <ButtonModal onPress={() => navigation.replace("ConsultationLocation")}>
                        <ButtonTitle>Ver Local da Consulta</ButtonTitle>
                    </ButtonModal>

                    {/* <ButtonSecondary>
                        <ButtonTitleSecondary>Cancelar</ButtonTitleSecondary>
                    </ButtonSecondary> */}

                    <LinkCodeModal onPress={() => setShowModalAppointment(false)}>Cancelar</LinkCodeModal>

                </QueryModalContent>

            </QueryModal>



        </Modal>
    )
}