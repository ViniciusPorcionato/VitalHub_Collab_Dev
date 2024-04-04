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

    async function BuscarClinica() {
        await api.get(`/Clinica/BuscarPorId?id=${route.params.clinicaId}`)
            .then(response => {
                setClinica(response.data)
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {

        if (clinica == null) {
            BuscarClinica()
        }

    }, [clinica])



    return (

        <Container>

            {
                clinica != null && (
                    <>
                        <LocationImage>
                            <Map 
                            latitude={clinica.endereco.latitude}
                            longitude={clinica.endereco.longitude}
                            />
                        </LocationImage>

                        <TitleProfile>{clinica.nomeFantasia}</TitleProfile>

                        <SubtitleProfile>{clinica.endereco.cidade}</SubtitleProfile>

                        <BoxInput
                            textLabel='Endereço'
                            fieldValue={clinica.endereco.logradouro}
                            keyType='text'
                        />

                        <ContainerInput>

                            <BoxInput
                                textLabel='Número'
                                fieldValue={JSON.stringify(clinica.endereco.numero)}
                                keyType='numeric'
                                fieldWidth={45}
                                maxLength={8}
                            />

                            <BoxInput
                                textLabel='CEP'
                                fieldValue={clinica.endereco.cep}
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