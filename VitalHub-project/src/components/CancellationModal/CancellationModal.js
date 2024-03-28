import { Modal } from "react-native"
import { ButtonTitle, Title } from "../Title/TitleStyle"
import { LinkCodeModal } from "../Links/Links"
import { ModalContent, ModalText, PatientModal } from "./Style"
import { ButtonModal, ButtonSecondary } from "../Button/ButtonStyle"
import { HandleCallNotifications } from "../Notification/Notification"

export const CancellationModal = ({
    navigation,
    visible,
    setShowModalCancel,
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
            <PatientModal>

                {/* Content */}
                <ModalContent>
                    
                    <Title>Cancelar consulta</Title>
                    
                    <ModalText>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</ModalText>

                    <ButtonModal  onPress = {() => {setShowModalCancel(false), HandleCallNotifications({title: "Consulta Cancelada !", body: "Sua consulta foi cancelda com sucesso !"})}} >
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ButtonModal>
                    
                    {/* <ButtonSecondary>
                        <ButtonTitleSecondary>Cancelar</ButtonTitleSecondary>
                    </ButtonSecondary> */}
                    
                    <LinkCodeModal onPress = {() => setShowModalCancel(false)}>Cancelar</LinkCodeModal>

                </ModalContent>

            </PatientModal>



        </Modal>
    )
}