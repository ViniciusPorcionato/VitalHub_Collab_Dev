import { BoxInputPrescriptionView, BoxInputViewPrescription } from "../../components/BoxInput/BoxInput"
import { ButtonCanceled, ButtonSendPrescription } from "../../components/Button/Button"
import { Container, ContainerViewPrescriptiion, ContainerViewPrescriptionButton, ScrollViewPrescriptiion } from "../../components/Container/ContainerStyle"
import { LinkBack } from "../../components/Links/Links"
import { ViewPrescriptiionImage } from "../../components/Logo/LogoStyle"
import { SubtitleViewPrescription, TitleViewPrescriptiion } from "../../components/Title/TitleStyle"
import { BoxViewImageImport, ImagePrescription, ImagePrescriptionText, ImportImages, Line } from "./Styles"
import { useEffect, useState } from "react"
import api from "../../Service/Service"

export const ViewPrescription = ({ navigation, route }) => {


    const [consulta, setConsulta] = useState(null);
    const [descricaoExame, setDescricaoExame] = useState("");

    async function getConsulta() {
        await api.get(`/Consultas/BuscarPorId?id=${route.params.consultaId}`)
            .then(response => {
                
                setConsulta(response.data)
            }).catch(error => {
                console.log(error);
            })
    }



    async function InserirExame() {
        const formData = new FormData();
        formData.append("ConsultaId", route.params.consultaId)
        formData.append("Imagem", {
            uri: route.params.photoUri,
            name: `image.${route.params.photoUri.split('.').pop()}`,
            type: `image/${route.params.photoUri.split('.').pop()}`
        });

        console.log(formData);

        // await api.post(`/Exame/Cadastrar`, formData, {
        //     "Content-Type": "multipart/form-data"
        // }).then(response => {

        //     setDescricaoExame(descricaoExame + "/n" + response.data.descricao)

        // }).catch(error => {
        //     console.log('error');
        //     console.log(error);
        // })

        try {
            const response = await api.post(`/Exame/Cadastrar`, formData, {
                headers : {
                    "Content-Type": "multipart/form-data"
                }
            });

            setDescricaoExame(descricaoExame + "/n" + response.data.descricao)

        } catch (error) {

            console.log(error);
        }
    }

    useEffect(() => {
        getConsulta();
    }, [])

    useEffect(() => {
        console.log('route');
        console.log(route);
    }, [route])

    useEffect(() => {
        if (route.params != null) {
            InserirExame()
        }
    }, [route.params])

    return (

        <>

            <ScrollViewPrescriptiion>

                {
                    consulta != null ? (

                        <Container>

                            <ViewPrescriptiionImage
                            source={{ uri : consulta.medicoClinica.medico.idNavigation.foto}}
                            />

                            <TitleViewPrescriptiion>{consulta.medicoClinica.medico.idNavigation.nome}</TitleViewPrescriptiion>

                            <ContainerViewPrescriptiion>

                                <SubtitleViewPrescription>{consulta.medicoClinica.medico.especialidade.especialidade1}</SubtitleViewPrescription>
                                <SubtitleViewPrescription>{`CRM-${consulta.medicoClinica.medico.crm}`}</SubtitleViewPrescription>

                            </ContainerViewPrescriptiion>

                            <BoxInputViewPrescription
                                fieldWidth={100}
                                fieldHeight={121}
                                textLabel={'Descrição da consulta'}
                                // placeholder={consulta.descricao}
                                fieldValue={consulta.descricao}
                                keyType="text"
                                multiline={true}
                            />

                            <BoxInputPrescriptionView
                                fieldWidth={100}
                                fieldHeight={53}
                                textLabel={'Diagnóstico do paciente'}
                                // placeholder={consulta.diagnostico}
                                fieldValue={consulta.diagnostico}
                                keyType="text"
                                multiline={true}
                            />

                            <BoxInputViewPrescription
                                fieldWidth={100}
                                fieldHeight={121}
                                textLabel={'Prescrição médica'}
                                // placeholder={consulta.receita.medicamento}
                                fieldValue={consulta.receita.medicamento}
                                keyType="text"
                                multiline={true}
                            />

                            <BoxViewImageImport>

                                <ImportImages>
                                    {route.params ? <ImagePrescription source={{ uri: route.params.photoUri }} /> : <ImagePrescriptionText source={require("../../assets/InsertExams.png")} />}
                                </ImportImages>

                            </BoxViewImageImport>


                            <ContainerViewPrescriptionButton>

                                <ButtonSendPrescription text={'Enviar'} onPress={() => { navigation.navigate("CameraPrescription", { id: route.params.consultaId }) }} />
                                <ButtonCanceled text={'Cancelar'} />

                            </ContainerViewPrescriptionButton>

                            <Line></Line>

                            <BoxInputViewPrescription
                                fieldWidth={100}
                                fieldHeight={121}
                                keyType="text"
                                editable={false}
                                multiline={true}
                                fieldValue={descricaoExame}
                            />

                            <LinkBack onPress={() => navigation.replace("Main")} >Voltar</LinkBack>

                        </Container>

                    ) : (
                        <>
                        </>
                    )
                }

            </ScrollViewPrescriptiion>

        </>


    )
}