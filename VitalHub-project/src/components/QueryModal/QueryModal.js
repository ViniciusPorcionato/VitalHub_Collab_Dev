import { Modal } from "react-native"
import { LinkCodeModal } from "../Links/Links"
import { ButtonModal } from "../Button/ButtonStyle"
import { ButtonTitle, Title } from "../Title/TitleStyle"
import { ContainerMedicalRecord } from "../Container/ContainerStyle"
import { ContainerQueryMedical, QueryImageModal, QueryModal, QueryModalContent, QueryModalText } from "./Styles"

export const QueryDoctorModal = ({
    consulta,
    roleUsuario,
    navigation,
    visible,
    setShowQueryModal,
    // setShowModalAppointmentQuery,
    ...rest
}) => {

    function handlePress(rota) {
        setShowQueryModal(false)// fechar o modal

        //acesso a rota passando o id entre as navegações
        navigation.replace(rota, {clinicaId : consulta.medicoClinica.clinicaId})
        
    }

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
 
                    {/* <ButtonModal onPress={() => navigation.replace("ConsultationLocation")}> */}
                    <ButtonModal onPress={() => handlePress('ConsultationLocation')}>
                        <ButtonTitle>Ver Local da Consulta</ButtonTitle>
                    </ButtonModal>

                    <LinkCodeModal onPress={() => setShowQueryModal(false)}>Cancelar</LinkCodeModal>

                </QueryModalContent>

            </QueryModal>
            
        </Modal>
    )
}