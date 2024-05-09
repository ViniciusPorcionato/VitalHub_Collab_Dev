import { ActivityIndicator, Modal } from "react-native"
import { ConfirmModalContainer, ConfirmModalContent, ConfirmModalText, ConfirmSubTitle, ConfirmTitle, ContainerModalConfirm, ContainerSub } from "./Style"
import { ButtonTitle, Title } from "../Title/TitleStyle"
import { Button } from "../Button/ButtonStyle"
import { LinkCodeModal } from "../Links/Links"
import moment from "moment"
import { useEffect, useState } from "react"
import api from "../../Service/Service"
import { userDecodeToken } from "../../Utils/Auth"

export const ConfirmModal = ({
    navigation,
    visible,
    setShowConfirmModal,
    agendamento,
    ...rest
}) => {

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        profileLoad();
    }, [])


    async function profileLoad() {
        const token = await userDecodeToken()
        setProfile(token)
    }

    async function handleConfirm() {
        await api.post(`/Consultas/Cadastrar`, {
            ...agendamento,
            pacienteId: profile.id,
            situacaoId: 'AD2E8A0A-F1F9-4883-8561-EDA517806608'
        }).then(async () => {
            await setShowConfirmModal(false)

            navigation.replace("Main")
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animationType="fade"
        >
            <ConfirmModalContainer>

                {
                    agendamento ? (

                        <ConfirmModalContent>

                            <Title>Agendar consulta</Title>

                            <ConfirmModalText>Consulte os dados selecionados para a sua consulta</ConfirmModalText>

                            <ContainerSub>

                                <ConfirmTitle>Data da consulta</ConfirmTitle>
                                <ConfirmSubTitle>{moment(agendamento.dataConsulta).format("DD/MM/YYYY HH:mm")}</ConfirmSubTitle>

                                <ConfirmTitle>Médico(a) da consulta</ConfirmTitle>
                                <ConfirmSubTitle>{agendamento.medicoNome}</ConfirmSubTitle>
                                <ConfirmSubTitle>{agendamento.medicoEspecialidade}</ConfirmSubTitle>

                                <ConfirmTitle>Local da consulta</ConfirmTitle>
                                <ConfirmSubTitle>{agendamento.localizacao}</ConfirmSubTitle>

                                <ConfirmTitle>Tipo da consulta</ConfirmTitle>
                                <ConfirmSubTitle>{agendamento.prioridadeLabel}</ConfirmSubTitle>

                            </ContainerSub>

                            <ContainerModalConfirm>

                                <Button onPress={() => handleConfirm()}>
                                    <ButtonTitle>Confirmar</ButtonTitle>
                                </Button>

                                <LinkCodeModal onPress={() => setShowConfirmModal(false)}>Cancelar</LinkCodeModal>

                            </ContainerModalConfirm>


                        </ConfirmModalContent>
                    ) : (
                        <ActivityIndicator />
                    )
                }


            </ConfirmModalContainer>

        </Modal>
    )
}