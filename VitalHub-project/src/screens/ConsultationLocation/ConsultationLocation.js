import { BoxInput } from "../../components/BoxInput/BoxInput"
import { Container, ContainerInput } from "../../components/Container/ContainerStyle"
import { LinkAccount, LinkLocation } from "../../components/Links/Links"
import { SubtitleProfile, TitleProfile } from "../../components/Title/TitleStyle"
import { LocationImage } from "./Styles"
import Map from "../../components/Map/Map"


export const ConsultationLocation = ({navigation}) => {

    return (

        <Container>

            <LocationImage>
                <Map/>
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


        </Container>
    )

}