import { Modal } from "react-native"
import { ConfirmModalContainer, ConfirmModalContent, ConfirmModalText, ConfirmSubTitle, ConfirmTitle, ContainerModalConfirm, ContainerSub } from "./Style"
import { ButtonTitle, Title } from "../Title/TitleStyle"
import { Button } from "../Button/ButtonStyle"
import { LinkCodeModal } from "../Links/Links"

export const ConfirmModal = ({
    navigation,
    visible,
    setShowConfirmModal,
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
            <ConfirmModalContainer>

                {/* Content */}
                <ConfirmModalContent>

                    <Title>Agendar consulta</Title>

                    <ConfirmModalText>Consulte os dados selecionados para a sua consulta</ConfirmModalText>

                    <ContainerSub>
                        
                        <ConfirmTitle>Data da consulta</ConfirmTitle>
                        <ConfirmSubTitle>1 de Novembro de 2023</ConfirmSubTitle>

                        <ConfirmTitle>Médico(a) da consulta</ConfirmTitle>
                        <ConfirmSubTitle>Dra Alessandra</ConfirmSubTitle>
                        <ConfirmSubTitle>Demartologa, Esteticista</ConfirmSubTitle>

                        <ConfirmTitle>Local da consulta</ConfirmTitle>
                        <ConfirmSubTitle>São Paulo, SP</ConfirmSubTitle>

                        <ConfirmTitle>Tipo da consulta</ConfirmTitle>
                        <ConfirmSubTitle>Rotina</ConfirmSubTitle>

                    </ContainerSub>

                    <ContainerModalConfirm>

                        <Button onPress={() => navigation.replace("Main")}>
                            <ButtonTitle>Confirmar</ButtonTitle>
                        </Button>

                        <LinkCodeModal onPress={() => setShowConfirmModal(false)}>Cancelar</LinkCodeModal>

                    </ContainerModalConfirm>


                </ConfirmModalContent>

            </ConfirmModalContainer>

        </Modal>
    )
}