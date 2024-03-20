import { BoxInputPrescriptionView, BoxInputViewPrescription } from "../../components/BoxInput/BoxInput"
import { ButtonCanceled, ButtonSendPrescription } from "../../components/Button/Button"
import { Container, ContainerViewPrescriptiion, ContainerViewPrescriptionButton, ScrollViewPrescriptiion } from "../../components/Container/ContainerStyle"
import { LinkBack } from "../../components/Links/Links"
import { ViewPrescriptiionImage } from "../../components/Logo/LogoStyle"
import { SubtitleViewPrescription, TitleViewPrescriptiion } from "../../components/Title/TitleStyle"
import { BoxViewImageImport, ImagePrescription, ImportImages, Line } from "./Styles"
import { useEffect } from "react"

export const ViewPrescription = ({ navigation, route }) => {

    useEffect(() => {

        console.log(route.params);

    }, [route.params])

    return (
        <ScrollViewPrescriptiion>

            <Container>

                <ViewPrescriptiionImage
                    source={require('../../assets/MedicalImage.png')}
                />

                <TitleViewPrescriptiion>Dr. Claudio</TitleViewPrescriptiion>

                <ContainerViewPrescriptiion>

                    <SubtitleViewPrescription>Cliníco geral</SubtitleViewPrescription>
                    <SubtitleViewPrescription>CRM-15286</SubtitleViewPrescription>

                </ContainerViewPrescriptiion>

                <BoxInputViewPrescription
                    fieldWidth={100}
                    fieldHeight={121}
                    textLabel={'Descrição da consulta'}
                    keyType="text"
                />

                <BoxInputPrescriptionView
                    fieldWidth={100}
                    fieldHeight={53}
                    textLabel={'Diagnóstico do paciente'}
                    keyType="text"
                />

                <BoxInputViewPrescription
                    fieldWidth={100}
                    fieldHeight={121}
                    textLabel={'Prescrição médica'}
                    keyType="text"
                />

                <BoxViewImageImport>

                    <ImportImages>
                        {route.params ? <ImagePrescription source={{ uri: route.params.photoUri }} /> : <ImagePrescription source={require("../../assets/InsertExams.png")} />}
                    </ImportImages>

                </BoxViewImageImport>



                <ContainerViewPrescriptionButton>

                    <ButtonSendPrescription text={'Enviar'} onPress={() => navigation.replace("CameraPrescription")} />

                    <ButtonCanceled text={'Cancelar'} />

                </ContainerViewPrescriptionButton>

                <Line></Line>

                <BoxInputViewPrescription
                    fieldWidth={100}
                    fieldHeight={121}
                    keyType="text"
                    editable={false}
                />

                <LinkBack onPress={() => navigation.replace("Main")} >Voltar</LinkBack>

            </Container>

        </ScrollViewPrescriptiion>
    )
}