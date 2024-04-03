import { BoxInput } from "../../components/BoxInput/BoxInput"
import { Container, ContainerInput } from "../../components/Container/ContainerStyle"
import { LinkAccount, LinkLocation } from "../../components/Links/Links"
import { SubtitleProfile, TitleProfile } from "../../components/Title/TitleStyle"
import { LocationImage } from "./Styles"
import Map from "../../components/Map/Map"
import { useEffect, useState } from "react"
import api from "../../Service/Service"


export const ConsultationLocation = ({ navigation, route }) => {

    const [clinica, setClinica] = useState(null)

    useEffect(() => {

        if (clinica == null) {
            BuscarClinica()
        }

    }, [clinica])

    async function BuscarClinica() {
        await api.get(`/Clinica/BuscarPorId?id=${route.params.clinicaID}`)
            .then(response => {
                setClinica(response.data)
            }).catch(error => {
                console.log(error);
            })
    }

    return (

        <Container>

            {
                clinica != null && (
                    <>
                        <LocationImage>
                            <Map />
                        </LocationImage>

                        <TitleProfile>Clínica Natureh</TitleProfile>

                        <SubtitleProfile>São Paulo, SP</SubtitleProfile>

                        <BoxInput
                            textLabel='Endereço'
                            placeholder='Endereço...'
                            keyType='text'
                        />

                        <ContainerInput>

                            <BoxInput
                                textLabel='Número'
                                placeholder='Número'
                                keyType='numeric'
                                fieldWidth={45}
                                maxLength={8}
                            />

                            <BoxInput
                                textLabel='Bairro'
                                placeholder='Bairro...'
                                keyType='text'
                                fieldWidth={50}
                            />

                        </ContainerInput>

                        <LinkLocation onPress={() => navigation.replace("Main")}>Voltar</LinkLocation>

                    </>
                )
            }

        </Container>
    )

}